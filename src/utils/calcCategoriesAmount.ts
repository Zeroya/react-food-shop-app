import { ICard } from "@models/ICard";

export const calcCategoriesAmount = (data: Array<ICard>, categoryName: string): number => {
  return data.reduce(
    (total, value) =>
      value.categoryPath.some((el) => el === categoryName.toLocaleLowerCase()) ? total + 1 : total + 0,
    0
  );
};
