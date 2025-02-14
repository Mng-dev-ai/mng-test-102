export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export type Category = {
  id: string;
  name: string;
  description: string;
}