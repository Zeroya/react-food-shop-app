import React, { FC } from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import ProductsHeader from "@components/ProductsHeader/ProductsHeader";
import Categories from "@components/Categories/Categories";
import Cards from "@components/Cards/Cards";

const AllProducts: FC = () => {
  return (
    <div>
      <BreadCrumb />
      <ProductsHeader />
      <Categories />
      <Cards />
    </div>
  );
};

export default AllProducts;
