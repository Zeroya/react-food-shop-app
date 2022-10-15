import { ICard, IFilterData } from "@models/ICard";
import { calcDiscountPrice } from "./calcDiscountPrice";

export const filterCardsFunc = (
  cards: Array<ICard>,
  filterValues: IFilterData,
  dropDownValue: Array<string>,
  searchedValue: string
): Array<ICard> => {
  return searchFilter(
    filterByDropDown(
      filterByBrand(
        filterByCategory(filterByRating(filterByPrice(cards, filterValues), filterValues), filterValues),
        filterValues
      ),
      dropDownValue
    ),
    searchedValue
  );
};

export const filterByPrice = (cards: Array<ICard>, filterValues: IFilterData): Array<ICard> => {
  return cards?.filter((el: ICard) => {
    return filterValues.priceMin && filterValues.priceMax
      ? calcDiscountPrice(el.price, el.discount) > filterValues.priceMin &&
          calcDiscountPrice(el.price, el.discount) < filterValues.priceMax
      : el;
  });
};

export const filterByRating = (cards: Array<ICard>, filterValues: IFilterData): Array<ICard> => {
  return cards?.filter((el: ICard) => {
    return filterValues.rating.length ? filterValues.rating.some((elem) => elem === el.popularity) : el;
  });
};

export const filterByCategory = (cards: Array<ICard>, filterValues: IFilterData): Array<ICard> => {
  return cards?.filter((el: ICard) => {
    return filterValues.category.length
      ? el.categoryPath.some((elem) =>
          filterValues.category.some((elem2) => elem2?.toLowerCase() === elem.toLowerCase())
        )
      : el;
  });
};

export const filterByBrand = (cards: Array<ICard>, filterValues: IFilterData): Array<ICard> => {
  return cards?.filter((el: ICard) => {
    return filterValues.brand.length ? filterValues.brand.some((elem) => elem === el.farm) : el;
  });
};

export const filterByDropDown = (cards: Array<ICard>, dropDownValue: Array<string>): Array<ICard> => {
  return cards?.filter((el: ICard) => {
    return dropDownValue.length === 1
      ? el.categoryPath.some((el) => el === dropDownValue[0])
      : dropDownValue.length === 2
      ? dropDownValue[0] === el.farm && el.categoryPath.some((el) => el === dropDownValue[1].toLowerCase())
      : el;
  });
};

export const searchFilter = (cards: Array<ICard>, searchedValue: string): Array<ICard> => {
  return cards?.filter((el: ICard) => {
    return searchedValue.trim() ? el.name.toLowerCase().includes(searchedValue.trim().toLowerCase()) : el;
  });
};
