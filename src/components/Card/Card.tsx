import React, { FC } from "react";
import { Rate } from "antd";
import { calcDiscountPrice } from "@utils/calcDiscountPrice";
import { firstLetterStrUpperCase } from "@utils/firstLetterStrUpperCase";
import { ICard } from "@models/ICard";
import { HeartOutlined } from "@ant-design/icons";
import s from "./Card.module.scss";

const Card: FC<ICard> = ({
  image,
  name,
  description,
  popularity,
  fresheness,
  farm,
  stock,
  price,
  discount,
  delivery,
}) => {
  return (
    <div className={s.card}>
      <div className={s.card__img}>
        <img src={`https://spoonacular.com/cdn/ingredients_500x500/${image}`} alt="" />
      </div>
      <div className={s.card__body}>
        <div className={s.card__info}>
          <h3 className={s.card__title}>{firstLetterStrUpperCase(name)}</h3>
          <p className={s.card__simpleText}>{description.slice(0, 20).trim().concat("...")}</p>
          <Rate disabled defaultValue={popularity} className={s.card__stars} />
          <ul className={s.card__list}>
            <li className={`${s.card_lightText} ${s.card__list_height}`}>
              <p className={s.card__list_overflow}> Fresheness </p>
              <p className={s.card__list_spanBlock}> {firstLetterStrUpperCase(fresheness)} </p>
            </li>
            <li className={`${s.card_lightText} ${s.card__list_height}`}>
              <p className={s.card__list_overflow}>Farm</p>
              <p className={s.card__list_spanBlock}>{farm}</p>
            </li>
            <li className={`${s.card_lightText} ${s.card__list_height}`}>
              <p className={s.card__list_overflow}>Delivery</p>
              <p className={s.card__list_spanBlock}>Europe</p>
            </li>
            <li className={`${s.card_lightText} ${s.card__list_height}`}>
              <p className={s.card__list_overflow}>Stock</p>
              <p className={`${s.card_greenColor} ${s.card__list_spanBlock}`}>{stock} pcs</p>
            </li>
          </ul>
        </div>

        <div className={s.card__checkout}>
          <div className={s.card__price}>
            <p className={s.card__title}>{calcDiscountPrice(price, discount)} USD</p>
            <p className={s.card_lineThrough}>{price}</p>
          </div>
          <div className={s.card__delivery}>
            <p className={`${s.card_lightText} ${s.card_deliveryFont}`}>Free Shipping</p>
            <p className={`${s.card_lightText} ${s.card_deliveryFontInfo}`}>Delivery {delivery}</p>
          </div>
          <div className={s.card__buttons}>
            <button className={s.card__productButton}>{"Product Detail" + " >"}</button>
            <button className={s.card__wishButton}>{<HeartOutlined />} Add to wish list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
