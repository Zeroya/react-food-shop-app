import { ICard } from "@models/ICard";
import { calcDiscountPrice } from "./calcDiscountPrice";
import { SortCondition, SortByNumbers, SortByStrings } from "@models/Enums";
import { sortObj } from "@models/ICard";

export const sortCardsFunc = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return sortByStrings(sortByNumbers(sortByPrice(cards, sortValues), sortValues), sortValues);
};

export const sortByPrice = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortCondition.price) && !sortValues.checked
    ? cards.sort(
        (a: ICard, b: ICard) =>
          Number(calcDiscountPrice(a.price, a.discount)) - Number(calcDiscountPrice(b.price, b.discount))
      )
    : !sortValues.name.slice(1).localeCompare(SortCondition.price) && sortValues.checked
    ? cards.sort(
        (a: ICard, b: ICard) =>
          Number(calcDiscountPrice(b.price, b.discount)) - Number(calcDiscountPrice(a.price, a.discount))
      )
    : cards;
};

export const sortByNumbers = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortByNumbers[sortValues.value as keyof typeof SortByNumbers]) &&
    !sortValues.checked
    ? cards.sort(
        (a: ICard, b: ICard) => Number(a[sortValues.value as keyof ICard]) - Number(b[sortValues.value as keyof ICard])
      )
    : !sortValues.name.slice(1).localeCompare(SortByNumbers[sortValues.value as keyof typeof SortByNumbers]) &&
      sortValues.checked
    ? cards.sort(
        (a: ICard, b: ICard) => Number(b[sortValues.value as keyof ICard]) - Number(a[sortValues.value as keyof ICard])
      )
    : cards;
};

export const sortByStrings = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortByStrings[sortValues.value as keyof typeof SortByStrings]) &&
    !sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => {
        const el1 = String(a[sortValues.value as keyof ICard]);
        const el2 = String(b[sortValues.value as keyof ICard]);
        return el1.localeCompare(el2);
      })
    : !sortValues.name.slice(1).localeCompare(SortByStrings[sortValues.value as keyof typeof SortByStrings]) &&
      sortValues.checked
    ? cards
        .sort((a: ICard, b: ICard) => {
          const el1 = String(a[sortValues.value as keyof ICard]);
          const el2 = String(b[sortValues.value as keyof ICard]);
          return el1.localeCompare(el2);
        })
        .reverse()
    : cards;
};
