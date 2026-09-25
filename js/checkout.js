/**
 * WILDTRAIL - Checkout Script (js/checkout.js)
 * Implements: Stepper, 60/40 Layout Calculation, PromptPay QR Timer,
 * Credit Card 4-Digit Formatting & Brand Detection, Promo Code, Postel's Law Phone,
 * Order Success Modal (Peak-End Rule), and Zero Storage of Sensitive Card Data.
 */

(function () {
  'use strict';

  // DOM Elements
  const checkoutItemsList = document.getElementById('checkout-items-list');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryShipping = document.getElementById('summary-shipping');
  const summaryDiscount = document.getElementById('summary-discount');
  const rowDiscount = document.getElementById('row-discount');
  const summaryGrandTotal = document.getElementById('summary-grand-total');
  const btnSubmitOrder = document.getElementById('btn-submit-order');
  const btnSubmitOrderText = document.getElementById('btn-submit-order-text');
  const btnSubmitOrderMobile = document.getElementById('btn-submit-order-mobile');

  const promoInput = document.getElementById('promo-input');
  const btnApplyPromo = document.getElementById('btn-apply-promo');
  const promoFeedback = document.getElementById('promo-feedback');

  const formCheckout = document.getElementById('checkout-form');
  const shipName = document.getElementById('ship-name');
  const shipPhone = document.getElementById('ship-phone');
  const shipEmail = document.getElementById('ship-email');
  const shipAddress = document.getElementById('ship-address');
  const shipProvince = document.getElementById('ship-province');
  const shipPostal = document.getElementById('ship-postal');

  // Radio cards
  const shippingRadios = document.querySelectorAll('input[name="shippingMethod"]');
  const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
  const subpanelPromptpay = document.getElementById('subpanel-promptpay');
  const subpanelCard = document.getElementById('subpanel-card');
  const subpanelCod = document.getElementById('subpanel-cod');

  const cardNumber = document.getElementById('card-number');
  const cardExpiry = document.getElementById('card-expiry');
  const cardCvv = document.getElementById('card-cvv');
  const cardBrandBadge = document.getElementById('card-brand-badge');

  // State
  let appliedDiscountPercent = 0;
  let shippingCost = 0;

  // ============================================================
  // 1. POPULATE CART & DEFAULT IF EMPTY
  // ============================================================
  function ensureCartData() {
    let cart = window.WILDTRAIL ? window.WILDTRAIL.loadCart() : [];
    if (!cart || cart.length === 0) {
      // Add initial item for smooth user walkthrough
      cart = [
        {
          id: 'prod-1',
          name: 'เต็นท์โดม 2 คน WILDTRAIL Peak Pro',
          price: 3290,
          specs: 'กันน้ำ 3,000 มม. · เสา 7001 · 1.95 กก.',
          quantity: 1
        }
      ];
      if (window.WILDTRAIL && window.WILDTRAIL.saveCart) {
        window.WILDTRAIL.saveCart(cart);
      }
    }
    renderSummaryItems(cart);
    calculateTotals();
  }

  function renderSummaryItems(cart) {
    if (!checkoutItemsList) return;
    const isEn = window.WILDTRAIL && window.WILDTRAIL.getLang ? window.WILDTRAIL.getLang() === 'en' : false;
    const getLoc = window.getLocalizedProduct || ((p) => p);

    checkoutItemsList.innerHTML = cart.map(item => {
      let displayName = item.name;
      let displaySpecs = item.specs || '';
      if (window.getProductById) {
        const p = window.getProductById(item.id);
        if (p) {
          const lp = getLoc(p, isEn ? 'en' : 'th');
          displayName = lp.name;
          if (item.selectedColor) {
            const cObj = lp.colors.find(c => c.key === item.selectedColor);
            const colorName = cObj ? cObj.label : item.selectedColorLabel;
            displaySpecs = isEn ? `Color: ${colorName}` : `สี: ${colorName}`;
            if (item.selectedSize) {
              displaySpecs += ` · ${isEn ? 'Size: ' : 'ขนาด: '}${item.selectedSize}`;
            }
          }
        }
      }
      const qtyLabel = isEn ? 'Qty' : 'จำนวน';
      return `
        <div class="summary-item-row" style="display: flex; align-items: center; gap: 12px;">
          ${item.image ? `<img src="${item.image}" alt="${displayName}" style="width: 44px; height: 55px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.12); flex-shrink: 0; background: #E9E8E6;">` : ''}
          <div class="summary-item-info" style="flex: 1;">
            <span class="summary-item-title">${displayName}</span>
            <span class="summary-item-qty">${displaySpecs ? displaySpecs + ' · ' : ''}${qtyLabel}: ${item.quantity}</span>
          </div>
          <strong>฿${(item.price * item.quantity).toLocaleString()}</strong>
        </div>
      `;
    }).join('');
  }

  function calculateTotals() {
    const cart = window.WILDTRAIL ? window.WILDTRAIL.loadCart() : [];
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Shipping cost calculation
    const selectedShipping = document.querySelector('input[name="shippingMethod"]:checked')?.value || 'standard';
    if (selectedShipping === 'express') {
      shippingCost = 60;
    } else {
      shippingCost = subtotal >= 3000 ? 0 : 40;
    }

    // Discount calculation
    let discountAmount = 0;
    if (appliedDiscountPercent > 0) {
      discountAmount = Math.round(subtotal * (appliedDiscountPercent / 100));
    }

    const grandTotal = Math.max(0, subtotal + shippingCost - discountAmount);
    const isEn = window.WILDTRAIL && window.WILDTRAIL.getLang ? window.WILDTRAIL.getLang() === 'en' : false;
    const freeText = isEn ? 'Free' : 'ฟรี';
    const confirmText = isEn ? 'Confirm Order' : 'ยืนยันการสั่งซื้อ';

    if (summarySubtotal) summarySubtotal.textContent = `฿${subtotal.toLocaleString()}`;
    if (summaryShipping) summaryShipping.textContent = shippingCost === 0 ? freeText : `฿${shippingCost}`;

    if (rowDiscount && summaryDiscount) {
      if (discountAmount > 0) {
        rowDiscount.style.display = 'flex';
        summaryDiscount.textContent = `-฿${discountAmount.toLocaleString()}`;
      } else {
        rowDiscount.style.display = 'none';
      }
    }

    if (summaryGrandTotal) summaryGrandTotal.textContent = `฿${grandTotal.toLocaleString()}`;
    if (btnSubmitOrderText) btnSubmitOrderText.textContent = `${confirmText} · ฿${grandTotal.toLocaleString()}`;
  }

  // ============================================================
  // 2. SHIPPING & PAYMENT RADIO CARDS
  // ============================================================
  shippingRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.radio-cards-grid label.radio-card').forEach(l => {
        if (l.querySelector('input[name="shippingMethod"]')) {
          l.classList.remove('active');
        }
      });
      radio.closest('label').classList.add('active');
      calculateTotals();
    });
  });

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.radio-cards-grid label.radio-card').forEach(l => {
        if (l.querySelector('input[name="paymentMethod"]')) {
          l.classList.remove('active');
        }
      });
      radio.closest('label').classList.add('active');

      const val = radio.value;
      if (subpanelPromptpay) subpanelPromptpay.classList.toggle('active', val === 'promptpay');
      if (subpanelCard) subpanelCard.classList.toggle('active', val === 'card');
      if (subpanelCod) subpanelCod.classList.toggle('active', val === 'cod');
    });
  });

  // PromptPay Countdown Timer (15:00)
  let timerSeconds = 15 * 60;
  const timerEl = document.getElementById('qr-timer');
  if (timerEl) {
    setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;
        const m = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
        const s = String(timerSeconds % 60).padStart(2, '0');
        timerEl.textContent = `${m}:${s}`;
      }
    }, 1000);
  }

  // Credit Card Formatter & Brand Detection
  if (cardNumber) {
    cardNumber.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 16);
      let formatted = v.match(/.{1,4}/g)?.join(' ') || v;
      e.target.value = formatted;

      // Brand Detection
      if (cardBrandBadge) {
        if (v.startsWith('4')) {
          cardBrandBadge.textContent = 'VISA';
          cardBrandBadge.style.color = '#60A5FA';
        } else if (v.startsWith('5')) {
          cardBrandBadge.textContent = 'Mastercard';
          cardBrandBadge.style.color = '#F87171';
        } else {
          cardBrandBadge.textContent = 'VISA / Mastercard';
          cardBrandBadge.style.color = '';
        }
      }
    });
  }

  if (cardExpiry) {
    cardExpiry.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (v.length >= 3) {
        e.target.value = v.substring(0, 2) + '/' + v.substring(2);
      } else {
        e.target.value = v;
      }
    });
  }

  if (cardCvv) {
    cardCvv.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
    });
  }

  // ============================================================
  // 3. PROMO CODE (WILD10 = 10% Off)
  // ============================================================
  if (btnApplyPromo && promoInput) {
    btnApplyPromo.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) return;

      if (code === 'WILD10' || code === 'WILDTRAIL') {
        appliedDiscountPercent = 10;
        promoFeedback.style.display = 'block';
        promoFeedback.style.color = 'var(--color-success)';
        promoFeedback.textContent = 'ใช้งานโค้ดส่วนลด 10% สำเร็จ';
        calculateTotals();
        if (window.WILDTRAIL) window.WILDTRAIL.showToast('รับส่วนลด 10% สำเร็จ!');
      } else {
        promoFeedback.style.display = 'block';
        promoFeedback.style.color = 'var(--color-error)';
        promoFeedback.textContent = 'โค้ดส่วนลดไม่ถูกต้องหรือหมดอายุ (ลองใช้ WILD10)';
      }
    });
  }

  // ============================================================
  // 4. INLINE VALIDATION & POSTEL'S LAW FOR PHONE
  // ============================================================
  function validatePhone(phone) {
    // Postel's Law: accepts with and without dashes/spaces
    const clean = phone.replace(/[\s-]/g, '');
    return /^[0-9]{9,10}$/.test(clean);
  }

  function setFieldError(groupEl, isError) {
    if (!groupEl) return;
    if (isError) {
      groupEl.classList.add('has-error');
    } else {
      groupEl.classList.remove('has-error');
    }
  }

  // Auto-fill user if logged in
  const currentUser = window.WILDTRAIL ? window.WILDTRAIL.getUser() : null;
  if (currentUser) {
    if (shipName && !shipName.value) shipName.value = currentUser.name || '';
    if (shipEmail && !shipEmail.value) shipEmail.value = currentUser.email || '';
    const banner = document.getElementById('guest-login-banner');
    if (banner) banner.style.display = 'none';
  }

  // ============================================================
  // 5. ORDER SUBMISSION & PEAK-END SUCCESS MODAL
  // ============================================================
  function handleSubmitOrder(e) {
    if (e) e.preventDefault();

    const name = shipName.value.trim();
    const phone = shipPhone.value.trim();
    const email = shipEmail.value.trim();
    const address = shipAddress.value.trim();
    const province = shipProvince.value.trim();
    const postal = shipPostal.value.trim();

    const nameValid = name.length > 0;
    const phoneValid = validatePhone(phone);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const addressValid = address.length > 0;
    const provinceValid = province.length > 0;
    const postalValid = postal.length === 5;

    setFieldError(document.getElementById('group-ship-name'), !nameValid);
    setFieldError(document.getElementById('group-ship-phone'), !phoneValid);
    setFieldError(document.getElementById('group-ship-email'), !emailValid);
    setFieldError(document.getElementById('group-ship-address'), !addressValid);
    setFieldError(document.getElementById('group-ship-province'), !provinceValid);
    setFieldError(document.getElementById('group-ship-postal'), !postalValid);

    // If card payment is selected, validate card details
    const selectedPay = document.querySelector('input[name="paymentMethod"]:checked')?.value;
    let cardValid = true;
    if (selectedPay === 'card') {
      const cNum = cardNumber.value.replace(/\s/g, '');
      const cExp = cardExpiry.value.trim();
      const cCvv = cardCvv.value.trim();

      const numOk = cNum.length === 16;
      const expOk = /^\d{2}\/\d{2}$/.test(cExp);
      const cvvOk = cCvv.length >= 3;

      setFieldError(document.getElementById('group-card-number'), !numOk);
      setFieldError(document.getElementById('group-card-expiry'), !expOk);
      setFieldError(document.getElementById('group-card-cvv'), !cvvOk);

      if (!numOk || !expOk || !cvvOk) cardValid = false;
    }

    if (!nameValid || !phoneValid || !emailValid || !addressValid || !provinceValid || !postalValid || !cardValid) {
      if (window.WILDTRAIL) {
        window.WILDTRAIL.showToast('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน', { isError: true });
      }
      return;
    }

    // Submit state: loading spinner
    btnSubmitOrder.disabled = true;
    btnSubmitOrder.innerHTML = `
      <svg class="spin-animate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
      <span>กำลังยืนยันคำสั่งซื้อ...</span>
    `;

    setTimeout(() => {
      // Peak-End Rule: Show Success Modal
      const grandTotalText = summaryGrandTotal.textContent;
      const orderId = '#WT-2026-' + Math.floor(1000 + Math.random() * 9000);

      const isEn = window.WILDTRAIL && window.WILDTRAIL.getLang ? window.WILDTRAIL.getLang() === 'en' : false;
      // Estimated date: +3 to 5 days
      const now = new Date();
      now.setDate(now.getDate() + 3);
      const deliveryDateStr = isEn ? `${now.getDate()} - ${now.getDate() + 2} October 2026` : `${now.getDate()} - ${now.getDate() + 2} ตุลาคม 2026`;

      const idEl = document.getElementById('success-order-id');
      const buyerEl = document.getElementById('success-buyer-name');
      const dateEl = document.getElementById('success-delivery-date');
      const totalEl = document.getElementById('success-total-paid');
      const modalBackdrop = document.getElementById('success-modal-backdrop');

      if (idEl) idEl.textContent = orderId;
      if (buyerEl) buyerEl.textContent = `${name} (${phone})`;
      if (dateEl) dateEl.textContent = deliveryDateStr;
      if (totalEl) totalEl.textContent = grandTotalText;

      // Clear cart
      if (window.WILDTRAIL && window.WILDTRAIL.clearCart) {
        window.WILDTRAIL.clearCart();
      }

      if (modalBackdrop) modalBackdrop.classList.add('open');
    }, 800);
  }

  if (formCheckout) formCheckout.addEventListener('submit', handleSubmitOrder);
  if (btnSubmitOrder) btnSubmitOrder.addEventListener('click', handleSubmitOrder);
  if (btnSubmitOrderMobile) btnSubmitOrderMobile.addEventListener('click', handleSubmitOrder);

  // Language Change Listener
  window.addEventListener('wildtrail:langchange', () => {
    let cart = window.WILDTRAIL ? window.WILDTRAIL.loadCart() : [];
    renderSummaryItems(cart);
    calculateTotals();
  });

  // Initialize
  window.addEventListener('DOMContentLoaded', () => {
    ensureCartData();
  });

})();
