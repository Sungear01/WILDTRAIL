/**
 * WILDTRAIL - Product Detail Page Script (js/product-detail.js)
 * Implements: 2-Column Responsive Layout, Color/Size Selectors,
 * 3-View Gallery with 200ms Fade & Desktop Hover Zoom, Mobile Swipe & Sticky Bar,
 * Lightbox, Size Chart Modal, Cart Integration with Color+Size separation,
 * URL State Synchronization, and Related Products.
 * Strictly NO EMOJIS, Outline SVG Icons (Stroke 1.5).
 */

(function () {
  'use strict';

  // ============================================================
  // 1. URL PARAMETERS & PRODUCT LOOKUP
  // ============================================================
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug') || 'tent-dome';
  const product = window.getProductBySlug ? window.getProductBySlug(slug) : null;

  // DOM Elements
  const productNotFoundEl = document.getElementById('product-not-found');
  const productContentSection = document.getElementById('product-content-section');
  const bottomSection = document.querySelector('.product-bottom-section');
  const reviewsSection = document.getElementById('reviews-section');
  const relatedSection = document.getElementById('related-products-section');

  if (!product) {
    if (productNotFoundEl) productNotFoundEl.style.display = 'flex';
    if (productContentSection) productContentSection.style.display = 'none';
    if (bottomSection) bottomSection.style.display = 'none';
    if (reviewsSection) reviewsSection.style.display = 'none';
    if (relatedSection) relatedSection.style.display = 'none';
    document.title = 'ไม่พบสินค้า | WILDTRAIL';
    return;
  }

  // Update Page Title and Meta Description
  document.title = `${product.name} | WILDTRAIL`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', product.shortDesc);

  // ============================================================
  // 2. STATE MANAGEMENT
  // ============================================================
  const initialColorParam = urlParams.get('color');
  const initialSizeParam = urlParams.get('size');

  // Validate or fallback color
  let activeColor = product.colors.find(c => c.key === initialColorParam) || product.colors[0];
  let activeSize = (product.sizes && product.sizes.includes(initialSizeParam)) ? initialSizeParam : null;
  let activeViewIndex = 0; // 0: front, 1: angle, 2: detail
  let currentQty = 1;

  const ICONS = window.WILDTRAIL ? window.WILDTRAIL.ICONS : {
    checkCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    alertCircle: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    cart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`
  };

  function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set('slug', product.slug);
    if (activeColor) url.searchParams.set('color', activeColor.key);
    if (activeSize) url.searchParams.set('size', activeSize);
    else url.searchParams.delete('size');
    window.history.replaceState({}, '', url.toString());
  }

  // ============================================================
  // 3. RENDER STATIC PRODUCT INFORMATION
  // ============================================================
  document.getElementById('breadcrumb-category').textContent = product.category;
  document.getElementById('breadcrumb-title').textContent = product.name;

  document.getElementById('product-category-label').textContent = product.category;
  document.getElementById('product-title').textContent = product.name;
  document.getElementById('product-rating-num').textContent = product.rating.toFixed(1);
  document.getElementById('reviews-scroll-link').textContent = `(${product.reviewCount} รีวิว)`;
  document.getElementById('product-short-desc').textContent = product.shortDesc;

  // Star display in header
  const starsContainer = document.getElementById('product-stars-display');
  if (starsContainer) {
    starsContainer.innerHTML = Array(5).fill(ICONS.star).join('');
  }

  // Pricing
  document.getElementById('product-price-display').textContent = `฿${product.price.toLocaleString()}`;
  if (product.compareAtPrice && product.compareAtPrice > product.price) {
    const compareEl = document.getElementById('product-compare-display');
    const discountEl = document.getElementById('product-discount-badge');
    const pct = Math.round((1 - product.price / product.compareAtPrice) * 100);
    compareEl.textContent = `฿${product.compareAtPrice.toLocaleString()}`;
    compareEl.style.display = 'inline';
    discountEl.textContent = `-${pct}%`;
    discountEl.style.display = 'inline-block';
  }

  // Mobile Sticky Bar
  const mobileBarThumb = document.getElementById('mobile-bar-thumb');
  const mobileBarTitle = document.getElementById('mobile-bar-title');
  const mobileBarPrice = document.getElementById('mobile-bar-price');
  if (mobileBarTitle) mobileBarTitle.textContent = product.name;
  if (mobileBarPrice) mobileBarPrice.textContent = `฿${product.price.toLocaleString()}`;

  // ============================================================
  // 4. STOCK CALCULATION & DISPLAY
  // ============================================================
  function getCurrentStock() {
    if (product.sizes && product.sizes.length > 0) {
      if (!activeSize) {
        // Return max stock among available sizes for current color
        let maxS = 0;
        product.sizes.forEach(s => {
          const count = product.stock[`${activeColor.key}_${s}`] || 0;
          if (count > maxS) maxS = count;
        });
        return maxS;
      }
      return product.stock[`${activeColor.key}_${activeSize}`] || 0;
    }
    return product.stock[activeColor.key] || 0;
  }

  function updateStockUI() {
    const stock = getCurrentStock();
    const stockBox = document.getElementById('stock-status-box');
    const stockIcon = document.getElementById('stock-status-icon');
    const stockText = document.getElementById('stock-status-text');
    const addBtn = document.getElementById('btn-add-to-cart-main');
    const addBtnText = document.getElementById('btn-add-to-cart-text');
    const buyBtn = document.getElementById('btn-buy-now');
    const mobileAddBtn = document.getElementById('btn-mobile-bar-add');

    stockBox.classList.remove('stock-in', 'stock-low', 'stock-out');

    if (stock === 0) {
      stockBox.classList.add('stock-out');
      stockIcon.innerHTML = ICONS.alertCircle;
      stockText.textContent = 'สินค้าหมดชั่วคราว';
      if (addBtn) {
        addBtn.setAttribute('disabled', 'true');
        addBtn.style.opacity = '0.5';
        addBtnText.textContent = 'สินค้าหมด';
      }
      if (buyBtn) {
        buyBtn.setAttribute('disabled', 'true');
        buyBtn.style.opacity = '0.5';
      }
      if (mobileAddBtn) {
        mobileAddBtn.setAttribute('disabled', 'true');
        mobileAddBtn.textContent = 'สินค้าหมด';
      }
    } else if (stock <= 3) {
      stockBox.classList.add('stock-low');
      stockIcon.innerHTML = ICONS.alertCircle;
      stockText.textContent = `เหลือเพียง ${stock} ชิ้นเท่านั้น!`;
      if (addBtn) {
        addBtn.removeAttribute('disabled');
        addBtn.style.opacity = '1';
        addBtnText.textContent = 'เพิ่มลงตะกร้า';
      }
      if (buyBtn) {
        buyBtn.removeAttribute('disabled');
        buyBtn.style.opacity = '1';
      }
      if (mobileAddBtn) {
        mobileAddBtn.removeAttribute('disabled');
        mobileAddBtn.textContent = 'เพิ่มลงตะกร้า';
      }
    } else {
      stockBox.classList.add('stock-in');
      stockIcon.innerHTML = ICONS.checkCircle;
      stockText.textContent = `มีสินค้าพร้อมส่ง (${stock} ชิ้น)`;
      if (addBtn) {
        addBtn.removeAttribute('disabled');
        addBtn.style.opacity = '1';
        addBtnText.textContent = 'เพิ่มลงตะกร้า';
      }
      if (buyBtn) {
        buyBtn.removeAttribute('disabled');
        buyBtn.style.opacity = '1';
      }
      if (mobileAddBtn) {
        mobileAddBtn.removeAttribute('disabled');
        mobileAddBtn.textContent = 'เพิ่มลงตะกร้า';
      }
    }

    // Clamp currentQty to stock
    if (stock > 0 && currentQty > stock) {
      currentQty = stock;
    } else if (stock === 0) {
      currentQty = 1;
    }
    updateQtyUI();
  }

  // ============================================================
  // 5. COLOR SELECTION
  // ============================================================
  function renderColorSwatches() {
    const container = document.getElementById('color-swatches-container');
    const colorLabel = document.getElementById('selected-color-name');
    if (!container) return;

    colorLabel.textContent = activeColor.label;

    container.innerHTML = product.colors.map(c => {
      // Check if out of stock across all variants
      let isSoldOut = false;
      if (product.sizes && product.sizes.length > 0) {
        const total = product.sizes.reduce((sum, s) => sum + (product.stock[`${c.key}_${s}`] || 0), 0);
        isSoldOut = total === 0;
      } else {
        isSoldOut = (product.stock[c.key] || 0) === 0;
      }

      const isActive = c.key === activeColor.key;
      return `
        <button type="button" 
          class="color-swatch-btn ${isActive ? 'active' : ''} ${isSoldOut ? 'disabled' : ''}" 
          style="background-color: ${c.hex};" 
          data-color="${c.key}" 
          title="${c.label}${isSoldOut ? ' (สินค้าหมด)' : ''}"
          aria-label="${c.label}"
          ${isSoldOut ? 'aria-disabled="true"' : ''}>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.color-swatch-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = e.currentTarget.getAttribute('data-color');
        const chosen = product.colors.find(c => c.key === key);
        if (chosen) {
          activeColor = chosen;
          renderColorSwatches();
          renderSizeButtons();
          updateGalleryImages();
          updateStockUI();
          updateURL();
        }
      });
    });
  }

  // ============================================================
  // 6. SIZE SELECTION (if applicable)
  // ============================================================
  function renderSizeButtons() {
    const group = document.getElementById('size-selector-group');
    const container = document.getElementById('size-buttons-container');
    const sizeLabel = document.getElementById('selected-size-name');
    if (!product.sizes || product.sizes.length === 0) {
      if (group) group.style.display = 'none';
      return;
    }

    if (group) group.style.display = 'flex';
    if (sizeLabel) sizeLabel.textContent = activeSize || 'ยังไม่ได้เลือก';

    container.innerHTML = product.sizes.map(s => {
      const stock = product.stock[`${activeColor.key}_${s}`] || 0;
      const isSoldOut = stock === 0;
      const isActive = s === activeSize;

      return `
        <button type="button" 
          class="size-btn ${isActive ? 'active' : ''} ${isSoldOut ? 'disabled' : ''}" 
          data-size="${s}" 
          ${isSoldOut ? 'disabled aria-disabled="true"' : ''}>
          ${s}
        </button>
      `;
    }).join('');

    container.querySelectorAll('.size-btn:not(.disabled)').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeSize = e.currentTarget.getAttribute('data-size');
        const errorMsg = document.getElementById('size-error-msg');
        if (errorMsg) errorMsg.classList.remove('visible');
        renderSizeButtons();
        updateStockUI();
        updateURL();
      });
    });
  }

  // ============================================================
  // 7. QUANTITY STEPPER
  // ============================================================
  function updateQtyUI() {
    const valEl = document.getElementById('qty-val-display');
    const minusBtn = document.getElementById('btn-qty-minus');
    const plusBtn = document.getElementById('btn-qty-plus');
    const stock = getCurrentStock();

    if (valEl) valEl.textContent = currentQty;

    if (minusBtn) minusBtn.disabled = (currentQty <= 1);
    if (plusBtn) plusBtn.disabled = (stock <= 0 || currentQty >= stock);
  }

  document.getElementById('btn-qty-minus')?.addEventListener('click', () => {
    if (currentQty > 1) {
      currentQty -= 1;
      updateQtyUI();
    }
  });

  document.getElementById('btn-qty-plus')?.addEventListener('click', () => {
    const stock = getCurrentStock();
    if (currentQty < stock) {
      currentQty += 1;
      updateQtyUI();
    }
  });

  // ============================================================
  // 8. IMAGE GALLERY (3 Angles, 200ms Fade, Desktop Zoom & Mobile Swipe)
  // ============================================================
  const mainImg = document.getElementById('gallery-main-img');
  const mainBox = document.getElementById('gallery-main-box');
  const thumbsContainer = document.getElementById('gallery-thumbnails-container');
  const dotsContainer = document.getElementById('gallery-dots-container');

  const VIEW_LABELS = ['มุมด้านหน้า', 'มุมเฉียง 45°', 'รายละเอียดซูม'];

  function updateGalleryImages() {
    if (!activeColor || !activeColor.images) return;
    const images = activeColor.images;

    // Safety clamp
    if (activeViewIndex >= images.length) activeViewIndex = 0;

    // Update main image with 200ms fade
    if (mainImg) {
      mainImg.classList.add('fade-out');
      setTimeout(() => {
        mainImg.src = images[activeViewIndex];
        mainImg.alt = `${product.name} - ${activeColor.label} (${VIEW_LABELS[activeViewIndex]})`;
        mainImg.classList.remove('fade-out');
      }, 100);
    }

    // Update Mobile Sticky bar thumb
    if (mobileBarThumb) {
      mobileBarThumb.src = images[0];
    }

    // Render Thumbnails
    if (thumbsContainer) {
      thumbsContainer.innerHTML = images.map((src, idx) => `
        <button type="button" class="thumb-btn ${idx === activeViewIndex ? 'active' : ''}" data-index="${idx}" aria-label="ดูภาพ ${VIEW_LABELS[idx]}">
          <img src="${src}" alt="${VIEW_LABELS[idx]}" loading="lazy">
          <span class="thumb-label">${VIEW_LABELS[idx]}</span>
        </button>
      `).join('');

      thumbsContainer.querySelectorAll('.thumb-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          activeViewIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10);
          updateGalleryImages();
        });
      });
    }

    // Render Mobile Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = images.map((_, idx) => `
        <div class="gallery-dot ${idx === activeViewIndex ? 'active' : ''}" data-index="${idx}"></div>
      `).join('');

      dotsContainer.querySelectorAll('.gallery-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
          activeViewIndex = parseInt(e.currentTarget.getAttribute('data-index'), 10);
          updateGalleryImages();
        });
      });
    }
  }

  // Previous & Next navigation
  document.getElementById('gallery-btn-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const len = activeColor.images.length;
    activeViewIndex = (activeViewIndex - 1 + len) % len;
    updateGalleryImages();
  });

  document.getElementById('gallery-btn-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const len = activeColor.images.length;
    activeViewIndex = (activeViewIndex + 1) % len;
    updateGalleryImages();
  });

  // Desktop Hover Zoom Effect
  if (mainBox && mainImg) {
    mainBox.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 1024) return;
      const rect = mainBox.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainImg.style.transform = 'scale(1.75)';
    });

    mainBox.addEventListener('mouseleave', () => {
      mainImg.style.transform = 'scale(1)';
      mainImg.style.transformOrigin = 'center center';
    });
  }

  // Mobile Touch Swipe
  let touchStartX = 0;
  let touchEndX = 0;
  if (mainBox) {
    mainBox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    mainBox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      const len = activeColor.images.length;
      if (diff < 0) {
        // swipe left -> next
        activeViewIndex = (activeViewIndex + 1) % len;
      } else {
        // swipe right -> prev
        activeViewIndex = (activeViewIndex - 1 + len) % len;
      }
      updateGalleryImages();
    }
  }

  // ============================================================
  // 9. FULLSCREEN LIGHTBOX MODAL
  // ============================================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  function openLightbox() {
    if (lightboxModal && lightboxImg) {
      lightboxImg.src = activeColor.images[activeViewIndex];
      lightboxImg.alt = `${product.name} - ${activeColor.label}`;
      lightboxModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  mainBox?.addEventListener('click', (e) => {
    // Prevent if clicking on arrow buttons
    if (e.target.closest('.gallery-nav-btn')) return;
    openLightbox();
  });

  lightboxCloseBtn?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.id === 'lightbox-wrapper') {
      closeLightbox();
    }
  });

  // ============================================================
  // 10. SIZE CHART MODAL
  // ============================================================
  const sizeChartModal = document.getElementById('size-chart-modal');
  const sizeChartOpenBtn = document.getElementById('btn-open-size-chart');
  const sizeChartCloseBtn = document.getElementById('size-chart-close-btn');

  function openSizeChart() {
    if (sizeChartModal) {
      sizeChartModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSizeChart() {
    if (sizeChartModal) {
      sizeChartModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  sizeChartOpenBtn?.addEventListener('click', openSizeChart);
  sizeChartCloseBtn?.addEventListener('click', closeSizeChart);
  sizeChartModal?.addEventListener('click', (e) => {
    if (e.target === sizeChartModal) closeSizeChart();
  });

  // Global ESC key listener for Lightbox & Modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeSizeChart();
    }
  });

  // ============================================================
  // 11. ADD TO CART & BUY NOW LOGIC
  // ============================================================
  function handleAddToCart(isBuyNow = false) {
    // 1. Validation for Size
    if (product.sizes && product.sizes.length > 0 && !activeSize) {
      const errorMsg = document.getElementById('size-error-msg');
      if (errorMsg) {
        errorMsg.classList.add('visible');
      }
      const sizeGroup = document.getElementById('size-selector-group');
      if (sizeGroup) {
        sizeGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // 2. Validation for Stock
    const stock = getCurrentStock();
    if (stock <= 0) {
      if (window.WILDTRAIL && window.WILDTRAIL.showToast) {
        window.WILDTRAIL.showToast('ขออภัย สินค้านี้หมดชั่วคราว', { isError: true });
      }
      return;
    }

    // 3. Prepare product payload
    const itemPayload = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      specs: product.specs ? Object.entries(product.specs).slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(' · ') : '',
      selectedColor: activeColor.key,
      selectedColorLabel: activeColor.label,
      selectedSize: activeSize,
      image: activeColor.images[0]
    };

    if (window.WILDTRAIL && window.WILDTRAIL.addToCart) {
      window.WILDTRAIL.addToCart(itemPayload, currentQty, {
        colorKey: activeColor.key,
        colorLabel: activeColor.label,
        size: activeSize,
        image: activeColor.images[0]
      });
    }

    if (isBuyNow) {
      // Redirect straight to checkout
      setTimeout(() => {
        window.location.href = 'checkout.html';
      }, 350);
    }
  }

  document.getElementById('btn-add-to-cart-main')?.addEventListener('click', () => handleAddToCart(false));
  document.getElementById('btn-buy-now')?.addEventListener('click', () => handleAddToCart(true));
  document.getElementById('btn-mobile-bar-add')?.addEventListener('click', () => handleAddToCart(false));

  // Wishlist Heart Button
  const wishlistBtn = document.getElementById('btn-toggle-wishlist');
  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
      wishlistBtn.classList.toggle('active');
      const isSaved = wishlistBtn.classList.contains('active');
      if (window.WILDTRAIL && window.WILDTRAIL.showToast) {
        window.WILDTRAIL.showToast(isSaved ? `บันทึก "${product.name}" ในรายการที่ชอบแล้ว` : `นำออกจากรายการที่ชอบแล้ว`);
      }
    });
  }

  // ============================================================
  // 12. BOTTOM TABS (Details, Specs, Shipping)
  // ============================================================
  // Tab 1: Details
  const descEl = document.getElementById('tab-description-text');
  if (descEl) descEl.textContent = product.description;

  const featuresList = document.getElementById('tab-features-list');
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(f => `
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  // Tab 2: Specs Table
  const specsTableBody = document.querySelector('#tab-specs-table tbody');
  if (specsTableBody && product.specs) {
    specsTableBody.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <tr>
        <th>${key}</th>
        <td>${val}</td>
      </tr>
    `).join('');
  }

  // Tab Buttons Switcher
  document.querySelectorAll('.tab-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.currentTarget.getAttribute('data-tab');
      document.querySelectorAll('.tab-nav-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-panel-content').forEach(p => p.classList.remove('active'));

      e.currentTarget.classList.add('active');
      e.currentTarget.setAttribute('aria-selected', 'true');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // ============================================================
  // 13. CUSTOMER REVIEWS (Summary + 3 Sample Reviews)
  // ============================================================
  document.getElementById('reviews-summary-score').textContent = product.rating.toFixed(1);
  document.getElementById('reviews-summary-count').textContent = `จาก ${product.reviewCount} รีวิว`;
  const summaryStars = document.getElementById('reviews-summary-stars');
  if (summaryStars) {
    summaryStars.innerHTML = Array(5).fill(ICONS.star).join('');
  }

  const reviewsContainer = document.getElementById('customer-reviews-list');
  if (reviewsContainer && product.reviews) {
    reviewsContainer.innerHTML = product.reviews.map(r => `
      <div class="glass-surface customer-review-card">
        <div class="review-meta-row">
          <div>
            <div style="display: flex; gap: 2px; color: #FBBF24; margin-bottom: 4px;">
              ${Array(r.rating).fill(ICONS.star).join('')}
            </div>
            <strong style="font-size: 14px; display: block;">${r.author}</strong>
            <span class="caption">${r.location} · ${r.date}</span>
          </div>
          <span class="sample-badge">ข้อมูลรีวิวตัวอย่าง</span>
        </div>
        <p style="font-size: 14px; font-style: italic; line-height: 1.6; margin: 0;">
          "${r.text}"
        </p>
      </div>
    `).join('');
  }

  // Smooth scroll to reviews from rating click
  document.getElementById('reviews-scroll-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
  });

  // ============================================================
  // 14. RELATED PRODUCTS ("สินค้าที่คุณอาจชอบ")
  // ============================================================
  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid && window.getRelatedProducts) {
    const relatedList = window.getRelatedProducts(product.slug, 4);
    relatedGrid.innerHTML = relatedList.map(rel => {
      const relImg = rel.colors[0]?.images[0] || '';
      return `
        <article class="glass-surface product-card" data-slug="${rel.slug}">
          <a href="product.html?slug=${rel.slug}" class="product-card-top-link" aria-label="ดูรายละเอียด ${rel.name}" style="text-decoration: none; color: inherit; display: block;">
            <div class="product-image-container">
              ${rel.tagBadge ? `
                <span class="product-tag-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ${rel.tagBadge}
                </span>
              ` : ''}
              <img src="${relImg}" alt="${rel.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="product-rating">
              ${ICONS.star}
              <strong>${rel.rating.toFixed(1)}</strong>
              <span>(${rel.reviewCount} รีวิว)</span>
            </div>
            <h3 class="product-title">${rel.name}</h3>
          </a>
          <div class="product-specs">${rel.shortDesc}</div>
          <div class="product-card-footer">
            <div class="price-box">
              ${rel.compareAtPrice ? `<span class="price-original">฿${rel.compareAtPrice.toLocaleString()}</span>` : ''}
              <span class="price-current">฿${rel.price.toLocaleString()}</span>
            </div>
            <button type="button" class="btn btn-secondary btn-rel-add-cart" data-slug="${rel.slug}" aria-label="เพิ่ม ${rel.name} ลงในตะกร้า">
              ${ICONS.cart}
              เพิ่มลงตะกร้า
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Bind related add to cart with stopPropagation
    relatedGrid.querySelectorAll('.btn-rel-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const rSlug = e.currentTarget.getAttribute('data-slug');
        const rProd = window.getProductBySlug(rSlug);
        if (rProd && window.WILDTRAIL && window.WILDTRAIL.addToCart) {
          window.WILDTRAIL.addToCart(rProd, 1, {
            colorKey: rProd.colors[0]?.key || '',
            colorLabel: rProd.colors[0]?.label || '',
            size: rProd.sizes && rProd.sizes.length > 0 ? rProd.sizes[0] : null,
            image: rProd.colors[0]?.images[0] || ''
          });
        }
      });
    });
  }

  // ============================================================
  // 15. MOBILE STICKY BOTTOM BAR OBSERVER
  // ============================================================
  const mainAddBtn = document.getElementById('btn-add-to-cart-main');
  const mobileStickyBar = document.getElementById('mobile-sticky-bar');

  if (mainAddBtn && mobileStickyBar && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If main button is NOT intersecting and we are scrolled past it
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          mobileStickyBar.classList.add('visible');
        } else {
          mobileStickyBar.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(mainAddBtn);
  }

  // ============================================================
  // 16. MOBILE MENU & SEARCH DIALOG
  // ============================================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileClose = document.getElementById('mobile-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Search dialog
  const searchToggle = document.getElementById('btn-search-toggle');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('search-modal-close');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (searchToggle && searchModal) {
    searchToggle.addEventListener('click', () => {
      searchModal.showModal();
      if (searchInput) searchInput.focus();
    });
  }

  if (searchClose && searchModal) {
    searchClose.addEventListener('click', () => searchModal.close());
  }

  if (searchInput && searchResults && window.WILDTRAIL_PRODUCTS) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        searchResults.innerHTML = '';
        return;
      }
      const matches = window.WILDTRAIL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        searchResults.innerHTML = '<p class="caption" style="text-align: center; padding: 12px;">ไม่พบสินค้าที่ตรงกับการค้นหา</p>';
      } else {
        searchResults.innerHTML = matches.map(m => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(255,255,255,0.06); border-radius: 8px;">
            <a href="product.html?slug=${m.slug}" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
              <img src="${m.colors[0]?.images[0] || ''}" alt="${m.name}" style="width: 36px; height: 45px; object-fit: cover; border-radius: 4px; background: #E9E8E6;">
              <div>
                <strong style="font-size: 14px; display: block;">${m.name}</strong>
                <span class="caption">฿${m.price.toLocaleString()}</span>
              </div>
            </a>
            <a href="product.html?slug=${m.slug}" class="btn btn-secondary" style="min-height: 32px; padding: 4px 12px; font-size: 13px;">
              ดูสินค้า
            </a>
          </div>
        `).join('');
      }
    });
  }

  // ============================================================
  // 17. INITIALIZE PAGE
  // ============================================================
  renderColorSwatches();
  renderSizeButtons();
  updateGalleryImages();
  updateStockUI();

})();
