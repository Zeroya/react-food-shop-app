import React, { FC } from "react";
import BreadCrumb from "@components/BreadCrumb";
import ProductDetailCard from "@components/ProductDetailCard";
import ProductSuggestList from "@components/ProductSuggestList/ProductSuggestList";

const Product: FC = () => {
  return (
    <div>
      <BreadCrumb />
      <ProductDetailCard />
      <ProductSuggestList />
    </div>
  );
};

export default Product;
