/**
 * WILDTRAIL - Shared State & UI Module
 * Handles: Cart persistence (localStorage), User auth (localStorage),
 * Unified SVG Icons (Outline, Stroke 1.5 - NO EMOJIS), Toast, and Cart Drawer.
 */

(function (window) {
  'use strict';

  // ============================================================
  // 1. UNIFIED SVG ICONS (Stroke 1.5 Outline - Strictly NO EMOJIS)
  // ============================================================
  const ICONS = {
    mountain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M4.14 15.08 7.5 10l3 3.5"/></svg>`,
    compass: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    cart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`,
    checkCircle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    alertCircle: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    arrowLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    minus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/></svg>`,
    trash: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
    star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    starOutline: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    lock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    truck: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
    shieldCheck: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    eye: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    eyeOff: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
    creditCard: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`,
    qrCode: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>`,
    menu: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
    spinner: `<svg class="spin-animate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`
  };

  // ============================================================
  // 2. CENTRAL CART MANAGER (localStorage)
  // ============================================================
  const CART_STORAGE_KEY = 'wildtrail_cart';
  const FREE_SHIPPING_THRESHOLD = 3000;

  function loadCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Error reading cart from localStorage', e);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      updateGlobalCartUI();
    } catch (e) {
      console.warn('Error saving cart to localStorage', e);
    }
  }

  function addToCart(product, quantity = 1, options = {}) {
    const cart = loadCart();
    const colorKey = options.colorKey || product.selectedColor || '';
    const colorLabel = options.colorLabel || product.selectedColorLabel || '';
    const size = options.size || product.selectedSize || '';
    const image = options.image || product.image || (product.colors && product.colors[0]?.images && product.colors[0].images[0]) || '';

    // Separate cart items by color and size
    const cartItemId = `${product.id || product.slug}${colorKey ? '_' + colorKey : ''}${size ? '_' + size : ''}`;

    const existing = cart.find(item => (item.cartItemId && item.cartItemId === cartItemId) || (!item.cartItemId && item.id === cartItemId));
    if (existing) {
      existing.quantity += quantity;
      if (image && !existing.image) existing.image = image;
    } else {
      let variantParts = [];
      if (colorLabel) variantParts.push(`สี: ${colorLabel}`);
      if (size) variantParts.push(`ไซซ์: ${size}`);
      const variantText = variantParts.length > 0 ? variantParts.join(' · ') : (product.specs || '');

      cart.push({
        id: product.id || product.slug,
        cartItemId: cartItemId,
        slug: product.slug || '',
        name: product.name,
        price: product.price,
        specs: variantText,
        category: product.category || '',
        image: image,
        colorKey: colorKey,
        colorLabel: colorLabel,
        size: size,
        quantity: quantity
      });
    }
    saveCart(cart);

    // Doherty Threshold (<0.4s response): Trigger bounce & open drawer immediately
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      badge.classList.remove('bounce');
      // trigger reflow
      void badge.offsetWidth;
      badge.classList.add('bounce');
    }

    openCartDrawer();

    showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว`);
  }

  function updateQuantity(id, delta) {
    let cart = loadCart();
    const item = cart.find(i => (i.cartItemId && i.cartItemId === id) || i.id === id);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        cart = cart.filter(i => (i.cartItemId ? i.cartItemId !== id : i.id !== id));
      }
    }
    saveCart(cart);
  }

  function removeFromCart(id) {
    const cart = loadCart().filter(item => (item.cartItemId ? item.cartItemId !== id : item.id !== id));
    saveCart(cart);
  }

  function clearCart() {
    saveCart([]);
  }

  function getCartTotal() {
    return loadCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function getCartCount() {
    return loadCart().reduce((sum, item) => sum + item.quantity, 0);
  }

  // ============================================================
  // 3. USER AUTH MANAGER (localStorage)
  // ============================================================
  const USER_STORAGE_KEY = 'wildtrail_user';

  function getUser() {
    try {
      const data = localStorage.getItem(USER_STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  function setUser(name, email) {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ name, email, loggedInAt: Date.now() }));
      updateNavbarUser();
    } catch (e) {
      console.warn('Error saving user to localStorage', e);
    }
  }

  function logout() {
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
      updateNavbarUser();
      showToast('ออกจากระบบเรียบร้อยแล้ว');
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (e) {
      console.warn('Error clearing user', e);
    }
  }

  function updateNavbarUser() {
    const userContainer = document.getElementById('nav-user-container');
    if (!userContainer) return;

    const user = getUser();
    if (user && user.name) {
      userContainer.innerHTML = `
        <div class="nav-user-badge">
          <a href="#" id="btn-user-profile" class="nav-user-link" aria-label="ข้อมูลผู้ใช้: ${user.name}">
            ${ICONS.user}
            <span class="nav-user-name">สวัสดี, ${user.name}</span>
          </a>
          <button id="btn-nav-logout" class="nav-logout-btn" title="ออกจากระบบ" aria-label="ออกจากระบบ">
            ${ICONS.close}
          </button>
        </div>
      `;
      const logoutBtn = document.getElementById('btn-nav-logout');
      if (logoutBtn) logoutBtn.addEventListener('click', logout);
    } else {
      userContainer.innerHTML = `
        <a href="login.html" class="nav-icon-btn" title="เข้าสู่ระบบ / สมัครสมาชิก" aria-label="เข้าสู่ระบบ หรือ สมัครสมาชิก">
          ${ICONS.user}
        </a>
      `;
    }
  }

  // ============================================================
  // 4. TOAST NOTIFICATIONS (Doherty Threshold & Actions)
  // ============================================================
  let toastContainer = null;

  function showToast(message, options = {}) {
    if (!toastContainer) {
      toastContainer = document.getElementById('toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container';
        toastContainer.setAttribute('aria-live', 'polite');
        document.body.appendChild(toastContainer);
      }
    }

    const toast = document.createElement('div');
    toast.className = `toast ${options.isError ? 'toast-error' : ''}`;

    const iconHtml = options.isError ? ICONS.alertCircle : ICONS.checkCircle;
    let actionBtnHtml = '';
    if (options.actionText) {
      actionBtnHtml = `<button type="button" class="toast-action-btn">${options.actionText}</button>`;
    }

    toast.innerHTML = `
      <div class="toast-icon">${iconHtml}</div>
      <div class="toast-text">${message}</div>
      ${actionBtnHtml}
    `;

    toastContainer.appendChild(toast);

    if (options.onAction && options.actionText) {
      const btn = toast.querySelector('.toast-action-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          options.onAction();
          toast.remove();
        });
      }
    }

    const duration = options.duration || 3400;
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  // ============================================================
  // 5. CART DRAWER (Zeigarnik Effect: Free Shipping Bar & Steppers)
  // ============================================================
  function updateGlobalCartUI() {
    const totalCount = getCartCount();
    const totalPrice = getCartTotal();

    // Update badges
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = totalCount;
    });

    // Update Drawer if open
    const drawerList = document.getElementById('cart-drawer-items');
    const drawerTotal = document.getElementById('cart-drawer-total');
    const freeShippingBar = document.getElementById('free-shipping-progress');
    const freeShippingText = document.getElementById('free-shipping-text');
    const checkoutBtn = document.getElementById('cart-drawer-checkout-btn');

    if (drawerTotal) {
      drawerTotal.textContent = `฿${totalPrice.toLocaleString()}`;
    }

    // Zeigarnik Effect: Free shipping threshold
    if (freeShippingBar && freeShippingText) {
      const percent = Math.min(100, Math.round((totalPrice / FREE_SHIPPING_THRESHOLD) * 100));
      freeShippingBar.style.width = `${percent}%`;

      if (totalPrice >= FREE_SHIPPING_THRESHOLD) {
        freeShippingText.innerHTML = `<span style="color: var(--color-success); font-weight: 600;">คุณได้รับสิทธิ์จัดส่งฟรีทั่วไทย!</span>`;
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - totalPrice;
        freeShippingText.textContent = `ซื้อเพิ่มอีก ฿${remaining.toLocaleString()} เพื่อรับสิทธิ์จัดส่งฟรี`;
      }
    }

    if (checkoutBtn) {
      if (totalCount === 0) {
        checkoutBtn.setAttribute('disabled', 'true');
        checkoutBtn.style.opacity = '0.5';
        checkoutBtn.style.pointerEvents = 'none';
      } else {
        checkoutBtn.removeAttribute('disabled');
        checkoutBtn.style.opacity = '1';
        checkoutBtn.style.pointerEvents = 'auto';
      }
    }

    if (drawerList) {
      const cart = loadCart();
      if (cart.length === 0) {
        drawerList.innerHTML = `
          <div class="cart-empty-state">
            <div class="cart-empty-icon">${ICONS.cart}</div>
            <p>ยังไม่มีสินค้าในตะกร้า</p>
            <a href="index.html#bestsellers" class="btn btn-secondary" onclick="WILDTRAIL.closeCartDrawer()">เลือกชมสินค้า</a>
          </div>
        `;
      } else {
        drawerList.innerHTML = cart.map(item => {
          const itemId = item.cartItemId || item.id;
          return `
          <div class="cart-item-row" data-id="${itemId}">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" class="cart-item-thumb" style="width: 48px; height: 60px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.12); flex-shrink: 0; background: #E9E8E6;">` : ''}
            <div class="cart-item-details">
              <h4 class="cart-item-title">${item.name}</h4>
              <div class="cart-item-specs">${item.specs || ''}</div>
              <div class="cart-item-price">฿${(item.price * item.quantity).toLocaleString()} <span class="cart-item-unit">(฿${item.price.toLocaleString()}/ชิ้น)</span></div>
            </div>
            <div class="cart-item-controls">
              <div class="quantity-stepper">
                <button type="button" class="btn-stepper" data-action="decrease" data-id="${itemId}" aria-label="ลดจำนวน">${ICONS.minus}</button>
                <span class="stepper-value">${item.quantity}</span>
                <button type="button" class="btn-stepper" data-action="increase" data-id="${itemId}" aria-label="เพิ่มจำนวน">${ICONS.plus}</button>
              </div>
              <button type="button" class="btn-remove-item" data-action="remove" data-id="${itemId}" aria-label="ลบออกจากตะกร้า">${ICONS.trash}</button>
            </div>
          </div>
        `;}).join('');

        // Bind Stepper & Remove clicks
        drawerList.querySelectorAll('[data-action]').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            const action = target.getAttribute('data-action');
            const id = target.getAttribute('data-id');

            if (action === 'increase') {
              updateQuantity(id, 1);
            } else if (action === 'decrease') {
              updateQuantity(id, -1);
            } else if (action === 'remove') {
              removeFromCart(id);
              showToast('นำสินค้าออกจากตะกร้าแล้ว');
            }
          });
        });
      }
    }
  }

  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      updateGlobalCartUI();
      drawer.classList.add('open');
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ============================================================
  // 6. INITIALIZATION & EXPORTS
  // ============================================================
  window.addEventListener('DOMContentLoaded', () => {
    updateGlobalCartUI();
    updateNavbarUser();

    // Bind cart toggle buttons
    document.querySelectorAll('.btn-cart-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
      });
    });

    const closeBtn = document.getElementById('cart-drawer-close');
    const backdrop = document.getElementById('cart-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
    if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

    // Escape key closes modal & drawer
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
      }
    });
  });

  // Export globally
  window.WILDTRAIL = {
    ICONS,
    loadCart,
    saveCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    getUser,
    setUser,
    logout,
    showToast,
    openCartDrawer,
    closeCartDrawer,
    updateGlobalCartUI,
    updateNavbarUser
  };

})(window);
