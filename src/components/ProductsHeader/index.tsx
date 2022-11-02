import React, { FC } from "react";
import { useAppSelector } from "@hooks/hooks";
import SortSelect from "./SortSelect";
import s from "./ProductsHeader.module.scss";

const ProductsHeader: FC = () => {
  const cards = useAppSelector((state) => state.food.cards);
  return (
    <div className={s.productsHeader}>
      <div className={s.banner}>
        <h1 className={s.banner_title}>All Products</h1>
        <div className={s.banner_amount}>
          <span>{cards?.length}</span>
          <span>Products</span>
        </div>
      </div>
      <SortSelect />
    </div>
  );
};

export default ProductsHeader;
