import React, { FC } from "react";
import { firstLetterStrUpperCase } from "@utils/firstLetterStrUpperCase";
import { calcDiscountPrice } from "@utils/calcDiscountPrice";
import { Link } from "react-router-dom";
import { ICard } from "@models/ICard";
import s from "./RecommendList.module.scss";

const RecommendList: FC<{ card: ICard }> = ({ card }) => {
  return (
    <div className={s.card} key={card.id}>
      <div className={s.card__imgWraper}>
        {!!card.discount && <span className={s.card__discount}>- {card?.discount} %</span>}
        <img src={`https://spoonacular.com/cdn/ingredients_500x500/${card?.image}`} alt={`${card.name} photo`} />
      </div>
      <div className={s.card__info}>
        <div className={s.card__title}>{firstLetterStrUpperCase(card.name)}</div>
        <div className={s.card__description}>{card.description.slice(0, 40).trim().concat("...")}</div>
      </div>
      <div className={s.card__priceBlock}>
        <div className={s.card__price}>
          <span>{calcDiscountPrice(card.price, card.discount)} USD</span>
          {!!card.discount && <span className={s.card__price_noDiscount}>{card.price}</span>}
        </div>
        <Link to={`/Allproducts/${card.name}`}>
          <button className={s.card__button}>Buy now</button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendList;
