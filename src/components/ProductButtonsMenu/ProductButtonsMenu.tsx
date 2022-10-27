import React, { FC } from "react";
import { Select, InputNumber } from "antd";
import { calcDiscountPrice } from "@utils/calcDiscountPrice";
import { ReactComponent as Plus } from "@assets/icons/Plus.svg";
import s from "./ProductButtonsMenu.module.scss";
import { HeartOutlined } from "@ant-design/icons";
import { ICard } from "@models/ICard";

const ProductButtonsMenu: FC<{ product: ICard }> = ({ product }) => {
  const { Option } = Select;
  return (
    <>
      <div className={s.buttonMenu}>
        <div className={s.buttonMenu__price}>
          <p>{calcDiscountPrice(product.price, product.discount)} USD</p>
          <p>{product.price} USD</p>
        </div>
        <div className={s.buttonMenu__button}>
          <div className={s.select}>
            <div className={s.select__number}>
              <InputNumber size="small" min={1} max={100} defaultValue={1} bordered={false} />
            </div>
            <Select defaultValue="Psc" className="sortSelect__select">
              {["psc"].concat(product?.shoppingListUnits).map((el) => (
                <Option value={el}>{el}</Option>
              ))}
            </Select>
          </div>
          <button className={s.buttonMenu__button_green}>
            <Plus />
            Add to cart
          </button>
        </div>
      </div>
      <div className={s.item__wishList}>
        <button className={s.item__wishButton}>{<HeartOutlined />}Add to wish list</button>
      </div>
    </>
  );
};

export default ProductButtonsMenu;
