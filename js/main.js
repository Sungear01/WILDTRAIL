/**
 * WILDTRAIL - อุปกรณ์เดินป่าและแคมปิ้ง
 * Main JavaScript: Scroll-Driven Canvas Animation with Smooth Lerp
 * Pure Vanilla JavaScript (No Frameworks)
 * Strictly NO EMOJIS, Integrated with WILDTRAIL Shared Module
 */

(function () {
  'use strict';

  // ==========================================
  // 1. CONFIGURATION
  // ==========================================
  const CONFIG = {
    frameCount: 300,
    framePath: (index) => `assets/frames/ezgif-frame-${String(index).padStart(3, '0')}.png`,
    startFrame: 1, // Frame numbering starts at 001
    ease: 0.1, // Lerp smoothing factor
    debounceMs: 100, // Debounce for resize / orientation
    maxDpr: 2, // Maximum devicePixelRatio for Retina clarity
  };

  // State
  const images = new Array(CONFIG.frameCount);
  let loadedCount = 0;
  let firstFrameLoaded = false;
  let isPreloadingComplete = false;

  let currentFrame = 0;
  let targetFrame = 0;
  let renderedFrame = -1;

  // DOM Elements
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;
  const preloader = document.getElementById('preloader');
  const loaderBar = document.getElementById('loader-bar');
  const loaderPercent = document.getElementById('loader-percent');
  const loaderStatus = document.getElementById('loader-status');
  const scrollTrackerBar = document.getElementById('scroll-tracker-bar');

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ==========================================
  // 2. CANVAS & RESPONSIVE COVER FIT
  // ==========================================
  let canvasWidth = 0;
  let canvasHeight = 0;

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, CONFIG.maxDpr);
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvasWidth = Math.round(w * dpr);
    canvasHeight = Math.round(h * dpr);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
  }

  function drawFallback() {
    if (!ctx) return;
    const grad = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
    grad.addColorStop(0, '#060e0a');
    grad.addColorStop(0.4, '#0f2018');
    grad.addColorStop(0.8, '#0b1612');
    grad.addColorStop(1, '#040806');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }

  function renderFrame(index) {
    if (!ctx) return;

    const safeIndex = Math.max(0, Math.min(CONFIG.frameCount - 1, index));
    const img = images[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) {
      let fallbackFound = false;
      for (let offset = 1; offset < 10; offset++) {
        const alt1 = images[safeIndex - offset];
        if (alt1 && alt1.complete && alt1.naturalWidth > 0) {
          drawCoverImage(alt1);
          fallbackFound = true;
          break;
        }
        const alt2 = images[safeIndex + offset];
        if (alt2 && alt2.complete && alt2.naturalWidth > 0) {
          drawCoverImage(alt2);
          fallbackFound = true;
          break;
        }
      }
      if (!fallbackFound && renderedFrame === -1) {
        drawFallback();
      }
      return;
    }

    drawCoverImage(img);
  }

  function drawCoverImage(img) {
    const iW = img.naturalWidth;
    const iH = img.naturalHeight;

    if (iW === 0 || iH === 0) {
      drawFallback();
      return;
    }

    const scale = Math.max(canvasWidth / iW, canvasHeight / iH);
    const drawW = iW * scale;
    const drawH = iH * scale;
    const drawX = (canvasWidth - drawW) / 2;
    const drawY = (canvasHeight - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  let resizeTimer = null;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resizeCanvas();
      if (renderedFrame >= 0) {
        renderFrame(renderedFrame);
      }
    }, CONFIG.debounceMs);
  }

  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('orientationchange', handleResize, { passive: true });

  // ==========================================
  // 3. IMAGE PRELOADING WITH PROGRESS %
  // ==========================================
  function updateProgress() {
    const percent = Math.min(100, Math.round((loadedCount / CONFIG.frameCount) * 100));

    if (loaderBar) loaderBar.style.width = `${percent}%`;
    if (loaderPercent) loaderPercent.textContent = `${percent}%`;

    if (percent < 30) {
      if (loaderStatus) loaderStatus.textContent = 'กำลังโหลดเฟรมภาพและแผนที่เส้นทาง...';
    } else if (percent < 70) {
      if (loaderStatus) loaderStatus.textContent = 'กำลังจัดเตรียมอุปกรณ์เดินป่าและแคมปิ้ง...';
    } else if (percent < 100) {
      if (loaderStatus) loaderStatus.textContent = 'เตรียมสัมผัสประสบการณ์ WILDTRAIL...';
    } else {
      if (loaderStatus) loaderStatus.textContent = 'พร้อมออกเดินทาง';
    }
  }

  function finishLoading() {
    if (isPreloadingComplete) return;
    isPreloadingComplete = true;

    renderFrame(0);
    renderedFrame = 0;

    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 300);
    }

    requestAnimationFrame(renderLoop);
  }

  function preloadImages() {
    if (!canvas) return;
    resizeCanvas();
    drawFallback();

    const safetyTimer = setTimeout(() => {
      if (!isPreloadingComplete) {
        finishLoading();
      }
    }, 8000);

    for (let i = 1; i <= CONFIG.frameCount; i++) {
      const img = new Image();
      const frameIndex = i - 1;

      img.onload = () => {
        loadedCount++;
        if (i === 1 && !firstFrameLoaded) {
          firstFrameLoaded = true;
          renderFrame(0);
          renderedFrame = 0;
        }
        updateProgress();
        if (loadedCount >= CONFIG.frameCount) {
          clearTimeout(safetyTimer);
          finishLoading();
        }
      };

      img.onerror = () => {
        loadedCount++;
        if (i === 1 && !firstFrameLoaded) {
          drawFallback();
        }
        updateProgress();
        if (loadedCount >= CONFIG.frameCount) {
          clearTimeout(safetyTimer);
          finishLoading();
        }
      };

      img.src = CONFIG.framePath(i);
      images[frameIndex] = img;
    }
  }

  // ==========================================
  // 4. SCROLL PROGRESS & SMOOTH LERP LOOP
  // ==========================================
  function updateScrollTarget() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, scrollY / maxScroll));

    targetFrame = progress * (CONFIG.frameCount - 1);

    if (scrollTrackerBar) {
      scrollTrackerBar.style.width = `${progress * 100}%`;
    }
  }

  window.addEventListener('scroll', updateScrollTarget, { passive: true });

  function renderLoop() {
    if (prefersReducedMotion.matches) {
      currentFrame = targetFrame;
    } else {
      currentFrame += (targetFrame - currentFrame) * CONFIG.ease;
    }

    const rounded = Math.round(currentFrame);

    if (rounded !== renderedFrame) {
      renderFrame(rounded);
      renderedFrame = rounded;
    }

    requestAnimationFrame(renderLoop);
  }

  // ==========================================
  // 5. INTERACTIVE UI & DYNAMIC PRODUCTS
  // ==========================================
  function renderHomepageProducts() {
    const grid = document.getElementById('homepage-products-grid');
    if (!grid) return;

    const products = window.WILDTRAIL_PRODUCTS || [];
    if (products.length === 0) return;

    const lang = window.WILDTRAIL && window.WILDTRAIL.getLang ? window.WILDTRAIL.getLang() : 'th';
    const isEn = lang === 'en';
    const getLoc = window.getLocalizedProduct || ((p) => p);

    grid.innerHTML = products.map(rawProd => {
      const prod = getLoc(rawProd, lang);
      const frontImg = (rawProd.colors && rawProd.colors[0]?.images && rawProd.colors[0].images[0]) || '';
      const reviewsUnit = isEn ? 'reviews' : 'รีวิว';
      const addBtnText = isEn ? 'Add to Cart' : 'เพิ่มลงตะกร้า';
      const viewAria = isEn ? `View details for ${prod.name}` : `ดูรายละเอียด ${prod.name}`;
      const wishAria = isEn ? `Save ${prod.name} to wishlist` : `บันทึก ${prod.name} ในรายการที่ชอบ`;
      const wishTitle = isEn ? 'Add to Wishlist' : 'เพิ่มในรายการที่ชอบ';
      const addAria = isEn ? `Add ${prod.name} to cart` : `เพิ่ม ${prod.name} ลงในตะกร้า`;

      return `
        <article class="glass-surface product-card" data-slug="${prod.slug}" data-id="${prod.id}">
          <button type="button" class="card-wishlist-btn" data-slug="${prod.slug}" aria-label="${wishAria}" title="${wishTitle}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </button>

          <a href="product.html?slug=${prod.slug}" class="product-card-top-link" aria-label="${viewAria}">
            <div class="product-image-container">
              ${prod.tagBadge ? `
                <span class="product-tag-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ${prod.tagBadge}
                </span>
              ` : ''}
              <img src="${frontImg}" alt="${prod.name}" loading="lazy" style="background: #E9E8E6;">
            </div>
            <div class="product-rating">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <strong>${prod.rating.toFixed(1)}</strong>
              <span>(${prod.reviewCount} ${reviewsUnit})</span>
            </div>
            <h3 class="product-title">${prod.name}</h3>
          </a>
          <div class="product-specs">${prod.shortDesc}</div>
          <div class="product-card-footer">
            <div class="price-box">
              ${prod.compareAtPrice ? `<span class="price-original">฿${prod.compareAtPrice.toLocaleString()}</span>` : ''}
              <span class="price-current">฿${prod.price.toLocaleString()}</span>
            </div>
            <button type="button" class="btn btn-secondary btn-add-cart" data-slug="${prod.slug}" aria-label="${addAria}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              ${addBtnText}
            </button>
          </div>
        </article>
      `;
    }).join('');

    // Bind Wishlist Heart buttons (stopPropagation)
    grid.querySelectorAll('.card-wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        btn.classList.toggle('active');
        const isFav = btn.classList.contains('active');
        const slug = btn.getAttribute('data-slug');
        const rawProd = window.getProductBySlug(slug);
        const prod = getLoc(rawProd, lang);
        const name = prod ? prod.name : (isEn ? 'This item' : 'สินค้านี้');
        if (window.WILDTRAIL && window.WILDTRAIL.showToast) {
          const msg = isFav
            ? (isEn ? `Saved "${name}" to wishlist` : `บันทึก "${name}" ในรายการที่ชอบแล้ว`)
            : (isEn ? `Removed "${name}" from wishlist` : `นำออกจากรายการที่ชอบแล้ว`);
          window.WILDTRAIL.showToast(msg);
        }
      });
    });

    // Bind Add to Cart buttons (stopPropagation)
    grid.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const slug = btn.getAttribute('data-slug');
        const prod = window.getProductBySlug(slug);
        if (prod && window.WILDTRAIL && window.WILDTRAIL.addToCart) {
          window.WILDTRAIL.addToCart(prod, 1, {
            colorKey: prod.colors[0]?.key || '',
            colorLabel: prod.colors[0]?.label || '',
            size: (prod.sizes && prod.sizes.length > 0) ? prod.sizes[0] : null,
            image: prod.colors[0]?.images[0] || ''
          });
        }
      });
    });
  }

  function setupInteractions() {
    renderHomepageProducts();

    // Re-render when language changes
    window.addEventListener('wildtrail:langchange', () => {
      renderHomepageProducts();
    });

    // Mobile Drawer
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

    document.querySelectorAll('.drawer-nav a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileDrawer) {
          mobileDrawer.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('newsletter-email');
        if (input && input.value.trim()) {
          const email = input.value.trim().toLowerCase();
          const lang = window.WILDTRAIL && window.WILDTRAIL.getLang ? window.WILDTRAIL.getLang() : 'th';
          const msg = lang === 'en'
            ? `10% discount code sent to ${email}!`
            : `รหัสส่วนลด 10% ถูกส่งไปยัง ${email} เรียบร้อยแล้ว`;
          if (window.WILDTRAIL && window.WILDTRAIL.showToast) {
            window.WILDTRAIL.showToast(msg);
          }
          input.value = '';
        }
      });
    }

    // Search Modal
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

    if (searchInput && searchResults) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
          searchResults.innerHTML = '';
          return;
        }
        const catalog = window.WILDTRAIL_PRODUCTS || [];
        const lang = window.WILDTRAIL && window.WILDTRAIL.getLang ? window.WILDTRAIL.getLang() : 'th';
        const isEn = lang === 'en';
        const getLoc = window.getLocalizedProduct || ((p) => p);

        const matches = catalog.filter(item => {
          const nameTh = (item.name || '').toLowerCase();
          const nameEn = (item.nameEn || '').toLowerCase();
          const catTh = (item.category || '').toLowerCase();
          const catEn = (item.categoryEn || '').toLowerCase();
          const descTh = (item.shortDesc || '').toLowerCase();
          const descEn = (item.shortDescEn || '').toLowerCase();
          return nameTh.includes(query) || nameEn.includes(query) || catTh.includes(query) || catEn.includes(query) || descTh.includes(query) || descEn.includes(query);
        });

        if (matches.length === 0) {
          const noResText = isEn ? 'No products found matching your search' : 'ไม่พบสินค้าที่ตรงกับการค้นหา';
          searchResults.innerHTML = `<p class="caption" style="text-align: center; padding: 12px;">${noResText}</p>`;
        } else {
          searchResults.innerHTML = matches.map(rawItem => {
            const item = getLoc(rawItem, lang);
            const viewText = isEn ? 'View Item' : 'ดูสินค้า';
            const catLabel = isEn ? 'Category: ' : 'หมวดหมู่: ';
            return `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: rgba(255,255,255,0.06); border-radius: 8px;">
                <a href="product.html?slug=${item.slug}" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
                  <img src="${(rawItem.colors && rawItem.colors[0]?.images && rawItem.colors[0].images[0]) || ''}" alt="${item.name}" style="width: 36px; height: 45px; object-fit: cover; border-radius: 4px; background: #E9E8E6;">
                  <div>
                    <strong style="font-size: 14px; display: block;">${item.name}</strong>
                    <span class="caption">${catLabel}${item.category} · ฿${item.price.toLocaleString()}</span>
                  </div>
                </a>
                <a href="product.html?slug=${item.slug}" class="btn btn-secondary" style="min-height: 32px; padding: 4px 12px; font-size: 13px;">
                  ${viewText}
                </a>
              </div>
            `;
          }).join('');
        }
      });
    }
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  // Highlight active nav link on scroll
  function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const scrollPos = window.scrollY + 180;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  window.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    updateScrollTarget();
    setupInteractions();
  });
})();
