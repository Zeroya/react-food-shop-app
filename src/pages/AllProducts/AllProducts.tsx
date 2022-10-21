import React, { FC, useState, useRef, useEffect } from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import ProductsHeader from "@components/ProductsHeader/ProductsHeader";
import Categories from "@components/Categories/Categories";
import Cards from "@components/Cards/Cards";
import PaginationBlock from "@components/PaginationBlock/PaginationBlock";
import SideBar from "@components/SideBar/SideBar";
import useViewport from "@hooks/useViewport";
import s from "./AllProducts.module.scss";

const AllProducts: FC = () => {
  const { width } = useViewport();
  const breakpoint = 702;
  return (
    <div className={s.products}>
      <BreadCrumb />
      <ProductsHeader />
      <div className={s.products__body}>
        {width < breakpoint ? <SideBar /> : <Categories />}
        <Cards />
      </div>
      <PaginationBlock />
    </div>
  );
};

export default AllProducts;
