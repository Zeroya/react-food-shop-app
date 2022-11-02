import React, { FC } from "react";
import BreadCrumb from "@components/BreadCrumb";
import ProductsHeader from "@components/ProductsHeader";
import Categories from "@components/Categories";
import Cards from "@components/Cards";
import PaginationBlock from "@components/PaginationBlock";
import SideBar from "@components/SideBar";
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
