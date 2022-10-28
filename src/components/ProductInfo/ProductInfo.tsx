import React, { FC } from "react";
import { Rate } from "antd";
import { firstLetterStrUpperCase } from "@utils/firstLetterStrUpperCase";
import s from "./ProductInfo.module.scss";
import { ICard } from "@models/ICard";

const ProductInfo: FC<{ product: ICard }> = ({ product }) => {
  const possibleUnits = product?.possibleUnits.filter((_, id) => id <= 5).join(", ");
  const ListUnits = ["psc"].concat(product?.shoppingListUnits).join(", ");
  return (
    <div className={s.item}>
      <h2 className={s.item__title}>{firstLetterStrUpperCase(product?.name)}</h2>
      <div className={s.item__starBlock}>
        <Rate disabled defaultValue={product?.popularity} className={s.item__stars} />
        <p> ({product.reviews.length} customer review)</p>
      </div>
      <p className={s.item__description}>{product?.description}</p>

      <div className={s.item__listBlock}>
        <ul className={s.item__list}>
          <li className={`${s.item_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}> Country: </p>
            <p className={s.item__list_spanBlock}>{product.country}</p>
          </li>
          <li className={`${s.item_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}>Category:</p>
            <p className={s.item__list_spanBlock}>{firstLetterStrUpperCase(product.categoryPath[0])}</p>
          </li>
          <li className={`${s.item_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}>Stock:</p>
            <p className={s.item__list_spanBlock}>{product.stock ? "In Stock" : "Absent"}</p>
          </li>
          <li className={`${s.item_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}>Color:</p>
            <p className={`${s.item_greenColor} ${s.item__list_spanBlock}`}>White blue</p>
          </li>
          <li className={`${s.item_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}> Size: </p>
            <p className={s.item__list_spanBlock}>{possibleUnits}</p>
          </li>
          <li className={`${s.card_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}>Buy by:</p>
            <p className={s.item__list_spanBlock}>{ListUnits}</p>
          </li>
          <li className={`${s.item_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}>Delivery:</p>
            <p className={s.item__list_spanBlock}>{product.delivery}</p>
          </li>
          <li className={`${s.item_lightText} ${s.item__list_height}`}>
            <p className={s.item__list_overflow}>Delivery area:</p>
            <p className={`${s.item_greenColor} ${s.item__list_spanBlock}`}>Europe</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
