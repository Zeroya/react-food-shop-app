import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { setCards, setCategoriesValues } from "@store/reducers/UserSlice";
import { FoodApi } from "services/FoodService";
import s from "./Cards.module.scss";
import { Alert, Spin, Result } from "antd";
import FilteredCards from "./FilteredCards";

const Cards: FC = () => {
  const dispatch = useAppDispatch();
  const filteredCards = useAppSelector((state) => state.food.filteredCards);
  const { data: allFreshFood, isLoading, error } = FoodApi.useFetchAllFreshFoodQuery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    allFreshFood && dispatch(setCards(allFreshFood));
    allFreshFood && dispatch(setCategoriesValues(allFreshFood));
  }, [allFreshFood]);

  return (
    <div className={s.cards}>
      {error && <Alert message="Some error with mockApi data(" type="error" showIcon />}
      {isLoading && (
        <div className={s.cards__spiner}>
          <Spin size="large" />
        </div>
      )}
      {!filteredCards.length && !isLoading && (
        <div>
          <Result title="There are no products here, please change category or Reset categories" />
        </div>
      )}
      <FilteredCards />
    </div>
  );
};

export default Cards;
