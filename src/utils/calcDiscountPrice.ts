import { ICard } from "@models/ICard";

export const calcDiscountPrice = (price: string, discount: number): string => {
  return (Number(price) - (Number(price) / 100) * discount).toFixed(2);
};

export const calcDiscountPriceAll = (data: Array<ICard>): Array<ICard> => {
  return data.map((el) => ({ ...el, price: (Number(el.price) - (Number(el.price) / 100) * el.discount).toFixed(2) }));
};
