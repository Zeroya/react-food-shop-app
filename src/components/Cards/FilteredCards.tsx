import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { setFilteredCards } from "@store/reducers/UserSlice";
import { filterCardsFunc } from "@utils/filterCardsFunc";
import Card from "@components/Card/Card";
import { ICard } from "@models/ICard";

const FilteredCards: FC = () => {
  const dispatch = useAppDispatch();
  const searchedValue = useAppSelector((state) => state.food.searchValue);
  const filterValues = useAppSelector((state) => state.food.filterValues);
  const dropDownValue = useAppSelector((state) => state.food.dropDownValue);
  const cards = useAppSelector((state) => state.food.cards);

  const cardsFilter = filterCardsFunc(cards, filterValues, dropDownValue, searchedValue);

  useEffect(() => {
    dispatch(setFilteredCards(cardsFilter));
  }, [cardsFilter.length]);

  return (
    <>
      {cardsFilter.map((el: ICard) => (
        <Card {...el} key={el.id} />
      ))}
    </>
  );
};

export default FilteredCards;
