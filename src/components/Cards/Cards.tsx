import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { setCards } from "@store/reducers/UserSlice";
import Card from "@components/Card/Card";
import { FoodApi } from "services/FoodService";
import s from "./Cards.module.scss";
import { Alert, Spin } from "antd";
import { ICard } from "@models/ICard";

const Cards: FC = () => {
  const dispatch = useAppDispatch();
  const searchedValue = useAppSelector((state) => state.food.searchValue);
  const cards = useAppSelector((state) => state.food.cards);
  const { data, isLoading, error } = FoodApi.useFetchAllFreshFoodQuery();

  useEffect(() => {
    data && dispatch(setCards(data));
  }, [data]);

  return (
    <div className={s.cards}>
      <div className={s.cards__item}>
        {error && <Alert message="Some error with mockApi data(" type="error" showIcon />}
        {isLoading && <Spin size="large" />}
        {cards
          ?.filter((el: ICard) => {
            return searchedValue.trim() ? el.name.toLowerCase().includes(searchedValue.trim().toLowerCase()) : el;
          })
          .map((el: ICard) => (
            <Card {...el} key={el.id} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
