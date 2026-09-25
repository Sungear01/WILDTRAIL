/**
 * WILDTRAIL - Single Source of Truth for Product Data
 * Used across index.html, product.html, checkout.html, etc.
 * Strictly NO EMOJIS, 8pt Grid Compliant.
 * Fully localized for Thai and English (TH / EN).
 */

(function (window) {
  'use strict';

  const PRODUCTS = [
    {
      id: 'prod-1',
      slug: 'tent-dome',
      name: 'เต็นท์โดม 2 คน WILDTRAIL Peak Pro',
      nameEn: 'WILDTRAIL Peak Pro 2P Dome Tent',
      price: 3290,
      compareAtPrice: 3890,
      category: 'เต็นท์และที่พักแรม',
      categoryEn: 'Tents & Shelters',
      rating: 4.9,
      reviewCount: 128,
      shortDesc: 'เต็นท์โดมน้ำหนักเบา 2 คน โครงเสาอะลูมิเนียม 7001 แข็งแกร่ง ทนพายุลมแรงและกันฝน 3,000 มม.',
      shortDescEn: 'Ultralight 2-person dome tent, storm-tested 7001 aluminum poles, 3,000mm waterproof rainfly.',
      description: 'เต็นท์โดม 2 คนระดับมืออาชีพสำหรับเดินป่าและตั้งแคมป์ ออกแบบโครงสร้างรูปโดมไขว้แบบ Double Wall ระบายอากาศดีเยี่ยม ป้องกันหยดน้ำค้างเกาะด้านใน เนื้อผ้า Ripstop Nylon เคลือบซิลิโคนกันน้ำระดับ 3,000 มม. เสาอะลูมิเนียมเกรดอากาศยาน 7001 ทนทานต่อแรงลมกรรโชกบนยอดดอย เหมาะกับทุกสภาพอากาศในเมืองไทย',
      descriptionEn: 'Professional 2-person expedition dome tent engineered for rugged backcountry trekking. Built with a freestanding cross-pole double-wall structure for optimal cross-ventilation, preventing interior condensation. The 20D Ripstop Nylon rainfly features 3,000mm silicone/PU coating, supported by aerospace-grade 7001-T6 aluminum poles built to withstand violent alpine gales.',
      features: [
        'โครงเสาอะลูมิเนียมเกรดอากาศยาน 7001 แข็งแกร่ง ทนลมแรงสูง',
        'ผ้าฟลายชีท 20D Ripstop Nylon เคลือบกันน้ำ 3,000 มม. ซีลเทปกันน้ำทุกตะเข็บ',
        'ระบบ Double Wall พร้อมมุ้ง B3 Mesh ระบายอากาศรอบทิศทาง ไม่อับชื้น',
        'มีระเบียงหน้าเต็นท์สำหรับเก็บเป้และรองเท้าในที่ร่ม ป้องกันน้ำค้าง',
        'สมอบกน้ำหนักเบา 10 ตัว พร้อมเชือก Guy-line สะท้อนแสงในเวลากลางคืน'
      ],
      featuresEn: [
        'Aerospace-grade 7001-T6 aluminum poles withstand heavy gale-force winds',
        '20D Ripstop Nylon flysheet with 3,000mm waterproof PU coating & fully taped seams',
        'Double-wall system with high-density B3 micromesh for 360-degree condensation-free airflow',
        'Dual vestibules for sheltered storage of muddy trekking packs and boots',
        'Includes 10 ultralight aluminum stakes and high-visibility reflective guy-lines'
      ],
      specs: {
        'น้ำหนัก': '1.95 กก. (รวมเสาและสมอบก)',
        'ความจุผู้พัก': '2 คน',
        'ขนาดกาง': '210 x 140 x 110 ซม.',
        'ขนาดพับเก็บ': '45 x 15 ซม.',
        'วัสดุฟลายชีท': '20D Ripstop Nylon PU 3,000 มม.',
        'วัสดุพื้นเต็นท์': '150D Oxford Cloth PU 5,000 มม.',
        'วัสดุเสาเต็นท์': '7001 T6 Aluminum Alloy เส้นผ่านศูนย์กลาง 8.5 มม.'
      },
      specsEn: {
        'Weight': '1.95 kg (trail weight including poles & stakes)',
        'Capacity': '2 Persons',
        'Floor Dimensions': '210 x 140 x 110 cm',
        'Packed Size': '45 x 15 cm',
        'Flysheet Material': '20D Ripstop Nylon PU 3,000mm',
        'Floor Material': '150D Oxford Cloth PU 5,000mm',
        'Pole Structure': '8.5mm 7001-T6 Aluminum Alloy'
      },
      colors: [
        {
          key: 'olive',
          label: 'เขียวมะกอก (Olive)',
          labelEn: 'Olive Green',
          hex: '#5B684B',
          images: [
            'assets/products/tent-dome_olive_front.webp',
            'assets/products/tent-dome_olive_angle.webp',
            'assets/products/tent-dome_olive_detail.webp'
          ]
        },
        {
          key: 'sand',
          label: 'ทราย (Sand)',
          labelEn: 'Desert Sand',
          hex: '#C8B293',
          images: [
            'assets/products/tent-dome_sand_front.webp',
            'assets/products/tent-dome_olive_angle.webp',
            'assets/products/tent-dome_olive_detail.webp'
          ]
        },
        {
          key: 'charcoal',
          label: 'เทาเข้ม (Charcoal)',
          labelEn: 'Charcoal Grey',
          hex: '#4A4C4E',
          images: [
            'assets/products/tent-dome_charcoal_front.webp',
            'assets/products/tent-dome_olive_angle.webp',
            'assets/products/tent-dome_olive_detail.webp'
          ]
        }
      ],
      sizes: [],
      stock: {
        'olive': 12,
        'sand': 3,
        'charcoal': 0
      },
      tagBadge: 'ขายดีอันดับ 1',
      tagBadgeEn: '#1 Best Seller',
      reviews: [
        {
          author: 'คุณอนนต์ ภักดี',
          location: 'ดอยหลวงเชียงดาว',
          locationEn: 'Doi Luang Chiang Dao',
          rating: 5,
          date: '14 ม.ค. 2026',
          text: 'นำไปกางที่ดอยหลวงเชียงดาว ลมกรรโชกแรงมากจนเต็นท์รอบข้างเริ่มพับ แต่เต็นท์หลังนี้โครงเสา 7001 เอาอยู่สบาย น้ำหนักเบาช่วยให้แบกขึ้นดอยได้ไม่ทรมาน',
          textEn: 'Pitched this at Doi Luang Chiang Dao in heavy crosswinds. Surrounding tents flattened, but this 7001 pole frame held steady without flexing. Ultralight carry saved my back.'
        },
        {
          author: 'คุณธีรวัฒน์ เก่งกาจ',
          location: 'ภูสอยดาว',
          locationEn: 'Phu Soi Dao',
          rating: 5,
          date: '28 ก.พ. 2026',
          text: 'เจอมรสุมฝนตกหนักทั้งคืนบนลานสนภูสอยดาว ไม่มีน้ำซึมเข้าเต็นท์แม้แต่หยดเดียว พื้นเต็นท์หนากันน้ำดีมาก แนะนำเลยครับ',
          textEn: 'Endured torrential rain all night at Phu Soi Dao. Zero water seepage, thick bathtub floor kept gear completely dry. Highly recommended.'
        },
        {
          author: 'คุณปิยพร ภูมิพัฒน์',
          location: 'เขาหลวงสุโขทัย',
          locationEn: 'Khao Luang Sukhothai',
          rating: 5,
          date: '03 มี.ค. 2026',
          text: 'กางคนเดียวได้สบายมาก เสาเต็นท์ต่อกันง่าย สีเขียวมะกอกกลมกลืนกับธรรมชาติ ถ่ายรูปออกมาสวยพรีเมียมมากค่ะ',
          textEn: 'Super easy for solo pitch, poles snap into place smoothly. Olive green looks gorgeous against mountain fog.'
        }
      ]
    },
    {
      id: 'prod-2',
      slug: 'backpack-45l',
      name: 'เป้เดินป่า Summit Ridge 45L',
      nameEn: 'Summit Ridge 45L Trekking Backpack',
      price: 2490,
      compareAtPrice: 2990,
      category: 'เป้และเครื่องแต่งกาย',
      categoryEn: 'Backpacks & Apparel',
      rating: 4.8,
      reviewCount: 95,
      shortDesc: 'เป้เดินป่า 45 ลิตร โครงหลัง AirMesh ถ่ายน้ำหนักลงสะโพก ผ้า Cordura 420D ทนการขูดขีด',
      shortDescEn: '45L trekking backpack with AirMesh lumbar harness, 70% hip weight transfer, Cordura 420D.',
      description: 'เป้เดินป่าระยะทางปานกลางถึงระยะไกล ขนาด 45 ลิตร ระบบกระจายน้ำหนัก Ergonomic Hip Belt ช่วยถ่ายน้ำหนักลงสู่สะโพกได้ถึง 70% ลดอาการเมื่อยล้าบ่าและหลัง แผ่นหลังตาข่ายยกตัว AirFlow ช่วยให้อากาศถ่ายเทหลังแห้งสบายตลอดการเดินทาง มีช่องใส่ถุงน้ำดื่ม สายรัดไม้เท้า และ Rain Cover ในตัว',
      descriptionEn: 'Mid-to-long distance expedition pack designed for multi-day treks. Features an ergonomic perimeter alloy frame and padded 3D lumbar belt that transfers 70% of pack weight directly onto the pelvic girdle, eliminating shoulder strain. The suspended AirFlow trampoline mesh back panel maximizes airflow, keeping your back cool and dry. Includes hydration sleeve, trekking pole attachments, and an integrated rain cover.',
      features: [
        'โครงสร้างหลัง Ergonomic แขวนลอยตาข่าย AirFlow ระบายอากาศลดเหงื่อสะสม',
        'สายสะพายไหล่และสายรัดสะโพกบุฟองน้ำหนานุ่ม กระจายน้ำหนักได้สมดุล',
        'ช่องเปิดหลักเข้าถึงได้จากทั้งด้านบนและซิปด้านหน้า (Front Access) หยิบของง่าย',
        'สายรัดไม้เท้าเดินป่า (Trekking Pole Loops) และสายรัดเต็นท์ด้านล่างแข็งแรง',
        'แถมฟรีผ้าคลุมกันฝน (Rain Cover) เคลือบกันน้ำ 2,000 มม. ในช่องก้นเป้'
      ],
      featuresEn: [
        'Suspended AirFlow mesh trampoline back panel for continuous ventilation',
        'Dual-density EVA foam shoulder harness and load-bearing ergonomic hip belt',
        'Dual access: classic top-loading cinch collar plus U-shaped front zipper',
        'Reinforced trekking pole loops and lower compression straps for tent attachment',
        'Includes integrated 2,000mm waterproof rain cover stowed in dedicated base pocket'
      ],
      specs: {
        'ความจุ': '45 ลิตร (+5 ลิตร Top Lid ขยายได้)',
        'น้ำหนัก': '1.28 กก.',
        'ขนาด': '62 x 32 x 24 ซม.',
        'วัสดุหลัก': 'Cordura 420D Ripstop Nylon ทนทานต่อการเสียดสี',
        'รองรับน้ำหนักบรรทุก': '15 - 18 กก.'
      },
      specsEn: {
        'Capacity': '45L (+5L expandable floating lid)',
        'Weight': '1.28 kg',
        'Dimensions': '62 x 32 x 24 cm',
        'Main Fabric': 'Cordura 420D High-Tenacity Ripstop Nylon',
        'Recommended Load': '15 - 18 kg'
      },
      colors: [
        {
          key: 'olive',
          label: 'เขียวมะกอก (Olive)',
          labelEn: 'Olive Green',
          hex: '#4F5E43',
          images: [
            'assets/products/backpack-45l_olive_front.webp',
            'assets/products/backpack-45l_olive_angle.webp',
            'assets/products/backpack-45l_olive_detail.webp'
          ]
        },
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
          labelEn: 'Matte Black',
          hex: '#1F1F1F',
          images: [
            'assets/products/backpack-45l_black_front.webp',
            'assets/products/backpack-45l_olive_angle.webp',
            'assets/products/backpack-45l_olive_detail.webp'
          ]
        },
        {
          key: 'rust',
          label: 'ส้มอิฐ (Rust)',
          labelEn: 'Rust Orange',
          hex: '#A44D29',
          images: [
            'assets/products/backpack-45l_rust_front.webp',
            'assets/products/backpack-45l_olive_angle.webp',
            'assets/products/backpack-45l_olive_detail.webp'
          ]
        }
      ],
      sizes: [],
      stock: {
        'olive': 15,
        'black': 4,
        'rust': 1
      },
      tagBadge: 'ยอดนิยมสายลุย',
      tagBadgeEn: 'Trail Favorite',
      reviews: [
        {
          author: 'คุณฟ้าใส ฤทัยวัลย์',
          location: 'ภูกระดึง & โมโกจู',
          locationEn: 'Phu Kradueng & Mokoju',
          rating: 5,
          date: '20 ม.ค. 2026',
          text: 'เป้ Summit Ridge 45L โครงหลังระบายอากาศยอดเยี่ยมมาก ตอนเดินขึ้นภูกระดึงเหงื่อไม่ชุ่มหลังเลย กระจายน้ำหนักได้ดีมากไม่เจ็บช่วงบ่า คุ้มค่าเกินราคาจริง ๆ',
          textEn: 'The Summit Ridge 45L back airflow is fantastic. Hiking up steep inclines without a soaked back was incredible. Great load distribution onto hips.'
        },
        {
          author: 'คุณวรเมธ เอกปรีชา',
          location: 'สันหนอกวัว',
          locationEn: 'San Nok Wua',
          rating: 5,
          date: '10 ก.พ. 2026',
          text: 'จุของได้จุใจมาก ช่อง Front Access ช่วยชีวิตเวลาต้องการหยิบเสื้อกันหนาวโดยไม่ต้องรื้อของทั้งหมด ผ้า Cordura ทนกิ่งไม้ขูดขีดได้ดีเยี่ยม',
          textEn: 'Very spacious, front access zipper makes grabbing warm layers easy without unpacking everything. Cordura fabric brushed off thorny branches easily.'
        },
        {
          author: 'คุณกานดา รักษ์ป่า',
          location: 'ดอยม่อนจอง',
          locationEn: 'Doi Mon Chong',
          rating: 4,
          date: '01 มี.ค. 2026',
          text: 'สีเขียวมะกอกสวยมากค่ะ สายรัดเอวปรับได้กระชับตัวพอดี เหมาะกับสรีระคนเอเชีย แนะนำเลยค่ะ',
          textEn: 'Olive green color is lovely. The hip belt snugs perfectly on Asian body proportions. Highly recommended.'
        }
      ]
    },
    {
      id: 'prod-3',
      slug: 'sleeping-bag',
      name: 'ถุงนอนขนเป็ด AeroDown 650FP',
      nameEn: 'AeroDown 650FP Ultralight Sleeping Bag',
      price: 1590,
      compareAtPrice: 1990,
      category: 'เต็นท์และที่พักแรม',
      categoryEn: 'Tents & Shelters',
      rating: 4.9,
      reviewCount: 214,
      shortDesc: 'ถุงนอนมัมมี่ทรงกระชับ ขนเป็ด 650FP ป้องกันความเย็นได้ถึง 5°C น้ำหนักเบาเพียง 900 กรัม',
      shortDescEn: 'Anatomical mummy sleeping bag, 650FP duck down, rated to 5°C comfort, weights only 900g.',
      description: 'ถุงนอนขนเป็ดทรงมัมมี่ (Mummy Style) อัตราส่วนขนเป็ด 90/10 Fill Power 650 กักเก็บความร้อนได้ดีเยี่ยม อุณหภูมิคอมฟอร์ต 5°C เหมาะสำหรับดอยอินทนนท์ ดอยหลวงเชียงดาว หรือภูสอยดาว เนื้อผ้า 380T Nylon นุ่มสบายผิว กันละอองน้ำและระบายความชื้นได้ดี',
      descriptionEn: 'Performance mummy down sleeping bag filled with premium 90/10 650 Fill Power duck down. Provides exceptional thermal retention down to a 5°C comfort rating, ideal for Northern Thailand mountain trails such as Doi Inthanon and Doi Luang Chiang Dao. Encased in featherlight 380T down-proof nylon with durable water repellent (DWR) finish.',
      features: [
        'ฉนวนขนเป็ดแท้ 650 Fill Power กักเก็บความอบอุ่นได้ดีเยี่ยม',
        'ช่วงอุณหภูมิ Comfort 5°C / Limit 0°C / Extreme -5°C',
        'ฮู้ดพร้อมเชือกรูดกระชับศีรษะ ป้องกันลมเย็นเข้าคอ',
        'ซิป YKK 2 ทิศทาง พร้อมแถบกันซิปรูดกินเนื้อผ้า',
        'แถมถุง Compression Sack อัดเก็บให้มีขนาดกะทัดรัด'
      ],
      featuresEn: [
        'Premium 650 Fill Power duck down insulation with superior loft and warmth-to-weight ratio',
        'Temperature Ratings: Comfort 5°C / Limit 0°C / Extreme -5°C',
        'Contoured anatomical hood with internal draft collar and cinch cord',
        'Full-length YKK 2-way zipper with anti-snag webbing and insulated draft tube',
        'Includes ultralight compression dry sack for compact packability'
      ],
      specs: {
        'น้ำหนัก': '900 กรัม',
        'อุณหภูมิ': 'Comfort 5°C / Limit 0°C',
        'ขนาดกาง': '210 x 80 x 50 ซม.',
        'ขนาดพับเก็บ': '32 x 18 ซม.',
        'วัสดุผ้า': '380T Water-resistant Ripstop Nylon',
        'วัสดุภายใน': 'Duck Down 90/10 (650FP 450g)'
      },
      specsEn: {
        'Weight': '900 grams',
        'Temperature': 'Comfort 5°C / Limit 0°C',
        'Unfolded Dimensions': '210 x 80 x 50 cm',
        'Compressed Size': '32 x 18 cm',
        'Shell Material': '380T Water-resistant Ripstop Nylon',
        'Fill Material': 'Duck Down 90/10 (650FP 450g)'
      },
      colors: [
        {
          key: 'navy',
          label: 'กรมท่า (Navy)',
          labelEn: 'Navy Blue',
          hex: '#21334E',
          images: [
            'assets/products/sleeping-bag_navy_front.webp',
            'assets/products/sleeping-bag_navy_angle.webp',
            'assets/products/sleeping-bag_navy_detail.webp'
          ]
        },
        {
          key: 'forest-green',
          label: 'เขียวฟอเรสต์ (Forest Green)',
          labelEn: 'Forest Green',
          hex: '#2B4A34',
          images: [
            'assets/products/sleeping-bag_forest-green_front.webp',
            'assets/products/sleeping-bag_navy_angle.webp',
            'assets/products/sleeping-bag_navy_detail.webp'
          ]
        },
        {
          key: 'graphite',
          label: 'เทากราไฟต์ (Graphite)',
          labelEn: 'Graphite Grey',
          hex: '#3D3F43',
          images: [
            'assets/products/sleeping-bag_graphite_front.webp',
            'assets/products/sleeping-bag_navy_angle.webp',
            'assets/products/sleeping-bag_navy_detail.webp'
          ]
        }
      ],
      sizes: [],
      stock: {
        'navy': 8,
        'forest-green': 2,
        'graphite': 5
      },
      tagBadge: 'อุ่นสบาย 5°C',
      tagBadgeEn: 'Comfort 5°C',
      reviews: [
        {
          author: 'คุณณัฐพัชร์ ชื่นจิต',
          location: 'ภูทับเบิก',
          locationEn: 'Phu Thap Boek',
          rating: 5,
          date: '05 ม.ค. 2026',
          text: 'อุณหภูมิตอนตีสอง 6 องศา นอนอุ่นสบายมาก ขนเป็ดนุ่มฟู ไม่เหม็นสาบ พับเก็บแล้วเล็กกะทัดรัดใส่ก้นเป้ได้พอดี',
          textEn: 'At 2 AM at 6°C, stayed completely toasty. Down loft is soft with zero odor. Compresses small into my sleeping bag compartment.'
        },
        {
          author: 'คุณชลธิชา ประเสริฐ',
          location: 'ดอยอินทนนท์',
          locationEn: 'Doi Inthanon',
          rating: 5,
          date: '18 ม.ค. 2026',
          text: 'น้ำหนักเบามากเมื่อเทียบกับความอุ่น ผิวด้านในนุ่มไม่เหนียวตัวแม้มีเหงื่อเล็กน้อย คุ้มค่าที่สุดสำหรับสาย Ultralight',
          textEn: 'Incredibly lightweight for the warmth rating. The inner lining feels gentle against skin. Best ultralight bag.'
        },
        {
          author: 'คุณสมภพ พิทักษ์',
          location: 'ห้วยน้ำดัง',
          locationEn: 'Huai Nam Dang',
          rating: 5,
          date: '12 ก.พ. 2026',
          text: 'ซิปรูดลื่นไม่ติดผ้า มีแถบกั้นลมเย็นตลอดแนวซิป ประทับใจมากครับ',
          textEn: 'Smooth zipper that does not catch fabric, draft tube keeps chilly wind out. Very pleased with this purchase.'
        }
      ]
    },
    {
      id: 'prod-4',
      slug: 'windbreaker',
      name: 'แจ็กเก็ตกันลมพายุ AlpineStorm 3L',
      nameEn: 'AlpineStorm 3L Waterproof Technical Jacket',
      price: 1890,
      compareAtPrice: 2290,
      category: 'เป้และเครื่องแต่งกาย',
      categoryEn: 'Backpacks & Apparel',
      rating: 4.8,
      reviewCount: 82,
      shortDesc: 'แจ็กเก็ตกันลมและฝน 3-Layer Membrane น้ำหนักเบา ระบายเหงื่อ 10,000g พับเก็บเล็กเท่าฝ่ามือ',
      shortDescEn: '3-Layer membrane technical shell, 15,000mm waterproof, 10,000g breathability, pit zips.',
      description: 'เสื้อแจ็กเก็ตเทคนิคอลสำหรับสภาพอากาศแปรปรวนบนภูเขา โครงสร้างผ้า 3 ชั้น พร้อมเทคโนโลยีเมมเบรนกันน้ำ 15,000 มม. และอัตราการระบายไอน้ำ 10,000 g/m²/24h ซีลเทปกันน้ำทุกตะเข็บ มีช่องซิปเปิดใต้รักแร้เพื่อระบายอากาศเมื่อเดินขึ้นทางชัน ฮู้ดปรับกระชับรอบทิศทาง',
      descriptionEn: 'Rugged technical shell jacket built for unpredictable alpine squalls and torrential rainforest downpours. Engineered with 3-layer laminated membrane technology delivering 15,000mm hydrostatic head waterproofing and 10,000 g/m²/24h vapor permeability. 100% seam taped throughout, with two-way underarm pit zips for instant heat dumping on steep climbs.',
      features: [
        'เนื้อผ้า 3-Layer Technical Fabric กันน้ำ 15,000 มม.',
        'อัตราการระบายเหงื่อ 10,000 g/m²/24h ไม่อบอ้าว',
        'ตะเข็บซีลกันน้ำสมบูรณ์แบบ 100% Fully Seam Sealed',
        'ซิปกันน้ำ YKK AquaGuard และซิประบายอากาศใต้แขน Pit Zips',
        'พับม้วนเก็บในกระเป๋าหน้าอกได้ พกพาสะดวก นน. เพียง 340 กรัม'
      ],
      featuresEn: [
        '3-Layer technical shell rated at 15,000mm hydrostatic head waterproof performance',
        'High breathability rating of 10,000 g/m²/24h prevents clamminess during high exertion',
        '100% fully seam sealed with waterproof thermo-welded micro-taping',
        'YKK AquaGuard water-repellent zippers and underarm pit zips for active venting',
        'Packs down into its own chest stow pocket; lightweight at only 340g'
      ],
      specs: {
        'น้ำหนัก': '340 กรัม (ไซซ์ L)',
        'ความสามารถกันน้ำ': '15,000 มม. เสาน้ำ',
        'การระบายอากาศ': '10,000 g/m²/24hr',
        'วัสดุผ้า': '100% Recycled Nylon Ripstop with DWR',
        'ทรงเสื้อ': 'Regular Outdoor Fit (สวมทับเลเยอร์ได้)'
      },
      specsEn: {
        'Weight': '340 grams (Size L)',
        'Waterproof Rating': '15,000 mm hydrostatic head',
        'Breathability': '10,000 g/m²/24hr',
        'Shell Material': '100% Recycled Ripstop Nylon with DWR',
        'Fit Profile': 'Regular Alpine Fit (layers over fleece)'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
          labelEn: 'Matte Black',
          hex: '#1E1E1E',
          images: [
            'assets/products/windbreaker_black_front.webp',
            'assets/products/windbreaker_black_angle.webp',
            'assets/products/windbreaker_black_detail.webp'
          ]
        },
        {
          key: 'sand',
          label: 'ทราย (Sand)',
          labelEn: 'Desert Sand',
          hex: '#C5B194',
          images: [
            'assets/products/windbreaker_sand_front.webp',
            'assets/products/windbreaker_black_angle.webp',
            'assets/products/windbreaker_black_detail.webp'
          ]
        },
        {
          key: 'olive',
          label: 'เขียวมะกอก (Olive)',
          labelEn: 'Olive Green',
          hex: '#516149',
          images: [
            'assets/products/windbreaker_olive_front.webp',
            'assets/products/windbreaker_black_angle.webp',
            'assets/products/windbreaker_black_detail.webp'
          ]
        }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      stock: {
        'black_S': 5,
        'black_M': 8,
        'black_L': 4,
        'black_XL': 0,
        'sand_S': 2,
        'sand_M': 6,
        'sand_L': 3,
        'sand_XL': 1,
        'olive_S': 4,
        'olive_M': 7,
        'olive_L': 2,
        'olive_XL': 0
      },
      tagBadge: 'กันน้ำ 15,000 มม.',
      tagBadgeEn: '15,000mm Waterproof',
      reviews: [
        {
          author: 'คุณพงศกร เด่นดวง',
          location: 'ดอยปุย เชียงใหม่',
          locationEn: 'Doi Pui, Chiang Mai',
          rating: 5,
          date: '22 ม.ค. 2026',
          text: 'กันลมได้ 100% เลยครับ ตอนเดินสันเขาที่ลมแรงมาก ตัวไม่สะท้านเลย ซิปใต้แขนช่วยระบายความร้อนได้ดีมากเวลาเหงื่อออก',
          textEn: '100% windproof. Walking exposed ridge lines in howling wind, body stayed warm. Pit zips dumped heat quickly when climbing.'
        },
        {
          author: 'คุณนภัสสร ศรีสว่าง',
          location: 'น้ำตกปิตุ๊โกร',
          locationEn: 'Pitugro Waterfall',
          rating: 5,
          date: '04 ก.พ. 2026',
          text: 'ใส่เดินลุยละอองน้ำตกและฝนปรอย ๆ น้ำกลิ้งเป็นหยดบนผิวผ้าเลยค่ะ แห้งไวมาก ทรงเสื้อสวยดูทะมัดทะแมง',
          textEn: 'Wore this trekking through heavy waterfall spray and drizzle. Water beaded straight off the DWR surface. Dries super fast.'
        },
        {
          author: 'คุณเอกพล เจริญชัย',
          location: 'เขาช้างเผือก',
          locationEn: 'Khao Chang Phueak',
          rating: 4,
          date: '25 ก.พ. 2026',
          text: 'เนื้อผ้าทนทานมาก กิ่งไม้ขูดไม่เป็นรอย ไซซ์ L สวมทับฟลีซข้างในได้กำลังดีครับ',
          textEn: 'Very tough ripstop fabric, brushed branches leave no marks. Size L fits comfortably over a midlayer fleece.'
        }
      ]
    },
    {
      id: 'prod-5',
      slug: 'camp-stove',
      name: 'เตาแคมป์พกพา UltraLite Titanium',
      nameEn: 'UltraLite Titanium 3,200W Camp Stove',
      price: 890,
      compareAtPrice: null,
      category: 'อุปกรณ์ทำอาหารและยังชีพ',
      categoryEn: 'Camp Cooking & Survival',
      rating: 4.9,
      reviewCount: 142,
      shortDesc: 'เตาแก๊สพกพาน้ำหนักเบาพิเศษ ขาพับได้ กำลังไฟ 3,200W ต้มน้ำเดือดใน 3 นาที',
      shortDescEn: 'Ultralight folding titanium camp stove, 3,200W output, boils 1L in 3 mins, weights 85g.',
      description: 'เตาแก๊สเดินป่าขนาดเล็กพิเศษ ผลิตจากอะลูมิเนียมอัลลอยด์และสเตนเลสสตีลคุณภาพสูง ขาตั้งหม้อ 4 ขาพับเก็บได้แข็งแรง รองรับหม้อสนามขนาด 1-3 คน หัวเตาเปลวไฟวนต้านลม ให้ความร้อนสม่ำเสมอ ประหยัดแก๊ส พร้อมวาล์วปรับระดับไฟที่ละเอียดแม่นยำ',
      descriptionEn: 'Featherweight high-output canister stove crafted from high-grade titanium, aluminum alloy, and stainless steel. Features 4 sturdy serrated fold-out pot supports capable of holding 1-3 person cooksets. The wind-shielded concave burner head produces a concentrated vortex flame that resists buffeting winds while boiling 1 liter of water in under 3.5 minutes.',
      features: [
        'กำลังไฟแรงสูง 3,200W ต้มน้ำ 1 ลิตรเดือดใน 3 นาที 20 วินาที',
        'หัวเตาออกแบบเปลวไฟวน (Rotary Flame) ต้านทานลมกระโชก',
        'พับเก็บได้เล็กกะทัดรัดขนาดเท่าฝ่ามือ พกพาสะดวก',
        'วาล์วปรับไฟแบบไมโครคอนโทรล ควบคุมไฟอ่อน-แรงได้แม่นยำ',
        'มาพร้อมกล่องฮาร์ดเคสสำหรับจัดเก็บ ป้องกันการกระแทก'
      ],
      featuresEn: [
        'High-power 3,200W output boils 1 liter of water in 3 minutes 20 seconds',
        'Concave rotary flame burner design deflects mountain crosswinds',
        'Folds into palm-sized compact footprint for ultralight packing',
        'Micro-adjust control valve allows seamless simmering to roaring boil',
        'Includes rugged impact-resistant hardshell carry case'
      ],
      specs: {
        'น้ำหนัก': '85 กรัม',
        'กำลังไฟ': '3,200 วัตต์ (11,000 BTU)',
        'ขนาดกาง': '15 x 15 x 8 ซม.',
        'ขนาดพับเก็บ': '4 x 5 x 8 ซม.',
        'ชนิดแก๊สที่รองรับ': 'แก๊สซาลาเปาเกลียวสากล (Lindal Valve)',
        'วัสดุ': 'Stainless Steel, Copper, Aluminum Alloy'
      },
      specsEn: {
        'Weight': '85 grams',
        'Output': '3,200 Watts (11,000 BTU)',
        'Unfolded Size': '15 x 15 x 8 cm',
        'Folded Size': '4 x 5 x 8 cm',
        'Fuel Compatibility': 'Isobutane / Propane Canister (Lindal Valve)',
        'Materials': 'Stainless Steel, Brass, Aluminum Alloy'
      },
      colors: [
        {
          key: 'silver',
          label: 'เงินเมทัลลิก (Silver)',
          labelEn: 'Metallic Silver',
          hex: '#C0C0C0',
          images: [
            'assets/products/camp-stove_silver_front.webp',
            'assets/products/camp-stove_silver_angle.webp',
            'assets/products/camp-stove_silver_detail.webp'
          ]
        }
      ],
      sizes: [],
      stock: {
        'silver': 20
      },
      tagBadge: 'พลังไฟ 3,200W',
      tagBadgeEn: '3,200W Output',
      reviews: [
        {
          author: 'คุณวีระศักดิ์ มั่นคง',
          location: 'ดอยผ้าห่มปก',
          locationEn: 'Doi Pha Hom Pok',
          rating: 5,
          date: '02 ก.พ. 2026',
          text: 'ไฟแรงสม่ำเสมอมากครับ บนยอดดอยที่อากาศหนาวและลมแรงยังต้มกาแฟเดือดเร็วทันใจ ขนาดเล็กเบามากจนแทบไม่รู้สึกว่าพกมา',
          textEn: 'Very strong flame output. In cold, windy peak conditions, boiled morning coffee in no time. So light you barely notice it in your pack.'
        },
        {
          author: 'คุณมณฑา ยิ่งเจริญ',
          location: 'แก่งกระจาน',
          locationEn: 'Kaeng Krachan',
          rating: 5,
          date: '15 ก.พ. 2026',
          text: 'ขาเตากางออกมามั่นคงดีมาก วางกระทะสนามขนาดกลางได้นิ่ง วาล์วปรับไฟหรี่ได้เนียนไม่ดับง่าย',
          textEn: 'Pot supports are very stable holding a medium camping frypan. Flame valve adjusts down to a simmer without blowing out.'
        },
        {
          author: 'คุณจิรายุ ธนบูรณ์',
          location: 'คลองลาน กำแพงเพชร',
          locationEn: 'Khlong Lan, Kamphaeng Phet',
          rating: 5,
          date: '27 ก.พ. 2026',
          text: 'กล่องเก็บแข็งแรงดีมาก ทนทานคุ้มราคาครับ',
          textEn: 'Tough hard-case protects the burner well. Great durability and unbeatable value.'
        }
      ]
    },
    {
      id: 'prod-6',
      slug: 'headlamp',
      name: 'ไฟฉายคาดหัว NightTrail 800LM',
      nameEn: 'NightTrail 800LM Rechargeable Headlamp',
      price: 690,
      compareAtPrice: 850,
      category: 'อุปกรณ์ทำอาหารและยังชีพ',
      categoryEn: 'Camp Cooking & Survival',
      rating: 4.8,
      reviewCount: 167,
      shortDesc: 'ไฟฉายคาดหัวความสว่าง 800 ลูเมน ชาร์จ USB-C กันน้ำ IPX6 ส่องไกล 120 เมตร',
      shortDescEn: '800 lumens output, USB-C rechargeable, IPX6 water resistance, 120m beam throw.',
      description: 'ไฟฉายคาดหัวสำหรับการเดินป่าตอนกลางคืนและตั้งแคมป์ หลอด LED CREE คุณภาพสูง ให้แสงสีขาวธรรมชาติและแสงสีแดงสำหรับอ่านแผนที่ไม่รบกวนสายตา แบตเตอรี่ลิเธียมไอออนในตัวชาร์จเร็วผ่านพอร์ต USB-C ปรับมุมก้ม-เงยได้ 60 องศา สายคาดศีรษะระบายเหงื่อได้ดี',
      descriptionEn: 'High-performance rechargeable headlamp engineered for nocturnal trail navigation and camp pitching. Powered by an authentic CREE LED generating up to 800 lumens of neutral white flood and spot beams, alongside auxiliary red LEDs for night vision preservation without disturbing campsite neighbors. Features a built-in 1,800mAh USB-C rechargeable battery and 60-degree tilt mechanism.',
      features: [
        'ความสว่างสูงสุด 800 Lumens ส่องไกลถึง 120 เมตร',
        'โหมดแสง 5 ระดับ: High, Med, Low, Red Light, SOS',
        'มาตรฐานกันน้ำและละอองฝนระดับ IPX6 ทนทุกสภาพอากาศ',
        'แบตเตอรี่ในตัว 1,800mAh ชาร์จด้วย USB-C ใช้งานได้ยาวนานถึง 36 ชม.',
        'หัวไฟฉายปรับก้ม-เงยได้ 60 องศา ส่องสว่างตรงจุดที่ต้องการ'
      ],
      featuresEn: [
        '800 Lumens peak output casting an illuminated beam up to 120 meters',
        '5 Lighting modes: High, Medium, Low, Red Night Vision, and SOS beacon',
        'IPX6 stormproof water resistance rating withstands torrential rains',
        'Integrated 1,800mAh Li-ion battery with fast USB-C charging up to 36h runtime',
        '60-Degree angle tilt mechanism directs light precisely where needed'
      ],
      specs: {
        'น้ำหนัก': '72 กรัม (รวมสายรัดศีรษะ)',
        'ความสว่าง': '800 Lumens',
        'ระยะลำแสง': 'สูงสุด 120 เมตร',
        'แบตเตอรี่': 'Li-ion 1,800mAh ในตัว (ชาร์จ USB-C)',
        'ระยะเวลาใช้งาน': '4 - 36 ชั่วโมง (ตามโหมด)'
      },
      specsEn: {
        'Weight': '72 grams (including headband)',
        'Max Brightness': '800 Lumens',
        'Beam Distance': 'Up to 120 meters',
        'Battery': 'Integrated 1,800mAh Li-ion (USB-C)',
        'Runtime': '4 - 36 Hours (mode dependent)'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
          labelEn: 'Matte Black',
          hex: '#222222',
          images: [
            'assets/products/headlamp_black_front.webp',
            'assets/products/headlamp_black_angle.webp',
            'assets/products/headlamp_black_detail.webp'
          ]
        },
        {
          key: 'orange',
          label: 'ส้มเซฟตี้ (Safety Orange)',
          labelEn: 'Safety Orange',
          hex: '#E65C00',
          images: [
            'assets/products/headlamp_orange_front.webp',
            'assets/products/headlamp_black_angle.webp',
            'assets/products/headlamp_black_detail.webp'
          ]
        }
      ],
      sizes: [],
      stock: {
        'black': 14,
        'orange': 3
      },
      tagBadge: 'สว่างไกล 120 ม.',
      tagBadgeEn: '120m Beam Throw',
      reviews: [
        {
          author: 'คุณกิตติศักดิ์ พลอยดี',
          location: 'เขาหลวงนครศรีธรรมราช',
          locationEn: 'Khao Luang Nakhon Si Thammarat',
          rating: 5,
          date: '11 ม.ค. 2026',
          text: 'เดินเทรคกลางคืนสว่างมาก ลำแสงพุ่งไกลเห็นเส้นทางชัดเจน แบตเตอรี่อึดจริง ชาร์จไฟด้วยพาวเวอร์แบงค์สะดวกมาก',
          textEn: 'Very bright for night trekking, beam throws far to spot trail markers clearly. Battery lasted the entire trek with easy powerbank top-up.'
        },
        {
          author: 'คุณพิมลวรรณ สุขสม',
          location: 'ภูสอยดาว',
          locationEn: 'Phu Soi Dao',
          rating: 5,
          date: '19 ม.ค. 2026',
          text: 'โหมดแสงสีแดงมีประโยชน์มากเวลาอยู่ในเต็นท์ ไม่แยงตาเพื่อนร่วมทริป น้ำหนักเบาใส่แล้วไม่ปวดหน้าผาก',
          textEn: 'Red light mode is super useful inside tents so you don\'t blind companions. Featherlight headband with no forehead pressure.'
        },
        {
          author: 'คุณชัชชัย แซ่ตั้ง',
          location: 'ดอยเชียงดาว',
          locationEn: 'Doi Chiang Dao',
          rating: 4,
          date: '16 ก.พ. 2026',
          text: 'ปุ่มกดเปิดปิดตอบสนองดีแม้ใส่ถุงมือเดินป่า แนะนำสีส้มมองเห็นง่ายเวลาวางในเต็นท์ครับ',
          textEn: 'Button clicks reliably even wearing trekking gloves. Safety orange is easy to spot in dim tent lighting.'
        }
      ]
    },
    {
      id: 'prod-7',
      slug: 'camp-chair',
      name: 'เก้าอี้พับแคมป์ FeatherSeat Pro',
      nameEn: 'FeatherSeat Pro Ultralight Camp Chair',
      price: 1290,
      compareAtPrice: 1590,
      category: 'เต็นท์และที่พักแรม',
      categoryEn: 'Tents & Shelters',
      rating: 4.7,
      reviewCount: 78,
      shortDesc: 'เก้าอี้พับพกพา โครงอะลูมิเนียมเกรด 7075 รองรับน้ำหนักได้ถึง 140 กก. น้ำหนักเพียง 980 กรัม',
      shortDescEn: 'Portable folding camp chair, 7075 aluminum frame, 140kg load capacity, weights 980g.',
      description: 'เก้าอี้พับน้ำหนักเบาสำหรับการแคมปิ้งและเดินป่า โครงสร้างเสา Shock-cord อะลูมิเนียม 7075 กางประกอบง่ายใน 30 วินาที ผ้าเบาะ 600D Oxford ทนทานพร้อมแถบผ้าตาข่ายระบายอากาศด้านหลัง นั่งสบายไม่ร้อน พับเก็บแล้วมีขนาดกะทัดรัดใส่ช่องข้างเป้ได้สบาย',
      descriptionEn: 'Ultralight folding backcountry chair that balances comfort with minimal pack weight. Constructed with shock-corded 7075 aviation-grade aluminum tubing that snaps together in 30 seconds. The seat is stitched from heavy-duty 600D Oxford polyester reinforced with breathable mesh back inserts for cool airflow during warm afternoons. Compact cylinder pack fits seamlessly into side pack sleeves.',
      features: [
        'โครงสร้างเสา 7075 Aviation Aluminum แข็งแกร่งแต่น้ำหนักเบา',
        'รับน้ำหนักได้สูงสุดถึง 140 กิโลกรัม ผ่านการทดสอบความทนทาน',
        'ผ้าเก้าอี้ 600D Oxford เคลือบกันน้ำ ทนการฉีกขาด',
        'ตาข่ายระบายอากาศ Breathable Mesh ด้านหลังนั่งสบายไม่ร้อน',
        'มีช่องตาข่ายด้านข้างสำหรับวางขวดน้ำหรือโทรศัพท์'
      ],
      featuresEn: [
        'Aviation-grade 7075 aluminum alloy frame delivers high strength at ultralight weight',
        'Certified maximum weight capacity of 140 kg (308 lbs)',
        'Durable 600D Oxford ripstop fabric with water-repellent coating',
        'Breathable central mesh panel prevents sweat build-up and promotes cooling',
        'Side stretch pocket holds smartphone, water bottle, or headlamp'
      ],
      specs: {
        'น้ำหนัก': '980 กรัม',
        'รับน้ำหนักสูงสุด': '140 กก.',
        'ขนาดเมื่อกาง': '56 x 65 x 68 ซม. (ความสูงที่นั่ง 35 ซม.)',
        'ขนาดพับเก็บ': '36 x 12 x 10 ซม.',
        'วัสดุโครง': '7075 Aluminum Alloy',
        'วัสดุผ้า': '600D Ripstop Polyester + Mesh'
      },
      specsEn: {
        'Weight': '980 grams',
        'Max Load': '140 kg',
        'Assembled Size': '56 x 65 x 68 cm (seat height 35 cm)',
        'Packed Dimensions': '36 x 12 x 10 cm',
        'Frame Material': '7075 Aviation Aluminum Alloy',
        'Fabric Material': '600D Ripstop Polyester + Monofilament Mesh'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
          labelEn: 'Matte Black',
          hex: '#1D1D1D',
          images: [
            'assets/products/camp-chair_black_front.webp',
            'assets/products/camp-chair_black_angle.webp',
            'assets/products/camp-chair_black_detail.webp'
          ]
        },
        {
          key: 'olive',
          label: 'เขียวมะกอก (Olive)',
          labelEn: 'Olive Green',
          hex: '#4A5B43',
          images: [
            'assets/products/camp-chair_olive_front.webp',
            'assets/products/camp-chair_black_angle.webp',
            'assets/products/camp-chair_black_detail.webp'
          ]
        }
      ],
      sizes: [],
      stock: {
        'black': 9,
        'olive': 2
      },
      tagBadge: 'รับน้ำหนัก 140 กก.',
      tagBadgeEn: '140kg Load Rating',
      reviews: [
        {
          author: 'คุณธนกฤต ชัยวารี',
          location: 'เจ็ดคต-โป่งก้อนเส้า',
          locationEn: 'Chet Khot-Pong Kon Sao',
          rating: 5,
          date: '08 ก.พ. 2026',
          text: 'นั่งสบายมากครับ โครงเก้าอี้หนาแน่นมั่นคงไม่ง่อนแง่น พับเก็บแล้วเล็กนิดเดียวพกไปไหนมาไหนสะดวกมาก',
          textEn: 'Very comfortable seat, solid frame doesn\'t wobble at all. Packs into a small cylinder that easily tucks under backpack compression straps.'
        },
        {
          author: 'คุณศศิธร พานิช',
          location: 'ปางอุ๋ง แม่ฮ่องสอน',
          locationEn: 'Pang Oung, Mae Hong Son',
          rating: 5,
          date: '14 ก.พ. 2026',
          text: 'ผ้าเหนียวทนทาน ตาข่ายด้านหลังช่วยระบายอากาศ นั่งชมหมอกริมอ่างเก็บน้ำเพลินเลยค่ะ',
          textEn: 'Tough tear-resistant fabric, back mesh breathes nicely. Sitting by the misty reservoir was pure bliss.'
        },
        {
          author: 'คุณปิยะ เจนวิทยา',
          location: 'เขาใหญ่',
          locationEn: 'Khao Yai',
          rating: 4,
          date: '01 มี.ค. 2026',
          text: 'ประกอบและเก็บง่ายมาก มีช่องใส่ขวดน้ำด้านข้างสะดวกดีครับ',
          textEn: 'Assembles and packs away in 30 seconds. Side bottle pocket is very handy.'
        }
      ]
    },
    {
      id: 'prod-8',
      slug: 'water-bottle',
      name: 'กระบอกน้ำสุญญากาศ ThermoTrail 750ml',
      nameEn: 'ThermoTrail 750ml Vacuum Insulated Bottle',
      price: 590,
      compareAtPrice: null,
      category: 'อุปกรณ์ทำอาหารและยังชีพ',
      categoryEn: 'Camp Cooking & Survival',
      rating: 4.9,
      reviewCount: 189,
      shortDesc: 'กระบอกน้ำเก็บอุณหภูมิ สเตนเลส 304 เก็บเย็น 24 ชม. ร้อน 12 ชม. เคลือบสีเพาเดอร์โค้ท',
      shortDescEn: 'Double-wall 18/8 stainless steel bottle, 24h cold / 12h hot, powder-coat finish, BPA-free.',
      description: 'กระบอกน้ำเก็บอุณหภูมิสุญญากาศ 2 ชั้น (Double-Wall Vacuum Insulation) ผลิตจากสเตนเลสเกรดอาหาร 18/8 (SUS 304) ปราศจากสารก่อมะเร็ง BPA-Free ฝาเกลียวป้องกันการรั่วซึม 100% พร้อมหูหิ้วซิลิโคนเหนียวทนทาน ภายนอกพ่นเคลือบสี Powder-Coated กันลื่นจับกระชับมือ',
      descriptionEn: 'Double-wall vacuum insulated water bottle built for trail hydration. Constructed from certified food-grade 18/8 (SUS 304) stainless steel that will never retain odors or flavor. High-grade copper barrier vacuum insulation keeps iced water chilled for 24 hours or hot tea steaming for 12 hours. Exterior finished in rugged matte powder-coating for slip-free grip.',
      features: [
        'เทคโนโลยีฉนวนสุญญากาศ เก็บความเย็นได้ 24 ชม. และความร้อน 12 ชม.',
        'ผลิตจาก Food-Grade 18/8 Stainless Steel ปลอดสาร BPA 100%',
        'ผิวสัมผัส Powder Coating กันรอยขีดข่วน ไม่ลื่นหลุดมือง่าย',
        'ฝาเกลียวกันรั่วซึม Leak-Proof 100% พร้อมหูหิ้วพกพาสะดวก',
        'ปากกระบอกกว้าง ใส่น้ำแข็งได้ง่ายและล้างทำความสะอาดสะดวก'
      ],
      featuresEn: [
        'Double-wall vacuum insulation keeps liquids cold for 24h and hot for 12h',
        'Crafted from 100% BPA-free food-grade 18/8 (SUS 304) stainless steel',
        'Durable textured powder-coat exterior provides non-slip grip and scratch resistance',
        'Leakproof threaded silicone-sealed cap with sturdy ergonomic carry loop',
        'Wide-mouth opening accommodates standard trail ice cubes and water filter nozzles'
      ],
      specs: {
        'ความจุ': '750 มล. (25 ออนซ์)',
        'น้ำหนัก': '360 กรัม',
        'ขนาด': '26 x 7.5 ซม.',
        'ประสิทธิภาพ': 'เก็บเย็น 24 ชม. / เก็บความร้อน 12 ชม.',
        'วัสดุ': 'Food Grade 18/8 (SUS 304) Stainless Steel'
      },
      specsEn: {
        'Capacity': '750 ml (25 oz)',
        'Weight': '360 grams',
        'Dimensions': '26 x 7.5 cm',
        'Thermal Performance': '24 Hours Cold / 12 Hours Hot',
        'Material': 'Food Grade 18/8 (SUS 304) Stainless Steel'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
          labelEn: 'Matte Black',
          hex: '#1F1F1F',
          images: [
            'assets/products/water-bottle_black_front.webp',
            'assets/products/water-bottle_black_angle.webp',
            'assets/products/water-bottle_black_detail.webp'
          ]
        },
        {
          key: 'sage',
          label: 'เขียวเสจ (Sage)',
          labelEn: 'Sage Green',
          hex: '#8A9A86',
          images: [
            'assets/products/water-bottle_sage_front.webp',
            'assets/products/water-bottle_black_angle.webp',
            'assets/products/water-bottle_black_detail.webp'
          ]
        },
        {
          key: 'sand',
          label: 'ทราย (Sand)',
          labelEn: 'Desert Sand',
          hex: '#D1C2A5',
          images: [
            'assets/products/water-bottle_sand_front.webp',
            'assets/products/water-bottle_black_angle.webp',
            'assets/products/water-bottle_black_detail.webp'
          ]
        }
      ],
      sizes: [],
      stock: {
        'black': 18,
        'sage': 5,
        'sand': 7
      },
      tagBadge: 'เก็บเย็น 24 ชม.',
      tagBadgeEn: '24h Cold Retention',
      reviews: [
        {
          author: 'คุณดนัย เกียรติสุข',
          location: 'ทริปวิ่งเทรลเขาสมอคอน',
          locationEn: 'Khao Samokhon Trail',
          rating: 5,
          date: '17 ม.ค. 2026',
          text: 'ใส่น้ำแข็งเดินขึ้นเขาตั้งแต่เช้า บ่ายแก่ ๆ น้ำแข็งยังละลายไม่หมดเลยครับ ฝาปิดสนิทน้ำไม่หกเลอะเทอะในเป้',
          textEn: 'Loaded with ice early morning for trail run; ice cubes were still solid late afternoon. Absolutely leakproof in my pack.'
        },
        {
          author: 'คุณพัชรินทร์ วงศ์แก้ว',
          location: 'ดอยลังกาหลวง',
          locationEn: 'Doi Lanka Luang',
          rating: 5,
          date: '02 ก.พ. 2026',
          text: 'สีเขียวเสจสวยถูกใจมาก ผิวเคลือบแมตต์จับถนัดมือไม่ลื่น หูหิ้วแข็งแรงเกี่ยวคาราบิเนอร์ติดเป้ได้เลย',
          textEn: 'Sage green finish is stunning. Matte powder coat is grippy without slipping. Sturdy loop clips to carabiners easily.'
        },
        {
          author: 'คุณกฤษณะ บุญส่ง',
          location: 'อุทยานฯ ไทรโยค',
          locationEn: 'Sai Yok National Park',
          rating: 5,
          date: '21 ก.พ. 2026',
          text: 'สเตนเลสคุณภาพสูง ไม่มีกลิ่นโลหะติดน้ำดื่ม ทำความสะอาดง่ายมากครับ',
          textEn: 'High quality food-grade stainless steel with zero metallic taste. Very easy to keep clean.'
        }
      ]
    }
  ];

  // Helper Lookups
  function getProductBySlug(slug) {
    if (!slug) return null;
    return PRODUCTS.find(p => p.slug.toLowerCase() === slug.toLowerCase()) || null;
  }

  function getProductById(id) {
    if (!id) return null;
    return PRODUCTS.find(p => p.id === id) || null;
  }

  function getRelatedProducts(currentSlug, limit = 4) {
    const current = getProductBySlug(currentSlug);
    if (!current) return PRODUCTS.slice(0, limit);

    // Prioritize same category
    const sameCategory = PRODUCTS.filter(p => p.slug !== current.slug && p.category === current.category);
    const otherCategory = PRODUCTS.filter(p => p.slug !== current.slug && p.category !== current.category);

    const merged = [...sameCategory, ...otherCategory];
    return merged.slice(0, limit);
  }

  function getLocalizedProduct(p, lang) {
    if (!p) return null;
    const currentLang = lang || (window.WILDTRAIL && window.WILDTRAIL.getLang ? window.WILDTRAIL.getLang() : 'th');
    const isEn = currentLang === 'en';
    return {
      ...p,
      name: isEn && p.nameEn ? p.nameEn : p.name,
      category: isEn && p.categoryEn ? p.categoryEn : p.category,
      shortDesc: isEn && p.shortDescEn ? p.shortDescEn : p.shortDesc,
      description: isEn && p.descriptionEn ? p.descriptionEn : p.description,
      features: isEn && p.featuresEn ? p.featuresEn : p.features,
      specs: isEn && p.specsEn ? p.specsEn : p.specs,
      tagBadge: isEn && p.tagBadgeEn ? p.tagBadgeEn : p.tagBadge,
      colors: p.colors.map(c => ({
        ...c,
        label: isEn && c.labelEn ? c.labelEn : c.label
      })),
      reviews: (p.reviews || []).map(r => ({
        ...r,
        location: isEn && r.locationEn ? r.locationEn : r.location,
        text: isEn && r.textEn ? r.textEn : r.text
      }))
    };
  }

  // Export
  window.WILDTRAIL_PRODUCTS = PRODUCTS;
  window.getProductBySlug = getProductBySlug;
  window.getProductById = getProductById;
  window.getRelatedProducts = getRelatedProducts;
  window.getLocalizedProduct = getLocalizedProduct;

  if (window.WILDTRAIL) {
    window.WILDTRAIL.products = PRODUCTS;
    window.WILDTRAIL.getProductBySlug = getProductBySlug;
    window.WILDTRAIL.getProductById = getProductById;
    window.WILDTRAIL.getRelatedProducts = getRelatedProducts;
    window.WILDTRAIL.getLocalizedProduct = getLocalizedProduct;
  }

})(window);
