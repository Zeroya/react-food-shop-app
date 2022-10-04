import React, { FC } from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import ProductDetailCard from "@components/ProductDetailCard/ProductDetailCard";
import RecommendListing from "@components/RecommendListing/RecommendListing";

const Product: FC = () => {
  return (
    <div>
      <BreadCrumb />
      <ProductDetailCard />
      <RecommendListing />
    </div>
  );
};

export default Product;
