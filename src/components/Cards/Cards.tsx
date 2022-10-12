import React, { FC, useEffect } from "react";
import { useAppDispatch } from "@hooks/hooks";
import { setCards } from "@store/reducers/UserSlice";
import { FoodApi } from "services/FoodService";
import s from "./Cards.module.scss";
import { Alert, Spin } from "antd";
import FilteredCards from "./FilteredCards";

const Cards: FC = () => {
  const dispatch = useAppDispatch();
  const { data: allFreshFood, isLoading, error } = FoodApi.useFetchAllFreshFoodQuery();

  useEffect(() => {
    allFreshFood && dispatch(setCards(allFreshFood));
  }, [allFreshFood]);

  return (
    <div className={s.cards}>
      <div className={s.cards__item}>
        {error && <Alert message="Some error with mockApi data(" type="error" showIcon />}
        {isLoading && (
          <div className={s.cards__spiner}>
            <Spin size="large" />
          </div>
        )}
        <FilteredCards />
      </div>
    </div>
  );
};

export default Cards;
