
export interface Product {
  id: string;
  name: string;
  description: string;
  startingPrice: string;
  image?: string;
  isPersonalizable?: boolean;
  type?: 'clothing' | 'footwear' | 'accessoires' | 'pack';
  category?: string;
}
