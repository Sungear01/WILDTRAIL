export interface Product {
  id: string;
  name: string;
  category: 'tent' | 'sleeping' | 'backpack' | 'clothing' | 'kitchen' | 'light' | 'furniture';
  categoryLabel: string;
  specs: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  weight: string;
  material: string;
}

export const BEST_SELLER_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'เต็นท์โดม 2 คน',
    category: 'tent',
    categoryLabel: 'เต็นท์เดินป่า',
    specs: 'กันน้ำ 3,000 มม. · เสาอะลูมิเนียม 7001',
    price: 3290,
    originalPrice: 3890,
    description: 'เต็นท์โดมน้ำหนักเบาพิเศษ โครงเสาอะลูมิเนียมเกรดอากาศยาน 7001 ทนลมแรงยอดดอย ผ้าฟลายชีท 20D ไนลอนเคลือบซิลิโคน ระบายอากาศยอดเยี่ยม กันฝนหนักได้ 100%',
    features: [
      'เสาเต็นท์อะลูมิเนียม 7001 หนา 8.5 มม. ทนลมกระโชกแรง',
      'ผ้าฟลายชีท 20D Ripstop Silicone PU 3,000 มม.',
      'พื้นเต็นท์ 40D ไนลอนเคลือบกันน้ำ 5,000 มม.',
      'สมอบกอะลูมิเนียมรูปตัว Y 10 ตัว พร้อมเชือกสะท้อนแสง'
    ],
    weight: '1.95 กก.',
    material: '20D Ripstop Nylon + Silicone PU',
  },
  {
    id: 'prod-2',
    name: 'ถุงนอน 5°C',
    category: 'sleeping',
    categoryLabel: 'ถุงนอน & ที่นอน',
    specs: 'น้ำหนัก 900 ก. · ขนเป็ด 650 Fill Power',
    price: 1590,
    originalPrice: 1990,
    description: 'ถุงนอนรูปมัมมี่อุ่นสบาย ผลิตจากขนเป็ดแท้ 650 Fill Power หุ้มด้วยผ้าไนลอนกันละอองน้ำ 380T ขนาดกะทัดรัด บีบอัดเก็บได้เล็กเท่าฝ่ามือ พกพาสะดวกสำหรับเดินป่าระยะไกล',
    features: [
      'ฉนวนขนเป็ดขาวธรรมชาติ 650 Fill Power กักเก็บความร้อนสูง',
      'เปลือกนอก 380T 20D ไนลอน เคลือบ DWR กันละอองน้ำ',
      'ซิป YKK สองทาง รูดระบายอากาศช่วงเท้าได้',
      'แถมถุงบีบอัด Compression Sack พกพาสะดวก'
    ],
    weight: '900 กรัม',
    material: 'Duck Down 650FP + 380T Nylon',
  },
  {
    id: 'prod-3',
    name: 'เป้ 45L',
    category: 'backpack',
    categoryLabel: 'เป้เดินป่า',
    specs: 'มีโครงรับหลัง AirMesh · ผ้า Cordura 420D',
    price: 2490,
    originalPrice: 2990,
    description: 'เป้เดินทางไกลความจุ 45 ลิตร พร้อมโครงหลังอะลูมิเนียมน้ำหนักเบา ช่วยกระจายน้ำหนักลงสู่สะโพก ลดอาการปวดเมื่อยไหล่ แผ่นหลังตาข่ายยกสูงระบายเหงื่อได้ดีเยี่ยม',
    features: [
      'โครงหลังอะลูมิเนียม Ergonomic Suspended Frame',
      'สายสะพายหนานุ่มพร้อมสายรัดหน้าอกและเข็มขัดสะโพกแบบมีช่องซิป',
      'ช่องหลักเปิดได้ทั้งด้านบนและด้านหน้า หยิบของง่าย',
      'แถมฟรีผ้าคลุมกันฝน (Rain Cover) สะท้อนแสงในตัว'
    ],
    weight: '1.28 กก.',
    material: '420D High-density Ripstop Cordura Nylon',
  },
  {
    id: 'prod-4',
    name: 'แจ็กเก็ตกันลม',
    category: 'clothing',
    categoryLabel: 'เสื้อผ้าเอาท์ดอร์',
    specs: 'กันน้ำ 15,000 มม. · ระบายอากาศ 10,000g',
    price: 1890,
    originalPrice: 2290,
    description: 'เสื้อกันลมกันฝนเทคโนโลยี 3-Layer Membrane ออกแบบมาเพื่อรับมือสภาพอากาศแปรปรวนบนยอดดอย น้ำหนักเบา ตะเข็บซีลเทปกันน้ำทั้งตัว มีช่องซิปใต้แขนระบายเหงื่อ',
    features: [
      'ผ้า 3 ชั้น 100% กันน้ำระดับ 15,000mm H2O',
      'ค่าการระบายอากาศ 10,000g/m²/24h ป้องกันเหงื่อสะสม',
      'ฮู้ดปรับขนาดได้ 3 ทิศทาง รองรับการใส่หมวกกันน็อก',
      'ซิปกันน้ำ YKK AquaGuard และกระเป๋าเก็บของความจุสูง'
    ],
    weight: '340 กรัม',
    material: '3-Layer Ripstop Nylon Membrane',
  },
];
