interface Item {
  img: string;
  title: string;
  price: string;
  description: string;
  category: string;
  _id: string;
}

export interface Cart {
  product: Item[];
  userId: string;
}
