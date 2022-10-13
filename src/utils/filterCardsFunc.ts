import { ICard, IFilterData } from "@models/ICard";

export const filterCardsFunc = (
  cards: Array<ICard>,
  filterValues: IFilterData,
  dropDownValue: Array<string>,
  searchedValue: string
): Array<ICard> => {
  return cards
    ?.filter((el: ICard) => {
      return filterValues.priceMin && filterValues.priceMax
        ? el.price > filterValues.priceMin && el.price < filterValues.priceMax
        : el;
    })
    ?.filter((el: ICard) => {
      return filterValues.rating.length ? filterValues.rating.some((elem) => elem === el.popularity) : el;
    })
    ?.filter((el: ICard) => {
      return filterValues.category.length
        ? el.categoryPath.some((elem) =>
            filterValues.category.some((elem2) => elem2?.toLowerCase() === elem.toLowerCase())
          )
        : el;
    })
    ?.filter((el: ICard) => {
      return filterValues.brand.length ? filterValues.brand.some((elem) => elem === el.farm) : el;
    })
    ?.filter((el: ICard) => {
      return dropDownValue.length === 1
        ? el.categoryPath.some((el) => el === dropDownValue[0])
        : dropDownValue.length === 2
        ? dropDownValue[0] === el.farm && el.categoryPath.some((el) => el === dropDownValue[1].toLowerCase())
        : el;
    })
    ?.filter((el: ICard) => {
      return searchedValue.trim() ? el.name.toLowerCase().includes(searchedValue.trim().toLowerCase()) : el;
    });
};
