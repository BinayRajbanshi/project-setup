export type productType = {
    _id:string,
    name: string;
  image: string;
  description: string;
  features: string[];
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export type cartItemT = {
  _id:string,
  name: string;
  image: string;
  brand: string;
  price: number;
  quantity:number;
}