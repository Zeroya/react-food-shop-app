import React, { FC } from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import ProductsHeader from "@components/ProductsHeader/ProductsHeader";
import Categories from "@components/Categories/Categories";
import Cards from "@components/Cards/Cards";
import s from "./AllProducts.module.scss";

const AllProducts: FC = () => {
  return (
    <div className={s.products}>
      <BreadCrumb />
      <ProductsHeader />
      <div className={s.products__body}>
        <Categories />
        <Cards />
      </div>
    </div>
  );
};

export default AllProducts;