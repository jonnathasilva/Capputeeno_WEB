export interface Item {
  img: string;
  title: string;
  price: string;
  description: string;
  category: string;
  _id: string;
}

export interface Product {
  currentItens: Item[];
  page: number;
}
