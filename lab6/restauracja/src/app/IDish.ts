export interface Dish {
  id: number;
  name: string;
  type: string;
  category: string;
  ingredients: string;
  maxperday: number;
  price: number;
  shortdesc: string;
  imagelink: string[];
  currency: string;
  likes: number;
  dislikes: number;
}
