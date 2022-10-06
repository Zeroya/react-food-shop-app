import React, { FC } from "react";
import { Rate } from "antd";
import { calcDiscountPrice } from "@utils/calcDiscountPrice";
import { FoodApi } from "services/FoodService";
import { HeartOutlined } from "@ant-design/icons";
import s from "./Cards.module.scss";

const Cards: FC = () => {
  const { data, isLoading, error } = FoodApi.useFetchAllFreshFoodQuery();
  return (
    <div className={s.cards}>
      <div className={s.cards__item}>
        {data?.map((el) => (
          <div className={s.card}>
            <div className={s.card__img}>
              <img src={`https://spoonacular.com/cdn/ingredients_500x500/${el.image}`} alt="" />
            </div>
            <div className={s.card__body}>
              <h3 className={s.card__title}>{el.name}</h3>
              <p className={s.card__simpleText}>{el.description.slice(0, 20).trim().concat("...")}</p>
              <Rate disabled defaultValue={el.popularity} className={s.card__stars} />
              <ul className={s.card__info}>
                <li className={s.card_lightText}>
                  Fresheness <span className={s.card__span}>...</span> {el.fresheness}
                </li>
                <li className={s.card_lightText}>
                  Farm <span className={s.card__span}>...........</span> {el.farm}
                </li>
                <li className={s.card_lightText}>
                  Delivery <span className={s.card__span}>......</span> Europe
                </li>
                <li className={s.card_lightText}>
                  Stock <span className={s.card__span}>..........</span>{" "}
                  <span className={s.card_greenColor}>{el.stock} pcs</span>
                </li>
              </ul>
            </div>
            <div className={s.card__checkout}>
              <div className={s.card__price}>
                <p className={s.card__title}>{calcDiscountPrice(el.price, el.discount)} USD</p>
                <p className={s.card_lineThrough}>{el.price}</p>
              </div>
              <div className={s.card__delivery}>
                <p className={`${s.card_lightText} ${s.card_deliveryFont}`}>Free Shipping</p>
                <p className={`${s.card_lightText} ${s.card_deliveryFontInfo}`}>Delivery {el.delivery}</p>
              </div>
              <div className={s.card__buttons}>
                <button className={s.card__productButton}>{"Product Detail" + " >"}</button>
                <button className={s.card__wishButton}>{<HeartOutlined />} Add to wish list</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
