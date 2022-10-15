import { ICard } from "@models/ICard";

export const findMinMaxPrice = (data: Array<ICard>): Array<number> => {
  return data
    .map((el) => Number(el.price))
    .sort((a, b) => a - b)
    .filter((el, i, arr) => i === 0 || el === arr[arr.length - 1]);
};
