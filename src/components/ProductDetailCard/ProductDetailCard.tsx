import React, { FC, useEffect } from "react";
import { useAppDispatch } from "@hooks/hooks";
import { addProductDetail } from "@store/reducers/UserSlice";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { FoodApi } from "services/FoodService";
import s from "./ProductDetailCard.module.scss";
import ProductInfo from "@components/ProductInfo/ProductInfo";
import ProductButtonsMenu from "@components/ProductButtonsMenu/ProductButtonsMenu";
import ProductImageBlock from "@components/ProductImageBlock/ProductImageBlock";
import ProductTabs from "@components/ProductTabs/ProductTabs";

const ProductDetailCard: FC = () => {
  const { data: allFreshFood } = FoodApi.useFetchAllFreshFoodQuery();
  const param = useParams();
  const dispatch = useAppDispatch();
  const index = allFreshFood?.find((el) => el.name === param.productId)?.id;
  const { data: product, isLoading, error } = FoodApi.useFetchProductQuery(Number(index));

  useEffect(() => {
    product && dispatch(addProductDetail([product]));
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.item}>
      {isLoading && (
        <div className={s.item__spiner}>
          <Spin size="large" />
        </div>
      )}
      {product && (
        <>
          <ProductImageBlock product={product} />
          <div className={s.item__body}>
            <ProductInfo product={product} />
            <ProductButtonsMenu product={product} />
            <ProductTabs product={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailCard;
