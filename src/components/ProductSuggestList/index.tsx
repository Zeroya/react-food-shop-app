import React, { FC, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@hooks/hooks";
import { useParams } from "react-router";
import { setCards } from "@store/reducers/UserSlice";
import { FoodApi } from "services/FoodService";
import { Alert } from "antd";
import { ReactComponent as GreenMark } from "@assets/icons/greenMark.svg";
import RecommendList from "@components/RecommendList";
import { ICard } from "@models/ICard";
import s from "./ProductSuggestList.module.scss";

const ProductSuggestList: FC = () => {
  const [suggestList, setSuggestList] = useState<ICard[]>([]);
  const [counter, setCounter] = useState(4);
  const params = useParams();
  const dispatch = useAppDispatch();
  const { data: allFreshFood } = FoodApi.useFetchAllFreshFoodQuery();
  const cards = useAppSelector((state) => state.food.cards);
  const productDetail = useAppSelector((state) => state.food.productDetail);
  const productDetailCategory = useAppSelector((state) => state.food.productDetail[0]?.categoryPath);

  const spliceAmountArr = suggestList && JSON.parse(JSON.stringify(suggestList))?.splice(0, counter);
  const buttonSwitcher = suggestList?.length < 4 || suggestList?.length - 1 < counter;

  const recommendedArr =
    productDetailCategory &&
    cards
      ?.filter((el) => el?.categoryPath?.some((elem) => productDetailCategory.some((element) => element === elem)))
      .filter((el) => el.name !== productDetail[0].name);

  const addSuggestProduct = () => {
    setCounter(counter + 4);
  };

  useEffect(() => {
    allFreshFood && dispatch(setCards(allFreshFood));
  }, [allFreshFood]);

  useEffect(() => {
    setSuggestList(recommendedArr);
    return () => setSuggestList([]);
  }, [recommendedArr]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [params.productId]);

  return (
    <div className={s.suggestList}>
      <div className={s.suggestList__intro}>
        <h1 className={s.suggestList__title}>You will maybe love</h1>
        <button
          onClick={addSuggestProduct}
          className={`${s.suggestList__button} ${buttonSwitcher && s.suggestList__button_disable} `}
        >
          More products
          <GreenMark />
        </button>
      </div>
      <div className={s.suggestList__cards}>
        {!suggestList?.length && (
          <Alert message="No similar product found, sorry, keep searching other products" type="info" showIcon />
        )}
        {spliceAmountArr?.map((card: ICard) => (
          <RecommendList card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProductSuggestList;
