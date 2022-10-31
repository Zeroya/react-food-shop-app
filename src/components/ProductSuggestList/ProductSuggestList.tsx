import React, { FC, useState, useEffect } from "react";
import { useAppSelector } from "@hooks/hooks";
import { useParams } from "react-router";
import { firstLetterStrUpperCase } from "@utils/firstLetterStrUpperCase";
import { calcDiscountPrice } from "@utils/calcDiscountPrice";
import { Link } from "react-router-dom";
import { Alert } from "antd";
import { ReactComponent as GreenMark } from "@assets/icons/greenMark.svg";
import { ICard } from "@models/ICard";
import s from "./ProductSuggestList.module.scss";

const ProductSuggestList: FC = () => {
  const [suggestList, setSuggestList] = useState<ICard[]>([]);
  const [counter, setCounter] = useState(4);
  const params = useParams();
  const cards = useAppSelector((state) => state.food.cards);
  const productDetail = useAppSelector((state) => state.food.productDetail);
  const productDetailCategory = useAppSelector((state) => state.food.productDetail[0]?.categoryPath);

  const recommendedArr =
    productDetailCategory &&
    cards
      ?.filter((el) => el?.categoryPath?.some((elem) => productDetailCategory.some((element) => element === elem)))
      .filter((el) => el.name !== productDetail[0].name);

  const addSuggestProduct = () => {
    setCounter(counter + 4);
  };

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
          className={`${s.suggestList__button} ${
            (suggestList?.length < 4 || suggestList?.length - 1 < counter) && s.suggestList__button_disable
          } `}
        >
          More products
          <GreenMark />
        </button>
      </div>
      <div className={s.suggestList__cards}>
        {!suggestList?.length && (
          <Alert message="No similar product found, sorry, keep searching other products" type="info" showIcon />
        )}
        {suggestList &&
          JSON.parse(JSON.stringify(suggestList))
            ?.splice(0, counter)
            ?.map((card: ICard) => (
              <div className={s.card} key={card.id}>
                <div className={s.card__imgWraper}>
                  {!!card.discount && <span className={s.card__discount}>- {card?.discount} %</span>}
                  <img
                    src={`https://spoonacular.com/cdn/ingredients_500x500/${card?.image}`}
                    alt={`${card.name} photo`}
                  />
                </div>
                <div className={s.card__info}>
                  <div className={s.card__title}>{firstLetterStrUpperCase(card.name)}</div>
                  <div className={s.card__description}>{card.description.slice(0, 40).trim().concat("...")}</div>
                </div>
                <div className={s.card__priceBlock}>
                  <div className={s.card__price}>
                    <h4>{calcDiscountPrice(card.price, card.discount)} USD</h4>
                    {!!card.discount && <h5 className={s.card__price_noDiscount}>{card.price}</h5>}
                  </div>
                  <Link to={`/Allproducts/${card.name}`}>
                    <button className={s.card__button}>Buy now</button>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductSuggestList;
