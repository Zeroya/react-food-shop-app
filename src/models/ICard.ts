export interface ICard {
  createdAt: string;
  name: string;
  image: string;
  description: string;
  price: string;
  popularity: number;
  country: string;
  possibleUnits: Array<string>;
  shoppingListUnits: Array<string>;
  aisle: string;
  categoryPath: Array<string>;
  fresheness: string;
  farm: string;
  delivery: string;
  stock: string;
  reviews: Array<string>;
  questions: Array<string>;
  discount: number;
  id: string;
}

export interface IDropDown {
  tag: string;
  menu: Array<{
    label: string;
    key: string;
  }>;
}
