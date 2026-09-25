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
    globe: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    spinner: `<svg class="spin-animate" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>`
  };

  // ============================================================
  // MULTI-LANGUAGE SYSTEM (TH / EN)
  // ============================================================
  const LANG_STORAGE_KEY = 'wildtrail_lang';

  const TRANSLATIONS = {
    // ------------------------------------------------------------
    // Navigation & Common UI
    // ------------------------------------------------------------
    navHome: { th: 'หน้าแรก', en: 'Home' },
    navCategories: { th: 'หมวดหมู่สินค้า', en: 'Categories' },
    navBestsellers: { th: 'สินค้าขายดี', en: 'Best Sellers' },
    navFeatures: { th: 'จุดเด่น & บริการ', en: 'Features' },
    navReviews: { th: 'รีวิวนักเดินป่า', en: 'Trail Reviews' },
    navCheckout: { th: 'เช็คเอาท์', en: 'Checkout' },
    navLogin: { th: 'เข้าสู่ระบบ', en: 'Login / Register' },
    navBackHome: { th: 'กลับหน้าหลัก', en: 'Back to Home' },
    navSearchTitle: { th: 'ค้นหาสินค้า', en: 'Search gear' },
    navCartTitle: { th: 'ตะกร้าสินค้า', en: 'Shopping Cart' },
    navLangTitle: { th: 'สลับภาษา / Switch Language (TH / EN)', en: 'Switch Language / เปลี่ยนภาษา (EN / TH)' },
    mobileMenuOpen: { th: 'เปิดเมนูมือถือ', en: 'Open Mobile Menu' },
    mobileMenuClose: { th: 'ปิดเมนู', en: 'Close Menu' },
    mobileLangRow: { th: 'ภาษา / Language:', en: 'Language / ภาษา:' },
    mobileShopNow: { th: 'เลือกซื้อสินค้าทันที', en: 'Shop Now' },

    // ------------------------------------------------------------
    // Home: Hero Section
    // ------------------------------------------------------------
    heroBanner: { th: 'จัดส่งฟรีทั่วไทยเมื่อสั่งซื้อครบ ฿3,000 · รับประกันศูนย์ไทย 2 ปีทุกชิ้น', en: 'Free Nationwide Shipping over ฿3,000 · 2-Year Official Thailand Warranty' },
    heroCollectionTag: { th: 'WILDTRAIL 2026 COLLECTION', en: 'WILDTRAIL 2026 COLLECTION' },
    heroBadge: { th: 'WILDTRAIL ULTRA-LIGHT 2026', en: 'WILDTRAIL ULTRA-LIGHT 2026' },
    heroH1: { th: 'ค้นพบเส้นทางใหม่<br>กับอุปกรณ์ที่คุณวางใจได้ทุกก้าว', en: 'DISCOVER NEW TRAILS<br>WITH GEAR YOU CAN TRUST' },
    heroSub: { th: 'คัดสรรเต็นท์ เป้ และอุปกรณ์แคมปิ้งมาตรฐานสากล ทนทานทุกสภาพอากาศ พร้อมเคียงข้างทุกการผจญภัย', en: 'Expedition-grade outdoor & trekking gear. Ultra-light, storm-tested, engineered for rugged trails.' },
    heroBtnShop: { th: 'เลือกซื้อสินค้า', en: 'Shop Gear' },
    heroBtnCollection: { th: 'ดูคอลเลกชันใหม่', en: 'New Collection' },
    heroStat1Num: { th: '50,000+', en: '50,000+' },
    heroStat1Label: { th: 'นักผจญภัยไว้วางใจ', en: 'Hikers Equipped' },
    heroStat2Num: { th: '4.9 / 5', en: '4.9 / 5' },
    heroStat2Label: { th: 'คะแนนความพึงพอใจ', en: 'Customer Rating' },
    heroStat3Num: { th: '100%', en: '100%' },
    heroStat3Label: { th: 'ของแท้รับประกันศูนย์', en: 'Genuine & Guaranteed' },
    heroScrollHint: { th: 'เลื่อนลงเพื่อดูต่อ', en: 'Scroll down to explore' },

    // ------------------------------------------------------------
    // Home: Categories Section
    // ------------------------------------------------------------
    catEyebrow: { th: 'CATEGORIES', en: 'CATEGORIES' },
    catTitle: { th: 'หมวดหมู่สินค้าอุปกรณ์เอาท์ดอร์', en: 'Explore Gear by Category' },
    catSubtitle: { th: 'คัดสรรเพื่อตอบโจทย์ตั้งแต่ระดับผู้เริ่มต้น จนถึงนักเดินป่าระยะไกลสายสำรวจเส้นทาง', en: 'Curated for weekend campers to extreme thru-hikers.' },
    catTentTitle: { th: 'เต็นท์และที่พักแรม', en: 'Tents & Shelters' },
    catTentCount: { th: '48 รายการ', en: '48 items' },
    catTentDesc: { th: 'เต็นท์โดมน้ำหนักเบา 1–4 คน โครงเสาอะลูมิเนียมเกรด 7001 ทนลมกระโชกแรง และฟลายชีทกันน้ำระดับพายุ', en: 'Lightweight 1–4 person dome tents, 7001 aluminum poles, stormproof 4,000mm flysheet.' },
    catTentFeat1: { th: 'เสาอะลูมิเนียม 7001 รับลมแรง', en: '7001 Aluminum poles resist high wind' },
    catTentFeat2: { th: 'กันน้ำ 4,000 มม. ไม่อับชื้น', en: '4,000 mm waterproof rating' },
    catTentFeat3: { th: 'น้ำหนักเริ่มต้นเพียง 1.45 กก.', en: 'Ultra-light starting at 1.45 kg' },
    catTentBtn: { th: 'ดูสินค้าเต็นท์', en: 'View Tents' },

    catBagTitle: { th: 'เป้และเครื่องแต่งกาย', en: 'Backpacks & Apparel' },
    catBagCount: { th: '64 รายการ', en: '64 items' },
    catBagDesc: { th: 'เป้สะพายหลังโครง Ergonomic AirMesh ถ่ายน้ำหนักลงสะโพก พร้อมเสื้อแจ็กเก็ตกันฝน 3 ชั้นระบายเหงื่อไว', en: 'Ergonomic AirMesh backpacks transferring load to hips, plus 3-layer breathable weatherproof jackets.' },
    catBagFeat1: { th: 'ระบบหลังระบายอากาศ AirFlow', en: 'AirFlow ventilated back system' },
    catBagFeat2: { th: 'ผ้า Cordura ทนการขูดขีด', en: 'Abrasion-resistant Cordura fabric' },
    catBagFeat3: { th: 'แจ็กเก็ตกันน้ำ 15,000 มม. ซีลเทป', en: '15,000 mm waterproof taped jacket' },
    catBagBtn: { th: 'ดูเป้และชุดเดินป่า', en: 'View Backpacks & Apparel' },

    catCampTitle: { th: 'อุปกรณ์ทำอาหาร & ยังชีพ', en: 'Camp Cooking & Survival' },
    catCampCount: { th: '52 รายการ', en: '52 items' },
    catCampDesc: { th: 'เตาแก๊สพกพาไทเทเนียม ชุดหม้อสนามน้ำหนักเบา เครื่องกรองน้ำพกพา 0.1 ไมครอน และไฟฉายคาดศีรษะ 1200LM', en: 'Titanium camp stoves, lightweight cooksets, 0.1 micron water purifiers, and 1200LM headlamps.' },
    catCampFeat1: { th: 'ไทเทเนียมแท้ ทนความร้อนสูง', en: 'Pure Titanium, extreme heat resistant' },
    catCampFeat2: { th: 'ไฟฉาย IP68 ส่องไกล 150 เมตร', en: 'IP68 headlamp 150m beam range' },
    catCampFeat3: { th: 'กรองน้ำสะอาดดื่มได้ทันที 99.9%', en: '99.9% clean instant drinking water' },
    catCampBtn: { th: 'ดูอุปกรณ์ทำอาหาร & ยังชีพ', en: 'View Cooking & Survival' },
    catViewAll: { th: 'ดูสินค้าหมวดนี้', en: 'View Products' },

    // ------------------------------------------------------------
    // Home: Best Sellers Section
    // ------------------------------------------------------------
    bestEyebrow: { th: 'BESTSELLERS', en: 'BESTSELLERS' },
    bestTitle: { th: 'สินค้าขายดีประจำฤดูกาล', en: 'Season Best Sellers' },
    bestSubtitle: { th: 'อุปกรณ์ที่นักเดินป่าชาวไทยเลือกใช้มากที่สุด การันตีด้วยรีวิวคุณภาพและผ่านการทดสอบจริง', en: 'Top gear chosen by outdoor enthusiasts, field-tested on Thailand\'s toughest peaks.' },
    btnQuickAdd: { th: 'เพิ่มลงตะกร้า', en: 'Add to Cart' },
    btnViewProduct: { th: 'ดูรายละเอียด', en: 'View Details' },
    reviewsCountUnit: { th: 'รีวิว', en: 'reviews' },

    // ------------------------------------------------------------
    // Home: Features (Why WILDTRAIL)
    // ------------------------------------------------------------
    featEyebrow: { th: 'WHY CHOOSE WILDTRAIL', en: 'WHY CHOOSE WILDTRAIL' },
    featTitle: { th: 'เหตุผลที่นักเดินป่าเลือกเรา', en: 'Why Hikers Choose Us' },
    featSubtitle: { th: 'เราไม่เพียงแค่ขายอุปกรณ์ แต่เราคือเพื่อนร่วมทางที่พร้อมสนับสนุนทุกย่างก้าวของการผจญภัย', en: 'More than just gear — your trusted partner on every step of the trail.' },
    feat1Head: { th: 'สินค้าของแท้ 100% มีใบรับรอง', en: '100% Genuine with Warranty' },
    feat1Desc: { th: 'คัดสรรเฉพาะอุปกรณ์มาตรฐานสากล นำเข้าถูกต้องตามกฎหมาย ปราศจากสินค้าเลียนแบบ ให้คุณมั่นใจในความปลอดภัยสูงสุด', en: 'Selected international standard gear. Officially certified with zero counterfeit guarantee.' },
    feat2Head: { th: 'รับประกันศูนย์ไทยสูงสุด 2 ปี', en: 'Up to 2-Year Official Warranty' },
    feat2Desc: { th: 'อุ่นใจกับบริการหลังการขาย มีอะไหล่พร้อมเปลี่ยนและทีมช่างผู้ชำนาญการคอยตรวจเช็กสภาพเต็นท์และซิปตลอดอายุรับประกัน', en: 'Peace of mind with local repair center, genuine spare parts, and dedicated outdoor technicians.' },
    feat3Head: { th: 'จัดส่งด่วน 24 ชม. ทั่วประเทศ', en: '24h Express Dispatch Nationwide' },
    feat3Desc: { th: 'แพ็กกันกระแทกอย่างประณีต จัดส่งรวดเร็วทันใจก่อนวันออกทริป รองรับบริการเก็บเงินปลายทาง (COD) และติดตามพัสดุเรียลไทม์', en: 'Secure shockproof packing, swift delivery before your trek, COD supported, and real-time parcel tracking.' },
    feat4Head: { th: 'คำปรึกษาโดยนักเดินป่าตัวจริง', en: 'Advice from Real Thru-Hikers' },
    feat4Desc: { th: 'ทีมงาน WILDTRAIL ทุกคนคือสายลุยที่ผ่านสนามจริง พร้อมแนะนำการจัดน้ำหนักเป้และเลือกอุปกรณ์ที่ตรงกับภูมิประเทศของคุณ', en: 'Our team members are experienced outdoor enthusiasts ready to advise the perfect setup for your terrain.' },

    // ------------------------------------------------------------
    // Home: Reviews Section
    // ------------------------------------------------------------
    reviewsEyebrow: { th: 'COMMUNITY REVIEWS', en: 'COMMUNITY REVIEWS' },
    reviewsTitle: { th: 'เสียงตอบรับจากนักเดินป่า', en: 'Trail Community Reviews' },
    reviewsSubtitle: { th: 'ความประทับใจจริงจากผู้ใช้งานที่นำอุปกรณ์ WILDTRAIL ไปพิชิตยอดเขาและเส้นทางธรรมชาติ', en: 'Real feedback from adventurers summiting mountains with WILDTRAIL gear.' },
    review1Text: { th: '"นำเต็นท์ Peak Pro 2P ไปกางที่ดอยหลวงเชียงดาว ลมกรรโชกแรงมากจนเต็นท์รอบข้างพับ แต่เต็นท์หลังนี้โครงเสา 7001 เอาอยู่สบาย น้ำหนักเบาช่วยให้แบกขึ้นดอยได้ไม่ทรมาน"', en: '"Took the Peak Pro 2P tent up Doi Luang Chiang Dao. High winds flattened other tents around us, but this 7001 aluminum frame stood solid. Ultralight carry saved my back."' },
    review1Author: { th: 'คุณอนนต์ ภักดี', en: 'Anont Pakdee' },
    review1Meta: { th: 'นักเดินป่าอิสระ · เส้นทางดอยหลวงเชียงดาว', en: 'Solo Thru-Hiker · Doi Luang Chiang Dao Trail' },
    review2Text: { th: '"เป้ Summit Ridge 45L โครงหลังระบายอากาศยอดเยี่ยมมาก ตอนเดินขึ้นภูกระดึงเหงื่อไม่ชุ่มหลังเลย กระจายน้ำหนักได้ดีมากไม่เจ็บช่วงบ่า คุ้มค่าเกินราคาจริง ๆ"', en: '"The Summit Ridge 45L backpack airflow back panel is phenomenal. Walking up Phu Kradueng without a drenched back was amazing. Perfect weight balance."' },
    review2Author: { th: 'คุณฟ้าใส ฤทัยวัลย์', en: 'Fahsai Ruthaiwan' },
    review2Meta: { th: 'นักวิ่งเทรลและแคมเปอร์ · ทริปภูกระดึง & โมโกจู', en: 'Trail Runner & Camper · Phu Kradueng & Mokoju' },
    review3Text: { th: '"ประทับใจทีมงานมากครับ ให้คำแนะนำอุปกรณ์ทำอาหารและถุงนอนสำหรับทริปหน้าหนาวได้ละเอียดมาก สินค้าจัดส่งไวทันกำหนดวันเดินทาง มีใบรับประกันศูนย์ครบถ้วน"', en: '"Incredibly impressed by the team. Their detailed advice on camp stoves and sleeping bags for winter treks was spot-on. Swift dispatch with full warranty card."' },
    review3Author: { th: 'คุณณัฐพัชร์ ชื่นจิต', en: 'Nattapat Chuenjit' },
    review3Meta: { th: 'Camping Creator · เขาใหญ่ & ภูทับเบิก', en: 'Camping Creator · Khao Yai & Phu Thap Boek' },

    // ------------------------------------------------------------
    // Home: Newsletter
    // ------------------------------------------------------------
    newsEyebrow: { th: 'WILDTRAIL CLUB', en: 'WILDTRAIL CLUB' },
    newsTitle: { th: 'รับส่วนลด 10% สำหรับการสั่งซื้อครั้งแรก', en: 'Get 10% Off Your First Order' },
    newsSubtitle: { th: 'สมัครรับจดหมายข่าวเพื่อรับโค้ดส่วนลด อัปเดตอุปกรณ์รุ่นใหม่ และรับสิทธิ์เข้าร่วมกิจกรรมแคมปิ้งพิเศษก่อนใคร', en: 'Subscribe for instant discount codes, new gear announcements, and priority outdoor event invites.' },
    newsPlaceholder: { th: 'กรอกอีเมลของคุณที่นี่...', en: 'Enter your email address...' },
    newsBtn: { th: 'รับส่วนลดทันที', en: 'Claim Discount' },
    newsPrivacy: { th: 'เราเคารพความเป็นส่วนตัวของคุณ ไม่มีการส่งสแปม และสามารถยกเลิกได้ทุกเมื่อ', en: 'We respect your privacy. No spam, unsubscribe anytime.' },

    // ------------------------------------------------------------
    // Search Dialog
    // ------------------------------------------------------------
    searchModalTitle: { th: 'ค้นหาอุปกรณ์เดินป่า', en: 'Search Outdoor Gear' },
    searchModalClose: { th: 'ปิดกล่องค้นหา', en: 'Close Search' },
    searchPlaceholder: { th: 'พิมพ์ชื่ออุปกรณ์ เช่น เต็นท์, เป้, ถุงนอน...', en: 'Search e.g. tent, backpack, sleeping bag...' },
    searchNoResults: { th: 'ไม่พบสินค้าที่ตรงกับการค้นหา', en: 'No products found matching your search' },
    searchViewItem: { th: 'ดูสินค้า', en: 'View Gear' },

    // ------------------------------------------------------------
    // Cart Drawer
    // ------------------------------------------------------------
    cartDrawerTitle: { th: 'ตะกร้าสินค้าของคุณ', en: 'Your Shopping Cart' },
    cartDrawerClose: { th: 'ปิดตะกร้าสินค้า', en: 'Close Cart' },
    cartEmptyText: { th: 'ยังไม่มีสินค้าในตะกร้า', en: 'Your cart is empty' },
    cartBrowseBtn: { th: 'เลือกชมสินค้า', en: 'Explore Products' },
    cartSubtotalLabel: { th: 'ยอดรวมสินค้า', en: 'Subtotal' },
    cartCheckoutBtn: { th: 'ไปชำระเงิน', en: 'Proceed to Checkout' },
    freeShippingAchieved: { th: 'คุณได้รับสิทธิ์จัดส่งฟรีทั่วไทย!', en: 'You qualify for Free Shipping across Thailand!' },
    freeShippingRemaining: { th: 'ซื้อเพิ่มอีก {amount} เพื่อรับสิทธิ์จัดส่งฟรี', en: 'Add {amount} more to unlock Free Shipping' },
    cartUnit: { th: 'ชิ้น', en: 'item' },
    toastAdded: { th: 'เพิ่ม "{name}" ลงในตะกร้าแล้ว', en: 'Added "{name}" to cart' },
    toastRemoved: { th: 'นำสินค้าออกจากตะกร้าแล้ว', en: 'Removed item from cart' },
    toastLogout: { th: 'ออกจากระบบเรียบร้อยแล้ว', en: 'Logged out successfully' },
    userGreeting: { th: 'สวัสดี, ', en: 'Hi, ' },

    // ------------------------------------------------------------
    // Product Detail Page
    // ------------------------------------------------------------
    breadcrumbHome: { th: 'หน้าแรก', en: 'Home' },
    prodNotFoundTitle: { th: 'ไม่พบสินค้าที่คุณกำลังค้นหา', en: 'Product Not Found' },
    prodNotFoundDesc: { th: 'ลิงก์สินค้าอาจไม่ถูกต้องหรือสินค้าอาจถูกย้ายออกจากระบบแล้ว', en: 'The product link may be invalid or the item has been removed.' },
    prodNotFoundBtn: { th: 'กลับไปเลือกชมสินค้าทั้งหมด', en: 'Back to All Products' },
    zoomBadge: { th: 'คลิกเพื่อซูม', en: 'Click to zoom' },
    btnAddToCartMain: { th: 'เพิ่มลงตะกร้า', en: 'Add to Cart' },
    btnBuyNowMain: { th: 'ซื้อเลย (ไปชำระเงินทันที)', en: 'Buy Now (Instant Checkout)' },
    btnSizeChart: { th: 'ตารางไซซ์', en: 'Size Guide' },
    sizeSelectError: { th: 'กรุณาเลือกขนาด', en: 'Please select a size' },
    stockInPrefix: { th: 'มีสินค้าพร้อมส่ง ({count} ชิ้น)', en: 'In Stock ({count} available)' },
    stockLowPrefix: { th: 'เหลือเพียง {count} ชิ้นเท่านั้น!', en: 'Only {count} left in stock!' },
    stockOutPrefix: { th: 'สินค้าหมดชั่วคราว', en: 'Temporarily Out of Stock' },
    colorLabelPrefix: { th: 'สี: ', en: 'Color: ' },
    sizeLabelPrefix: { th: 'ขนาด: ', en: 'Size: ' },
    qtyLabelPrefix: { th: 'จำนวน', en: 'Quantity' },
    featFreeShip: { th: 'ส่งฟรีเมื่อครบ ฿1,500', en: 'Free Shipping over ฿1,500' },
    featReturn: { th: 'เปลี่ยนคืนใน 15 วัน', en: '15-Day Free Returns' },
    featWarranty: { th: 'รับประกันคุณภาพ 1 ปี', en: '1-Year Quality Warranty' },
    tabDesc: { th: 'รายละเอียดสินค้า', en: 'Product Details' },
    tabSpecs: { th: 'สเปกสินค้า', en: 'Specifications' },
    tabShip: { th: 'การจัดส่งและคืนสินค้า', en: 'Shipping & Returns' },
    tabDetailsTitle: { th: 'จุดเด่นและฟังก์ชันการใช้งาน', en: 'Key Features & Functionality' },
    tabSpecsTitle: { th: 'ข้อมูลจำเพาะเชิงเทคนิค (Specifications)', en: 'Technical Specifications' },
    tabShippingTitle: { th: 'นโยบายการจัดส่งและรับประกัน', en: 'Shipping & Warranty Policy' },
    shipCard1Title: { th: 'การจัดส่งพัสดุ', en: 'Parcel Dispatch' },
    shipCard1Desc: { th: 'จัดส่งฟรีทั่วไทยเมื่อสั่งซื้อครบ ฿1,500 ขึ้นไป สั่งก่อน 14:00 น. จัดส่งออกในวันเดียวกัน พัสดุถึงมือภายใน 1-2 วันทำการ มีเลข Tracking ติดตามสถานะเรียลไทม์', en: 'Free shipping on orders over ฿1,500. Orders before 14:00 ship same day. Delivery in 1-2 business days with real-time tracking.' },
    shipCard2Title: { th: 'การเปลี่ยนหรือคืนสินค้า', en: 'Exchange & Returns' },
    shipCard2Desc: { th: 'ยินดีรับเปลี่ยนหรือคืนสินค้าภายใน 15 วัน นับจากวันที่ได้รับพัสดุ สินค้าต้องอยู่ในสภาพสมบูรณ์ ไม่ผ่านการใช้งานภาคสนาม พร้อมป้ายและบรรจุภัณฑ์เดิม', en: 'Easy 15-day return or exchange from delivery date. Items must be in original, unused condition with tags and packaging intact.' },
    shipCard3Title: { th: 'การรับประกันศูนย์ไทย', en: 'Official Warranty' },
    shipCard3Desc: { th: 'รับประกันข้อบกพร่องจากการผลิต 1 ปีเต็ม ซ่อมฟรีหรือเปลี่ยนชิ้นส่วนโครงสร้าง เช่น เสาเต็นท์ ซิป และตัวล็อก มีทีมช่างดูแลตลอดอายุการใช้งาน', en: '1-year comprehensive warranty covering manufacturing defects. Free structural repairs (poles, zippers, buckles) with lifetime support.' },
    reviewsHead: { th: 'รีวิวจากนักเดินป่าตัวจริง', en: 'Real Trail Reviews' },
    reviewsHeadSub: { th: 'ความคิดเห็นและคะแนนความพึงพอใจจากผู้ที่นำอุปกรณ์ชิ้นนี้ไปใช้งานในสนามจริง', en: 'Field ratings and verified feedback from trail adventurers.' },
    sampleBadge: { th: 'ข้อมูลรีวิวตัวอย่าง', en: 'Sample Review' },
    reviewScoreCount: { th: 'จาก {count} รีวิว', en: 'From {count} reviews' },
    reviewStar5: { th: '5 ดาว', en: '5 Stars' },
    reviewStar4: { th: '4 ดาว', en: '4 Stars' },
    reviewStar3: { th: '3 ดาว', en: '3 Stars' },
    reviewStar2: { th: '2 ดาว', en: '2 Stars' },
    reviewStar1: { th: '1 ดาว', en: '1 Star' },
    relatedEyebrow: { th: 'RECOMMENDED', en: 'RECOMMENDED' },
    relatedHead: { th: 'สินค้าที่คุณอาจชอบ', en: 'You May Also Like' },
    relatedSub: { th: 'อุปกรณ์ที่เข้าชุดและได้รับความนิยมในหมวดหมู่เดียวกัน', en: 'Matching gear and popular items from the same category.' },
    sizeGuideModalTitle: { th: 'ตารางไซซ์เสื้อแจ็กเก็ตกันลม (Size Guide)', en: 'Jacket Size Guide' },
    sizeGuideUnitNote: { th: 'หน่วยการวัดเป็นนิ้ว (Inches) ยกเว้นส่วนสูงแนะนำเป็นเซนติเมตร (cm)', en: 'Measurements in inches, recommended height in centimeters (cm).' },
    thSize: { th: 'ไซซ์', en: 'Size' },
    thChest: { th: 'รอบอก (นิ้ว)', en: 'Chest (in)' },
    thLength: { th: 'ความยาวเสื้อ (นิ้ว)', en: 'Length (in)' },
    thSleeve: { th: 'ความยาวแขน (นิ้ว)', en: 'Sleeve (in)' },
    thHeight: { th: 'ส่วนสูงแนะนำ (ซม.)', en: 'Height (cm)' },

    // ------------------------------------------------------------
    // Checkout Page
    // ------------------------------------------------------------
    checkoutHeading: { th: 'ชำระเงินและสั่งซื้อสินค้า | WILDTRAIL', en: 'Checkout & Order | WILDTRAIL' },
    stepShipping: { th: 'ข้อมูลจัดส่ง', en: 'Shipping Info' },
    stepPayment: { th: 'การชำระเงิน', en: 'Payment Method' },
    stepConfirm: { th: 'ยืนยันคำสั่งซื้อ', en: 'Confirmation' },
    step1Title: { th: '1. ข้อมูลที่อยู่จัดส่ง', en: '1. Shipping Address' },
    step2Title: { th: '2. เลือกรูปแบบการจัดส่ง', en: '2. Shipping Method' },
    step3Title: { th: '3. เลือกวิธีชำระเงิน', en: '3. Payment Option' },
    shipNameLabel: { th: 'ชื่อ-นามสกุลผู้รับ', en: 'Full Name' },
    shipNamePlaceholder: { th: 'เช่น ภานุมาศ ชูเกียรติ', en: 'e.g. John Doe' },
    shipPhoneLabel: { th: 'เบอร์โทรศัพท์ติดต่อ', en: 'Phone Number' },
    shipEmailLabel: { th: 'อีเมลสำหรับรับใบเสร็จและเลขพัสดุ', en: 'Email Address' },
    shipAddressLabel: { th: 'ที่อยู่ (บ้านเลขที่, หมู่บ้าน, ถนน, ซอย)', en: 'Street Address' },
    shipAddressPlaceholder: { th: 'เช่น 128/9 ถนนสุขุมวิท แขวงคลองเตย', en: 'e.g. 128/9 Sukhumvit Rd.' },
    shipProvinceLabel: { th: 'จังหวัด', en: 'Province / State' },
    shipProvincePlaceholder: { th: 'เช่น กรุงเทพมหานคร', en: 'e.g. Bangkok' },
    shipPostalLabel: { th: 'รหัสไปรษณีย์', en: 'Postal Code' },
    shipStandardTitle: { th: 'จัดส่งมาตรฐาน (3–5 วันทำการ)', en: 'Standard Delivery (3–5 days)' },
    shipStandardDesc: { th: 'ส่งฟรีเมื่อยอดสั่งซื้อครบ ฿3,000', en: 'Free shipping on orders over ฿3,000' },
    shipExpressTitle: { th: 'จัดส่งด่วนพิเศษ (1–2 วันทำการ)', en: 'Express Delivery (1–2 days)' },
    shipExpressDesc: { th: 'รับพัสดุทันใช้ก่อนวันออกทริป พร้อมโทรแจ้งก่อนส่ง', en: 'Priority express before your trip, phone call ahead' },
    payPromptPayTitle: { th: 'พร้อมเพย์ (PromptPay QR)', en: 'PromptPay QR Code' },
    payPromptPayDesc: { th: 'สแกนจ่ายได้ทุกแอปธนาคาร ฟรีค่าธรรมเนียม', en: 'Scan and pay via mobile banking, zero fees' },
    payCardTitle: { th: 'บัตรเครดิต / บัตรเดบิต', en: 'Credit / Debit Card' },
    payCardDesc: { th: 'Visa, Mastercard, JCB พร้อมระบบความปลอดภัย 3D Secure', en: 'Visa, Mastercard, JCB with 3D Secure' },
    payCodTitle: { th: 'เก็บเงินปลายทาง (COD)', en: 'Cash on Delivery (COD)' },
    payCodDesc: { th: 'ชำระเงินสดกับพนักงานส่งของเมื่อได้รับพัสดุ', en: 'Pay cash upon parcel arrival at your door' },
    orderSummaryTitle: { th: 'สรุปคำสั่งซื้อ', en: 'Order Summary' },
    subtotalLabel: { th: 'ยอดรวมสินค้า', en: 'Subtotal' },
    shippingFeeLabel: { th: 'ค่าจัดส่ง', en: 'Shipping Fee' },
    discountLabel: { th: 'ส่วนลด', en: 'Discount' },
    totalLabel: { th: 'ยอดสุทธิ', en: 'Total' },
    orderFree: { th: 'ฟรี', en: 'Free' },
    btnConfirmOrder: { th: 'ยืนยันการสั่งซื้อ', en: 'Confirm Order' },
    orderSuccessTitle: { th: 'การสั่งซื้อสำเร็จเรียบร้อย!', en: 'Order Completed Successfully!' },
    orderSuccessDesc: { th: 'ขอบคุณที่ร่วมออกเดินทางไปกับ WILDTRAIL ระบบได้ส่งอีเมลยืนยันคำสั่งซื้อเรียบร้อยแล้ว', en: 'Thank you for choosing WILDTRAIL. Confirmation details have been sent to your email.' },
    btnBackHome: { th: 'กลับหน้าแรก', en: 'Back to Home' },
    btnTrackOrder: { th: 'ติดตามพัสดุ', en: 'Track Parcel' },
    stepShippingMethod: { th: 'การจัดส่ง', en: 'Shipping' },
    guestBuyFast: { th: 'สั่งซื้อด่วนโดยไม่สมัครสมาชิก', en: 'Fast Checkout as Guest' },
    guestBuyFastSub: { th: 'หรือเข้าสู่ระบบเพื่อสะสมแต้มและใช้คูปองสมาชิก', en: 'Or sign in to earn points and apply member coupons' },
    badgeRequired: { th: 'จำเป็น', en: 'Required' },
    qrScanTitle: { th: 'สแกนเพื่อชำระเงิน', en: 'Scan QR to Pay' },
    qrScanSub: { th: 'เปิดแอปธนาคารของคุณ แล้วสแกนรหัส QR ด้านบน', en: 'Open your mobile banking app and scan the QR code above' },
    qrExpirePrefix: { th: 'รหัส QR จะหมดอายุใน: ', en: 'QR expires in: ' },
    minuteUnit: { th: 'นาที', en: 'mins' },
    cardNumberLabel: { th: 'หมายเลขบัตร', en: 'Card Number' },
    cardExpiryLabel: { th: 'วันหมดอายุ (MM/YY)', en: 'Expiry Date (MM/YY)' },
    cardCvvLabel: { th: 'CVV / CVC (3 หลัก)', en: 'CVV / CVC (3 digits)' },
    codNotice: { th: 'กรุณาเตรียมเงินสดพอดีกับยอดชำระเมื่อพนักงานจัดส่งติดต่อ เจ้าหน้าที่จะติดต่อยืนยันก่อนส่ง 1–2 ชั่วโมง', en: 'Please prepare exact cash amount for courier delivery. Driver will call 1–2 hours prior to arrival.' },
    promoPlaceholder: { th: 'โค้ดส่วนลด (เช่น WILD10)', en: 'Promo code (e.g. WILD10)' },
    btnApplyPromo: { th: 'ใช้งาน', en: 'Apply' },
    securityNote: { th: 'ชำระเงินปลอดภัยด้วยการเข้ารหัส SSL 256-bit', en: 'Secure payment encrypted with 256-bit SSL' },
    orderIdLabel: { th: 'หมายเลขคำสั่งซื้อ:', en: 'Order Number:' },
    recipientLabel: { th: 'ผู้รับสินค้า:', en: 'Recipient:' },
    estDeliveryLabel: { th: 'กำหนดจัดส่งโดยประมาณ:', en: 'Estimated Delivery:' },
    totalPaidLabel: { th: 'ยอดชำระทั้งสิ้น:', en: 'Total Paid:' },

    // ------------------------------------------------------------
    // Login / Register Page
    // ------------------------------------------------------------
    authHeroTitle: { th: 'ยินดีต้อนรับสู่ WILDTRAIL', en: 'Welcome to WILDTRAIL' },
    authHeroDesc: { th: 'เข้าสู่ระบบเพื่อติดตามสถานะคำสั่งซื้อ สะสมแต้มสำหรับทริปถัดไป และรับสิทธิพิเศษเฉพาะสมาชิก WILDTRAIL', en: 'Sign in to track orders, earn trek rewards, and access exclusive member privileges.' },
    authBenefit1: { th: 'รับโค้ดส่วนลด 10% สำหรับคำสั่งซื้อครั้งแรก', en: '10% discount voucher for your first purchase' },
    authBenefit2: { th: 'รับประกันสินค้าศูนย์ไทยสูงสุด 2 ปี พร้อมดูแลอะไหล่', en: 'Up to 2-year warranty with genuine parts support' },
    authBenefit3: { th: 'บันทึกที่อยู่จัดส่งและชำระเงินสะดวก รวดเร็ว ปลอดภัย', en: 'Fast, secure checkout with saved addresses' },
    authBenefit4: { th: 'สิทธิ์เข้าร่วมทริปทดสอบอุปกรณ์บนเส้นทางจริงทั่วไทย', en: 'Exclusive invites to field-test gear on real trails' },
    tabSignIn: { th: 'เข้าสู่ระบบ', en: 'Sign In' },
    tabSignUp: { th: 'สมัครสมาชิก', en: 'Sign Up' },
    loginEmailLabel: { th: 'อีเมล', en: 'Email Address' },
    loginPasswordLabel: { th: 'รหัสผ่าน', en: 'Password' },
    loginPasswordPlaceholder: { th: 'กรอกรหัสผ่านของคุณ', en: 'Enter your password' },
    rememberMe: { th: 'จดจำฉันในระบบ', en: 'Remember me' },
    forgotPassword: { th: 'ลืมรหัสผ่าน?', en: 'Forgot password?' },
    btnSignIn: { th: 'เข้าสู่ระบบ', en: 'Sign In' },
    authDivider: { th: 'หรือ', en: 'or' },
    btnGoogle: { th: 'ดำเนินการต่อด้วย Google', en: 'Continue with Google' },
    regNameLabel: { th: 'ชื่อ-นามสกุล', en: 'Full Name' },
    regNamePlaceholder: { th: 'เช่น ภานุมาศ ชูเกียรติ', en: 'e.g. John Doe' },
    regEmailLabel: { th: 'อีเมล', en: 'Email Address' },
    regPasswordLabel: { th: 'กำหนดรหัสผ่าน (อย่างน้อย 6 ตัวอักษร)', en: 'Password (min. 6 characters)' },
    regPasswordPlaceholder: { th: 'อย่างน้อย 6 ตัวอักษร', en: 'At least 6 characters' },
    navBackHome: { th: 'กลับหน้าหลัก', en: 'Back to Home' },
    regConfirmLabel: { th: 'ยืนยันรหัสผ่าน', en: 'Confirm Password' },
    regConfirmPlaceholder: { th: 'กรอกรหัสผ่านซ้ำอีกครั้ง', en: 'Re-enter your password' },
    regTermsText: { th: 'ฉันยอมรับ ข้อกำหนดการใช้งาน และ นโยบายความเป็นส่วนตัว ของ WILDTRAIL', en: 'I agree to WILDTRAIL\'s Terms of Use and Privacy Policy' },
    btnSignUp: { th: 'สร้างบัญชีสมาชิก', en: 'Create Account' },

    // ------------------------------------------------------------
    // Footer
    // ------------------------------------------------------------
    footerAbout: { th: 'ผู้นำเข้าและจัดจำหน่ายอุปกรณ์เดินป่า แคมปิ้ง และเอาท์ดอร์คุณภาพสูง คัดสรรทุกชิ้นเพื่อให้คุณก้าวสู่ธรรมชาติได้อย่างมั่นใจและปลอดภัย', en: 'Official distributor of expedition-grade outdoor, trekking, and camping gear. Engineered to help you explore nature with confidence and safety.' },
    footerColCategories: { th: 'หมวดหมู่สินค้า', en: 'Categories' },
    footerColServices: { th: 'บริการลูกค้า', en: 'Customer Care' },
    footerColContact: { th: 'ติดต่อเรา', en: 'Contact Us' },
    footerTent: { th: 'เต็นท์และที่พักแรม', en: 'Tents & Camping' },
    footerBackpack: { th: 'เป้เดินป่าทางไกล', en: 'Trekking Backpacks' },
    footerSleeping: { th: 'ถุงนอนและแผ่นรองนอน', en: 'Sleeping Bags & Mats' },
    footerClothing: { th: 'เสื้อผ้าเอาท์ดอร์', en: 'Outdoor Clothing' },
    footerStove: { th: 'เตาและชุดทำอาหาร', en: 'Camp Cooking' },
    footerShippingPolicy: { th: 'นโยบายการจัดส่งสินค้า', en: 'Shipping Policy' },
    footerWarrantyPolicy: { th: 'เงื่อนไขการรับประกัน 2 ปี', en: '2-Year Warranty Terms' },
    footerReturnPolicy: { th: 'นโยบายการเปลี่ยน/คืนสินค้า', en: '15-Day Return Policy' },
    footerTrackOrder: { th: 'ติดตามคำสั่งซื้อ', en: 'Order Tracking' },
    footerMemberLogin: { th: 'เข้าสู่ระบบสมาชิก', en: 'Member Sign In' },
    footerPrivacy: { th: 'นโยบายความเป็นส่วนตัว', en: 'Privacy Policy' },
    footerTerms: { th: 'ข้อกำหนดการใช้งาน', en: 'Terms of Use' },
    footerCopyright: { th: '© 2026 WILDTRAIL Thailand. สงวนลิขสิทธิ์ทั้งหมด', en: '© 2026 WILDTRAIL Thailand. All Rights Reserved.' }
  };

  function getLang() {
    try {
      return localStorage.getItem(LANG_STORAGE_KEY) || 'th';
    } catch (e) {
      return 'th';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      applyLanguage(lang);
    } catch (e) {
      console.warn('Error saving language', e);
    }
  }

  function toggleLang() {
    const next = getLang() === 'th' ? 'en' : 'th';
    setLang(next);
  }

  function t(key, params = {}) {
    const lang = getLang();
    let text = (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) || key;
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    // 1. Update Lang labels on nav buttons
    document.querySelectorAll('.lang-label, #nav-lang-label').forEach(el => {
      el.textContent = lang.toUpperCase();
    });

    // 2. Update data-i18n elements (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.textContent = TRANSLATIONS[key][lang];
      }
    });

    // 3. Update data-i18n-html elements (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.innerHTML = TRANSLATIONS[key][lang];
      }
    });

    // 4. Update data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.setAttribute('placeholder', TRANSLATIONS[key][lang]);
      }
    });

    // 5. Update data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.setAttribute('title', TRANSLATIONS[key][lang]);
      }
    });

    // 6. Update data-i18n-aria-label
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
        el.setAttribute('aria-label', TRANSLATIONS[key][lang]);
      }
    });

    // 7. Update mobile drawer active buttons
    document.querySelectorAll('.btn-mobile-lang').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // 8. Update drawer & user UI
    updateGlobalCartUI();
    updateNavbarUser();

    // 9. Fire event for page scripts
    window.dispatchEvent(new CustomEvent('wildtrail:langchange', { detail: { lang } }));
  }

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

    showToast(t('toastAdded', { name: product.name }));
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
      showToast(t('toastLogout'));
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
          <a href="#" id="btn-user-profile" class="nav-user-link" aria-label="User: ${user.name}">
            ${ICONS.user}
            <span class="nav-user-name">${t('userGreeting')}${user.name}</span>
          </a>
          <button id="btn-nav-logout" class="nav-logout-btn" title="${t('toastLogout')}" aria-label="Logout">
            ${ICONS.close}
          </button>
        </div>
      `;
      const logoutBtn = document.getElementById('btn-nav-logout');
      if (logoutBtn) logoutBtn.addEventListener('click', logout);
    } else {
      userContainer.innerHTML = `
        <a href="login.html" class="nav-icon-btn" title="${t('navLogin')}" aria-label="${t('navLogin')}">
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
        freeShippingText.innerHTML = `<span style="color: var(--color-success); font-weight: 600;">${t('freeShippingAchieved')}</span>`;
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - totalPrice;
        freeShippingText.textContent = t('freeShippingRemaining', { amount: `฿${remaining.toLocaleString()}` });
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
            <p>${t('cartEmptyText')}</p>
            <a href="index.html#bestsellers" class="btn btn-secondary" onclick="WILDTRAIL.closeCartDrawer()">${t('cartBrowseBtn')}</a>
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
              <div class="cart-item-price">฿${(item.price * item.quantity).toLocaleString()} <span class="cart-item-unit">(฿${item.price.toLocaleString()}/${t('cartUnit')})</span></div>
            </div>
            <div class="cart-item-controls">
              <div class="quantity-stepper">
                <button type="button" class="btn-stepper" data-action="decrease" data-id="${itemId}" aria-label="Decrease">${ICONS.minus}</button>
                <span class="stepper-value">${item.quantity}</span>
                <button type="button" class="btn-stepper" data-action="increase" data-id="${itemId}" aria-label="Increase">${ICONS.plus}</button>
              </div>
              <button type="button" class="btn-remove-item" data-action="remove" data-id="${itemId}" aria-label="Remove">${ICONS.trash}</button>
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
              showToast(t('toastRemoved'));
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
    // 1. Initialize language state and translations
    applyLanguage(getLang());

    // 2. Bind desktop navbar language toggle buttons
    document.querySelectorAll('.btn-lang-toggle, #btn-lang-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleLang();
      });
    });

    // 3. Bind mobile drawer language toggle buttons
    document.querySelectorAll('.btn-mobile-lang').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        if (lang) setLang(lang);
      });
    });

    // 4. Cart UI & User UI
    updateGlobalCartUI();
    updateNavbarUser();

    // 5. Bind cart toggle buttons
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
    getLang,
    setLang,
    toggleLang,
    t,
    applyLanguage,
    TRANSLATIONS,
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
