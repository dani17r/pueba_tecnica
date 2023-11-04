export interface ProductI {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: {
    count: number;
    rate: number;
  };
  quantity?: number;
}
