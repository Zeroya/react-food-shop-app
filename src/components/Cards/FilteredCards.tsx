import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { setFilteredCards } from "@store/reducers/UserSlice";
import { filterCardsFunc } from "@utils/filterCardsFunc";
import { sortCardsFunc } from "@utils/sortCardsFunc";
import Card from "@components/Card/Card";
import { ICard, sortObj } from "@models/ICard";

const FilteredCards: FC = () => {
  const dispatch = useAppDispatch();
  const searchedValue = useAppSelector((state) => state.food.searchValue);
  const filterValues = useAppSelector((state) => state.food.filterValues);
  const dropDownValue = useAppSelector((state) => state.food.dropDownValue);
  const filteredCards = useAppSelector((state) => state.food.filteredCards);
  const cards = useAppSelector((state) => state.food.cards);
  const sortValue = useAppSelector((state) => state.food.sortValue);
  const allCards = useAppSelector((state) => state.food.paginatedCards);

  const sortedValue = sortValue
    ?.split(" ")
    ?.map((el) => ({ name: el, checked: el.charCodeAt(0) === 8593 }))
    .shift() as sortObj;

  const cardsFilter = sortCardsFunc(filterCardsFunc(cards, filterValues, dropDownValue, searchedValue), sortedValue);

  useEffect(() => {
    dispatch(setFilteredCards(cardsFilter));
  }, [cardsFilter.length, filterValues, dropDownValue, searchedValue, sortValue]);

  return (
    <>
      {allCards.map((el: ICard) => (
        <Card {...el} key={el.id} />
      ))}
    </>
  );
};

export default FilteredCards;
