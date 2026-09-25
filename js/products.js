/**
 * WILDTRAIL - Single Source of Truth for Product Data
 * Used across index.html, product.html, checkout.html, etc.
 * Strictly NO EMOJIS, 8pt Grid Compliant.
 */

(function (window) {
  'use strict';

  const PRODUCTS = [
    {
      id: 'prod-1',
      slug: 'tent-dome',
      name: 'เต็นท์โดม 2 คน WILDTRAIL Peak Pro',
      price: 3290,
      compareAtPrice: 3890,
      category: 'เต็นท์และที่พักแรม',
      rating: 4.9,
      reviewCount: 128,
      shortDesc: 'เต็นท์โดมน้ำหนักเบา 2 คน โครงเสาอะลูมิเนียม 7001 แข็งแกร่ง ทนพายุลมแรงและกันฝน 3,000 มม.',
      description: 'เต็นท์โดม 2 คนระดับมืออาชีพสำหรับเดินป่าและตั้งแคมป์ ออกแบบโครงสร้างรูปโดมไขว้แบบ Double Wall ระบายอากาศดีเยี่ยม ป้องกันหยดน้ำค้างเกาะด้านใน เนื้อผ้า Ripstop Nylon เคลือบซิลิโคนกันน้ำระดับ 3,000 มม. เสาอะลูมิเนียมเกรดอากาศยาน 7001 ทนทานต่อแรงลมกรรโชกบนยอดดอย เหมาะกับทุกสภาพอากาศในเมืองไทย',
      features: [
        'โครงเสาอะลูมิเนียมเกรดอากาศยาน 7001 แข็งแกร่ง ทนลมแรงสูง',
        'ผ้าฟลายชีท 20D Ripstop Nylon เคลือบกันน้ำ 3,000 มม. ซีลเทปกันน้ำทุกตะเข็บ',
        'ระบบ Double Wall พร้อมมุ้ง B3 Mesh ระบายอากาศรอบทิศทาง ไม่อับชื้น',
        'มีระเบียงหน้าเต็นท์สำหรับเก็บเป้และรองเท้าในที่ร่ม ป้องกันน้ำค้าง',
        'สมอบกน้ำหนักเบา 10 ตัว พร้อมเชือก Guy-line สะท้อนแสงในเวลากลางคืน'
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
      colors: [
        {
          key: 'olive',
          label: 'เขียวมะกอก (Olive)',
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
      reviews: [
        {
          author: 'คุณอนนต์ ภักดี',
          location: 'ดอยหลวงเชียงดาว',
          rating: 5,
          date: '14 ม.ค. 2026',
          text: 'นำไปกางที่ดอยหลวงเชียงดาว ลมกรรโชกแรงมากจนเต็นท์รอบข้างเริ่มพับ แต่เต็นท์หลังนี้โครงเสา 7001 เอาอยู่สบาย น้ำหนักเบาช่วยให้แบกขึ้นดอยได้ไม่ทรมาน'
        },
        {
          author: 'คุณธีรวัฒน์ เก่งกาจ',
          location: 'ภูสอยดาว',
          rating: 5,
          date: '28 ก.พ. 2026',
          text: 'เจอมรสุมฝนตกหนักทั้งคืนบนลานสนภูสอยดาว ไม่มีน้ำซึมเข้าเต็นท์แม้แต่หยดเดียว พื้นเต็นท์หนากันน้ำดีมาก แนะนำเลยครับ'
        },
        {
          author: 'คุณปิยพร ภูมิพัฒน์',
          location: 'เขาหลวงสุโขทัย',
          rating: 5,
          date: '03 มี.ค. 2026',
          text: 'กางคนเดียวได้สบายมาก เสาเต็นท์ต่อกันง่าย สีเขียวมะกอกกลมกลืนกับธรรมชาติ ถ่ายรูปออกมาสวยพรีเมียมมากค่ะ'
        }
      ]
    },
    {
      id: 'prod-2',
      slug: 'backpack-45l',
      name: 'เป้เดินป่า Summit Ridge 45L',
      price: 2490,
      compareAtPrice: 2990,
      category: 'เป้และเครื่องแต่งกาย',
      rating: 4.8,
      reviewCount: 95,
      shortDesc: 'เป้เดินป่า 45 ลิตร โครงหลัง AirMesh ถ่ายน้ำหนักลงสะโพก ผ้า Cordura 420D ทนการขูดขีด',
      description: 'เป้เดินป่าระยะทางปานกลางถึงระยะไกล ขนาด 45 ลิตร ระบบกระจายน้ำหนัก Ergonomic Hip Belt ช่วยถ่ายน้ำหนักลงสู่สะโพกได้ถึง 70% ลดอาการเมื่อยล้าบ่าและหลัง แผ่นหลังตาข่ายยกตัว AirFlow ช่วยให้อากาศถ่ายเทหลังแห้งสบายตลอดการเดินทาง มีช่องใส่ถุงน้ำดื่ม สายรัดไม้เท้า และ Rain Cover ในตัว',
      features: [
        'โครงสร้างหลัง Ergonomic แขวนลอยตาข่าย AirFlow ระบายอากาศลดเหงื่อสะสม',
        'สายสะพายไหล่และสายรัดสะโพกบุฟองน้ำหนานุ่ม กระจายน้ำหนักได้สมดุล',
        'ช่องเปิดหลักเข้าถึงได้จากทั้งด้านบนและซิปด้านหน้า (Front Access) หยิบของง่าย',
        'สายรัดไม้เท้าเดินป่า (Trekking Pole Loops) และสายรัดเต็นท์ด้านล่างแข็งแรง',
        'แถมฟรีผ้าคลุมกันฝน (Rain Cover) เคลือบกันน้ำ 2,000 มม. ในช่องก้นเป้'
      ],
      specs: {
        'ความจุ': '45 ลิตร (+5 ลิตร Top Lid ขยายได้)',
        'น้ำหนัก': '1.28 กก.',
        'ขนาด': '62 x 32 x 24 ซม.',
        'วัสดุหลัก': 'Cordura 420D Ripstop Nylon ทนทานต่อการเสียดสี',
        'รองรับน้ำหนักบรรทุก': '15 - 18 กก.'
      },
      colors: [
        {
          key: 'olive',
          label: 'เขียวมะกอก (Olive)',
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
      reviews: [
        {
          author: 'คุณฟ้าใส ฤทัยวัลย์',
          location: 'ภูกระดึง & โมโกจู',
          rating: 5,
          date: '20 ม.ค. 2026',
          text: 'เป้ Summit Ridge 45L โครงหลังระบายอากาศยอดเยี่ยมมาก ตอนเดินขึ้นภูกระดึงเหงื่อไม่ชุ่มหลังเลย กระจายน้ำหนักได้ดีมากไม่เจ็บช่วงบ่า คุ้มค่าเกินราคาจริง ๆ'
        },
        {
          author: 'คุณวรเมธ เอกปรีชา',
          location: 'สันหนอกวัว',
          rating: 5,
          date: '10 ก.พ. 2026',
          text: 'จุของได้จุใจมาก ช่อง Front Access ช่วยชีวิตเวลาต้องการหยิบเสื้อกันหนาวโดยไม่ต้องรื้อของทั้งหมด ผ้า Cordura ทนกิ่งไม้ขูดขีดได้ดีเยี่ยม'
        },
        {
          author: 'คุณกานดา รักษ์ป่า',
          location: 'ดอยม่อนจอง',
          rating: 4,
          date: '01 มี.ค. 2026',
          text: 'สีเขียวมะกอกสวยมากค่ะ สายรัดเอวปรับได้กระชับตัวพอดี เหมาะกับสรีระคนเอเชีย แนะนำเลยค่ะ'
        }
      ]
    },
    {
      id: 'prod-3',
      slug: 'sleeping-bag',
      name: 'ถุงนอนขนเป็ด AeroDown 650FP',
      price: 1590,
      compareAtPrice: 1990,
      category: 'เต็นท์และที่พักแรม',
      rating: 4.9,
      reviewCount: 214,
      shortDesc: 'ถุงนอนมัมมี่ทรงกระชับ ขนเป็ด 650FP ป้องกันความเย็นได้ถึง 5°C น้ำหนักเบาเพียง 900 กรัม',
      description: 'ถุงนอนขนเป็ดทรงมัมมี่ (Mummy Style) อัตราส่วนขนเป็ด 90/10 Fill Power 650 กักเก็บความร้อนได้ดีเยี่ยม อุณหภูมิคอมฟอร์ต 5°C เหมาะสำหรับดอยอินทนนท์ ดอยหลวงเชียงดาว หรือภูสอยดาว เนื้อผ้า 380T Nylon นุ่มสบายผิว กันละอองน้ำและระบายความชื้นได้ดี',
      features: [
        'ฉนวนขนเป็ดแท้ 650 Fill Power กักเก็บความอบอุ่นได้ดีเยี่ยม',
        'ช่วงอุณหภูมิ Comfort 5°C / Limit 0°C / Extreme -5°C',
        'ฮู้ดพร้อมเชือกรูดกระชับศีรษะ ป้องกันลมเย็นเข้าคอ',
        'ซิป YKK 2 ทิศทาง พร้อมแถบกันซิปรูดกินเนื้อผ้า',
        'แถมถุง Compression Sack อัดเก็บให้มีขนาดกะทัดรัด'
      ],
      specs: {
        'น้ำหนัก': '900 กรัม',
        'อุณหภูมิ': 'Comfort 5°C / Limit 0°C',
        'ขนาดกาง': '210 x 80 x 50 ซม.',
        'ขนาดพับเก็บ': '32 x 18 ซม.',
        'วัสดุผ้า': '380T Water-resistant Ripstop Nylon',
        'วัสดุภายใน': 'Duck Down 90/10 (650FP 450g)'
      },
      colors: [
        {
          key: 'navy',
          label: 'กรมท่า (Navy)',
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
      reviews: [
        {
          author: 'คุณณัฐพัชร์ ชื่นจิต',
          location: 'ภูทับเบิก',
          rating: 5,
          date: '05 ม.ค. 2026',
          text: 'อุณหภูมิตอนตีสอง 6 องศา นอนอุ่นสบายมาก ขนเป็ดนุ่มฟู ไม่เหม็นสาบ พับเก็บแล้วเล็กกะทัดรัดใส่ก้นเป้ได้พอดี'
        },
        {
          author: 'คุณชลธิชา ประเสริฐ',
          location: 'ดอยอินทนนท์',
          rating: 5,
          date: '18 ม.ค. 2026',
          text: 'น้ำหนักเบามากเมื่อเทียบกับความอุ่น ผิวด้านในนุ่มไม่เหนียวตัวแม้มีเหงื่อเล็กน้อย คุ้มค่าที่สุดสำหรับสาย Ultralight'
        },
        {
          author: 'คุณสมภพ พิทักษ์',
          location: 'ห้วยน้ำดัง',
          rating: 5,
          date: '12 ก.พ. 2026',
          text: 'ซิปรูดลื่นไม่ติดผ้า มีแถบกั้นลมเย็นตลอดแนวซิป ประทับใจมากครับ'
        }
      ]
    },
    {
      id: 'prod-4',
      slug: 'windbreaker',
      name: 'แจ็กเก็ตกันลมพายุ AlpineStorm 3L',
      price: 1890,
      compareAtPrice: 2290,
      category: 'เป้และเครื่องแต่งกาย',
      rating: 4.8,
      reviewCount: 82,
      shortDesc: 'แจ็กเก็ตกันลมและฝน 3-Layer Membrane น้ำหนักเบา ระบายเหงื่อ 10,000g พับเก็บเล็กเท่าฝ่ามือ',
      description: 'เสื้อแจ็กเก็ตเทคนิคอลสำหรับสภาพอากาศแปรปรวนบนภูเขา โครงสร้างผ้า 3 ชั้น พร้อมเทคโนโลยีเมมเบรนกันน้ำ 15,000 มม. และอัตราการระบายไอน้ำ 10,000 g/m²/24h ซีลเทปกันน้ำทุกตะเข็บ มีช่องซิปเปิดใต้รักแร้เพื่อระบายอากาศเมื่อเดินขึ้นทางชัน ฮู้ดปรับกระชับรอบทิศทาง',
      features: [
        'เนื้อผ้า 3-Layer Technical Fabric กันน้ำ 15,000 มม.',
        'อัตราการระบายเหงื่อ 10,000 g/m²/24h ไม่อบอ้าว',
        'ตะเข็บซีลกันน้ำสมบูรณ์แบบ 100% Fully Seam Sealed',
        'ซิปกันน้ำ YKK AquaGuard และซิประบายอากาศใต้แขน Pit Zips',
        'พับม้วนเก็บในกระเป๋าหน้าอกได้ พกพาสะดวก นน. เพียง 340 กรัม'
      ],
      specs: {
        'น้ำหนัก': '340 กรัม (ไซซ์ L)',
        'ความสามารถกันน้ำ': '15,000 มม. เสาน้ำ',
        'การระบายอากาศ': '10,000 g/m²/24hr',
        'วัสดุผ้า': '100% Recycled Nylon Ripstop with DWR',
        'ทรงเสื้อ': 'Regular Outdoor Fit (สวมทับเลเยอร์ได้)'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
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
      reviews: [
        {
          author: 'คุณพงศกร เด่นดวง',
          location: 'ดอยปุย เชียงใหม่',
          rating: 5,
          date: '22 ม.ค. 2026',
          text: 'กันลมได้ 100% เลยครับ ตอนเดินสันเขาที่ลมแรงมาก ตัวไม่สะท้านเลย ซิปใต้แขนช่วยระบายความร้อนได้ดีมากเวลาเหงื่อออก'
        },
        {
          author: 'คุณนภัสสร ศรีสว่าง',
          location: 'น้ำตกปิตุ๊โกร',
          rating: 5,
          date: '04 ก.พ. 2026',
          text: 'ใส่เดินลุยละอองน้ำตกและฝนปรอย ๆ น้ำกลิ้งเป็นหยดบนผิวผ้าเลยค่ะ แห้งไวมาก ทรงเสื้อสวยดูทะมัดทะแมง'
        },
        {
          author: 'คุณเอกพล เจริญชัย',
          location: 'เขาช้างเผือก',
          rating: 4,
          date: '25 ก.พ. 2026',
          text: 'เนื้อผ้าทนทานมาก กิ่งไม้ขูดไม่เป็นรอย ไซซ์ L สวมทับฟลีซข้างในได้กำลังดีครับ'
        }
      ]
    },
    {
      id: 'prod-5',
      slug: 'camp-stove',
      name: 'เตาแคมป์พกพา UltraLite Titanium',
      price: 890,
      compareAtPrice: null,
      category: 'อุปกรณ์ทำอาหารและยังชีพ',
      rating: 4.9,
      reviewCount: 142,
      shortDesc: 'เตาแก๊สพกพาน้ำหนักเบาพิเศษ ขาพับได้ กำลังไฟ 3,200W ต้มน้ำเดือดใน 3 นาที',
      description: 'เตาแก๊สเดินป่าขนาดเล็กพิเศษ ผลิตจากอะลูมิเนียมอัลลอยด์และสเตนเลสสตีลคุณภาพสูง ขาตั้งหม้อ 4 ขาพับเก็บได้แข็งแรง รองรับหม้อสนามขนาด 1-3 คน หัวเตาเปลวไฟวนต้านลม ให้ความร้อนสม่ำเสมอ ประหยัดแก๊ส พร้อมวาล์วปรับระดับไฟที่ละเอียดแม่นยำ',
      features: [
        'กำลังไฟแรงสูง 3,200W ต้มน้ำ 1 ลิตรเดือดใน 3 นาที 20 วินาที',
        'หัวเตาออกแบบเปลวไฟวน (Rotary Flame) ต้านทานลมกระโชก',
        'พับเก็บได้เล็กกะทัดรัดขนาดเท่าฝ่ามือ พกพาสะดวก',
        'วาล์วปรับไฟแบบไมโครคอนโทรล ควบคุมไฟอ่อน-แรงได้แม่นยำ',
        'มาพร้อมกล่องฮาร์ดเคสสำหรับจัดเก็บ ป้องกันการกระแทก'
      ],
      specs: {
        'น้ำหนัก': '85 กรัม',
        'กำลังไฟ': '3,200 วัตต์ (11,000 BTU)',
        'ขนาดกาง': '15 x 15 x 8 ซม.',
        'ขนาดพับเก็บ': '4 x 5 x 8 ซม.',
        'ชนิดแก๊สที่รองรับ': 'แก๊สซาลาเปาเกลียวสากล (Lindal Valve)',
        'วัสดุ': 'Stainless Steel, Copper, Aluminum Alloy'
      },
      colors: [
        {
          key: 'silver',
          label: 'เงินเมทัลลิก (Silver)',
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
      reviews: [
        {
          author: 'คุณวีระศักดิ์ มั่นคง',
          location: 'ดอยผ้าห่มปก',
          rating: 5,
          date: '02 ก.พ. 2026',
          text: 'ไฟแรงสม่ำเสมอมากครับ บนยอดดอยที่อากาศหนาวและลมแรงยังต้มกาแฟเดือดเร็วทันใจ ขนาดเล็กเบามากจนแทบไม่รู้สึกว่าพกมา'
        },
        {
          author: 'คุณมณฑา ยิ่งเจริญ',
          location: 'แก่งกระจาน',
          rating: 5,
          date: '15 ก.พ. 2026',
          text: 'ขาเตากางออกมามั่นคงดีมาก วางกระทะสนามขนาดกลางได้นิ่ง วาล์วปรับไฟหรี่ได้เนียนไม่ดับง่าย'
        },
        {
          author: 'คุณจิรายุ ธนบูรณ์',
          location: 'คลองลาน กำแพงเพชร',
          rating: 5,
          date: '27 ก.พ. 2026',
          text: 'กล่องเก็บแข็งแรงดีมาก ทนทานคุ้มราคาครับ'
        }
      ]
    },
    {
      id: 'prod-6',
      slug: 'headlamp',
      name: 'ไฟฉายคาดหัว NightTrail 800LM',
      price: 690,
      compareAtPrice: 850,
      category: 'อุปกรณ์ทำอาหารและยังชีพ',
      rating: 4.8,
      reviewCount: 167,
      shortDesc: 'ไฟฉายคาดหัวความสว่าง 800 ลูเมน ชาร์จ USB-C กันน้ำ IPX6 ส่องไกล 120 เมตร',
      description: 'ไฟฉายคาดหัวสำหรับการเดินป่าตอนกลางคืนและตั้งแคมป์ หลอด LED CREE คุณภาพสูง ให้แสงสีขาวธรรมชาติและแสงสีแดงสำหรับอ่านแผนที่ไม่รบกวนสายตา แบตเตอรี่ลิเธียมไอออนในตัวชาร์จเร็วผ่านพอร์ต USB-C ปรับมุมก้ม-เงยได้ 60 องศา สายคาดศีรษะระบายเหงื่อได้ดี',
      features: [
        'ความสว่างสูงสุด 800 Lumens ส่องไกลถึง 120 เมตร',
        'โหมดแสง 5 ระดับ: High, Med, Low, Red Light, SOS',
        'มาตรฐานกันน้ำและละอองฝนระดับ IPX6 ทนทุกสภาพอากาศ',
        'แบตเตอรี่ในตัว 1,800mAh ชาร์จด้วย USB-C ใช้งานได้ยาวนานถึง 36 ชม.',
        'หัวไฟฉายปรับก้ม-เงยได้ 60 องศา ส่องสว่างตรงจุดที่ต้องการ'
      ],
      specs: {
        'น้ำหนัก': '72 กรัม (รวมสายรัดศีรษะ)',
        'ความสว่าง': '800 Lumens',
        'ระยะลำแสง': 'สูงสุด 120 เมตร',
        'แบตเตอรี่': 'Li-ion 1,800mAh ในตัว (ชาร์จ USB-C)',
        'ระยะเวลาใช้งาน': '4 - 36 ชั่วโมง (ตามโหมด)'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
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
      reviews: [
        {
          author: 'คุณกิตติศักดิ์ พลอยดี',
          location: 'เขาหลวงนครศรีธรรมราช',
          rating: 5,
          date: '11 ม.ค. 2026',
          text: 'เดินเทรคกลางคืนสว่างมาก ลำแสงพุ่งไกลเห็นเส้นทางชัดเจน แบตเตอรี่อึดจริง ชาร์จไฟด้วยพาวเวอร์แบงค์สะดวกมาก'
        },
        {
          author: 'คุณพิมลวรรณ สุขสม',
          location: 'ภูสอยดาว',
          rating: 5,
          date: '19 ม.ค. 2026',
          text: 'โหมดแสงสีแดงมีประโยชน์มากเวลาอยู่ในเต็นท์ ไม่แยงตาเพื่อนร่วมทริป น้ำหนักเบาใส่แล้วไม่ปวดหน้าผาก'
        },
        {
          author: 'คุณชัชชัย แซ่ตั้ง',
          location: 'ดอยเชียงดาว',
          rating: 4,
          date: '16 ก.พ. 2026',
          text: 'ปุ่มกดเปิดปิดตอบสนองดีแม้ใส่ถุงมือเดินป่า แนะนำสีส้มมองเห็นง่ายเวลาวางในเต็นท์ครับ'
        }
      ]
    },
    {
      id: 'prod-7',
      slug: 'camp-chair',
      name: 'เก้าอี้พับแคมป์ FeatherSeat Pro',
      price: 1290,
      compareAtPrice: 1590,
      category: 'เต็นท์และที่พักแรม',
      rating: 4.7,
      reviewCount: 78,
      shortDesc: 'เก้าอี้พับพกพา โครงอะลูมิเนียมเกรด 7075 รองรับน้ำหนักได้ถึง 140 กก. น้ำหนักเพียง 980 กรัม',
      description: 'เก้าอี้พับน้ำหนักเบาสำหรับการแคมปิ้งและเดินป่า โครงสร้างเสา Shock-cord อะลูมิเนียม 7075 กางประกอบง่ายใน 30 วินาที ผ้าเบาะ 600D Oxford ทนทานพร้อมแถบผ้าตาข่ายระบายอากาศด้านหลัง นั่งสบายไม่ร้อน พับเก็บแล้วมีขนาดกะทัดรัดใส่ช่องข้างเป้ได้สบาย',
      features: [
        'โครงสร้างเสา 7075 Aviation Aluminum แข็งแกร่งแต่น้ำหนักเบา',
        'รับน้ำหนักได้สูงสุดถึง 140 กิโลกรัม ผ่านการทดสอบความทนทาน',
        'ผ้าเก้าอี้ 600D Oxford เคลือบกันน้ำ ทนการฉีกขาด',
        'ตาข่ายระบายอากาศ Breathable Mesh ด้านหลังนั่งสบายไม่ร้อน',
        'มีช่องตาข่ายด้านข้างสำหรับวางขวดน้ำหรือโทรศัพท์'
      ],
      specs: {
        'น้ำหนัก': '980 กรัม',
        'รับน้ำหนักสูงสุด': '140 กก.',
        'ขนาดเมื่อกาง': '56 x 65 x 68 ซม. (ความสูงที่นั่ง 35 ซม.)',
        'ขนาดพับเก็บ': '36 x 12 x 10 ซม.',
        'วัสดุโครง': '7075 Aluminum Alloy',
        'วัสดุผ้า': '600D Ripstop Polyester + Mesh'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
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
      reviews: [
        {
          author: 'คุณธนกฤต ชัยวารี',
          location: 'เจ็ดคต-โป่งก้อนเส้า',
          rating: 5,
          date: '08 ก.พ. 2026',
          text: 'นั่งสบายมากครับ โครงเก้าอี้หนาแน่นมั่นคงไม่ง่อนแง่น พับเก็บแล้วเล็กนิดเดียวพกไปไหนมาไหนสะดวกมาก'
        },
        {
          author: 'คุณศศิธร พานิช',
          location: 'ปางอุ๋ง แม่ฮ่องสอน',
          rating: 5,
          date: '14 ก.พ. 2026',
          text: 'ผ้าเหนียวทนทาน ตาข่ายด้านหลังช่วยระบายอากาศ นั่งชมหมอกริมอ่างเก็บน้ำเพลินเลยค่ะ'
        },
        {
          author: 'คุณปิยะ เจนวิทยา',
          location: 'เขาใหญ่',
          rating: 4,
          date: '01 มี.ค. 2026',
          text: 'ประกอบและเก็บง่ายมาก มีช่องใส่ขวดน้ำด้านข้างสะดวกดีครับ'
        }
      ]
    },
    {
      id: 'prod-8',
      slug: 'water-bottle',
      name: 'กระบอกน้ำสุญญากาศ ThermoTrail 750ml',
      price: 590,
      compareAtPrice: null,
      category: 'อุปกรณ์ทำอาหารและยังชีพ',
      rating: 4.9,
      reviewCount: 189,
      shortDesc: 'กระบอกน้ำเก็บอุณหภูมิ สเตนเลส 304 เก็บเย็น 24 ชม. ร้อน 12 ชม. เคลือบสีเพาเดอร์โค้ท',
      description: 'กระบอกน้ำเก็บอุณหภูมิสุญญากาศ 2 ชั้น (Double-Wall Vacuum Insulation) ผลิตจากสเตนเลสเกรดอาหาร 18/8 (SUS 304) ปราศจากสารก่อมะเร็ง BPA-Free ฝาเกลียวป้องกันการรั่วซึม 100% พร้อมหูหิ้วซิลิโคนเหนียวทนทาน ภายนอกพ่นเคลือบสี Powder-Coated กันลื่นจับกระชับมือ',
      features: [
        'เทคโนโลยีฉนวนสุญญากาศ เก็บความเย็นได้ 24 ชม. และความร้อน 12 ชม.',
        'ผลิตจาก Food-Grade 18/8 Stainless Steel ปลอดสาร BPA 100%',
        'ผิวสัมผัส Powder Coating กันรอยขีดข่วน ไม่ลื่นหลุดมือง่าย',
        'ฝาเกลียวกันรั่วซึม Leak-Proof 100% พร้อมหูหิ้วพกพาสะดวก',
        'ปากกระบอกกว้าง ใส่น้ำแข็งได้ง่ายและล้างทำความสะอาดสะดวก'
      ],
      specs: {
        'ความจุ': '750 มล. (25 ออนซ์)',
        'น้ำหนัก': '360 กรัม',
        'ขนาด': '26 x 7.5 ซม.',
        'ประสิทธิภาพ': 'เก็บเย็น 24 ชม. / เก็บความร้อน 12 ชม.',
        'วัสดุ': 'Food Grade 18/8 (SUS 304) Stainless Steel'
      },
      colors: [
        {
          key: 'black',
          label: 'ดำด้าน (Black)',
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
      reviews: [
        {
          author: 'คุณดนัย เกียรติสุข',
          location: 'ทริปวิ่งเทรลเขาสมอคอน',
          rating: 5,
          date: '17 ม.ค. 2026',
          text: 'ใส่น้ำแข็งเดินขึ้นเขาตั้งแต่เช้า บ่ายแก่ ๆ น้ำแข็งยังละลายไม่หมดเลยครับ ฝาปิดสนิทน้ำไม่หกเลอะเทอะในเป้'
        },
        {
          author: 'คุณพัชรินทร์ วงศ์แก้ว',
          location: 'ดอยลังกาหลวง',
          rating: 5,
          date: '02 ก.พ. 2026',
          text: 'สีเขียวเสจสวยถูกใจมาก ผิวเคลือบแมตต์จับถนัดมือไม่ลื่น หูหิ้วแข็งแรงเกี่ยวคาราบิเนอร์ติดเป้ได้เลย'
        },
        {
          author: 'คุณกฤษณะ บุญส่ง',
          location: 'อุทยานฯ ไทรโยค',
          rating: 5,
          date: '21 ก.พ. 2026',
          text: 'สเตนเลสคุณภาพสูง ไม่มีกลิ่นโลหะติดน้ำดื่ม ทำความสะอาดง่ายมากครับ'
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

  // Export
  window.WILDTRAIL_PRODUCTS = PRODUCTS;
  window.getProductBySlug = getProductBySlug;
  window.getProductById = getProductById;
  window.getRelatedProducts = getRelatedProducts;

  if (window.WILDTRAIL) {
    window.WILDTRAIL.products = PRODUCTS;
    window.WILDTRAIL.getProductBySlug = getProductBySlug;
    window.WILDTRAIL.getProductById = getProductById;
    window.WILDTRAIL.getRelatedProducts = getRelatedProducts;
  }

})(window);
