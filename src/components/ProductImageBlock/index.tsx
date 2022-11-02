import React, { FC } from "react";
import s from "./ProductImageBlock.module.scss";
import { ICard } from "@models/ICard";

const ProductImageBlock: FC<{ product: ICard }> = ({ product }) => {
  return (
    <div className={s.item__imageBlock}>
      <div className={s.item__discount}>
        <span>- {product?.discount} %</span>
        <span>Free shipping</span>
      </div>
      <div className={s.item__imgWraper}>
        <img src={`https://spoonacular.com/cdn/ingredients_500x500/${product?.image}`} alt={`${product.name} photo`} />
        <div className={s.item__imgWraper_pressSide}>
          <img
            src={`https://spoonacular.com/cdn/ingredients_500x500/${product?.image}`}
            alt={`${product.name} photo`}
          />
          <img
            src={`https://spoonacular.com/cdn/ingredients_500x500/${product?.image}`}
            alt={`${product.name} photo`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageBlock;
