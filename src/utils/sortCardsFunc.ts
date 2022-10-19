import { ICard } from "@models/ICard";
import { calcDiscountPrice } from "./calcDiscountPrice";
import { SortCondition } from "@models/Enums";
import { sortObj } from "@models/ICard";

export const sortCardsFunc = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return sortByStocks(
    sortByDelivery(
      sortByStars(sortByTitle(sortByDiscount(sortByPrice(cards, sortValues), sortValues), sortValues), sortValues),
      sortValues
    ),
    sortValues
  );
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

export const sortByDiscount = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortCondition.discount) && !sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => Number(a.discount) - Number(b.discount))
    : !sortValues.name.slice(1).localeCompare(SortCondition.discount) && sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => Number(b.discount) - Number(a.discount))
    : cards;
};

export const sortByTitle = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortCondition.title) && !sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => a.name.localeCompare(b.name))
    : !sortValues.name.slice(1).localeCompare(SortCondition.title) && sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => a.name.localeCompare(b.name)).reverse()
    : cards;
};

export const sortByStars = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortCondition.stars) && !sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => a.popularity - b.popularity)
    : !sortValues.name.slice(1).localeCompare(SortCondition.stars) && sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => b.popularity - a.popularity)
    : cards;
};

export const sortByDelivery = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortCondition.delivery) && !sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => a.delivery.localeCompare(b.delivery))
    : !sortValues.name.slice(1).localeCompare(SortCondition.delivery) && sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => a.delivery.localeCompare(b.delivery)).reverse()
    : cards;
};

export const sortByStocks = (cards: Array<ICard>, sortValues: sortObj): Array<ICard> => {
  return !sortValues.name.slice(1).localeCompare(SortCondition.stock) && !sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => Number(a.stock) - Number(b.stock))
    : !sortValues.name.slice(1).localeCompare(SortCondition.stock) && sortValues.checked
    ? cards.sort((a: ICard, b: ICard) => Number(b.stock) - Number(a.stock))
    : cards;
};
