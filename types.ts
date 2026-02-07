
export type Category = 'kits' | 'rangos' | 'comandos' | 'keys';

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number;
  image: string;
  description?: string;
  details?: {
    armor?: string[];
    tools?: string[];
    extras?: string[];
    benefits?: string[];
    summary?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}
