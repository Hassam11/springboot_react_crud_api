export interface Product {
  id?: number;
  name?: string;
  description?: string;
  url_image?: string;
  stock?: number;
  price?: number;
}

export interface CardItemProps {
  id: number;
  name: string;
  description: string;
  url_image: string;
  stock: number;
  price: number;
}
