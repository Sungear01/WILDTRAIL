export interface Product {
  id: string;
  name: string;
  category: 'tent' | 'sleeping' | 'backpack' | 'kitchen' | 'light' | 'furniture' | 'clothing';
  categoryLabel: string;
  specs: string;
  price: number;
  originalPrice?: number;
  highlight: string;
  description: string;
  features: string[];
  weight: string;
  dimension: string;
  material: string;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  imageType: 'tent' | 'sleeping' | 'backpack' | 'stove' | 'lamp' | 'chair' | 'jacket';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface TrailRoute {
  id: string;
  name: string;
  location: string;
  elevation: string;
  distance: string;
  difficulty: 'ง่าย' | 'ปานกลาง' | 'ท้าทาย';
  bestSeason: string;
  description: string;
  requiredGear: string[];
  duration: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  gearUsed: string;
  rating: number;
  date: string;
  comment: string;
  trailTested: string;
}
