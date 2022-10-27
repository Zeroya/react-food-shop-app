import React, { FC, useEffect } from "react";
import { useAppDispatch } from "@hooks/hooks";
import { addProductDetail } from "@store/reducers/UserSlice";
import { useParams } from "react-router-dom";
import { Rate, Select, InputNumber } from "antd";
import { calcDiscountPrice } from "@utils/calcDiscountPrice";
import plus from "@assets/icons/Plus.svg";
import { firstLetterStrUpperCase } from "@utils/firstLetterStrUpperCase";
import { FoodApi } from "services/FoodService";
import s from "./ProductDetailCard.module.scss";
import { HeartOutlined } from "@ant-design/icons";

const ProductDetailCard: FC = () => {
  const { Option } = Select;
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
      {product && (
        <>
          <div className={s.item__imageBlock}>
            <div className={s.item__discount}>
              <span>- {product?.discount} %</span>
              <span>Free shipping</span>
            </div>

            <div className={s.item__imgWraper}>
              <img src={`https://spoonacular.com/cdn/ingredients_500x500/${product?.image}`} alt="" />
              <div className={s.item__imgWraper_pressSide}>
                <img src={`https://spoonacular.com/cdn/ingredients_500x500/${product?.image}`} alt="" />
                <img src={`https://spoonacular.com/cdn/ingredients_500x500/${product?.image}`} alt="" />
              </div>
            </div>
          </div>

          <div className={s.item__body}>
            <div className={s.item__info}>
              <h2 className={s.item__title}>{firstLetterStrUpperCase(product?.name)}</h2>
              <div className={s.item__starBlock}>
                <Rate disabled defaultValue={product?.popularity} className={s.item__stars} />
                <p> ({product.reviews.length} customer review)</p>
              </div>
              <p className={s.item__description}>{product?.description}</p>

              <div className={s.item__listBlock}>
                <ul className={s.item__list}>
                  <li className={`${s.item_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}> Country: </p>
                    <p className={s.item__list_spanBlock}>{product.country}</p>
                  </li>
                  <li className={`${s.item_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}>Category:</p>
                    <p className={s.item__list_spanBlock}>{firstLetterStrUpperCase(product.categoryPath[0])}</p>
                  </li>
                  <li className={`${s.item_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}>Stock:</p>
                    <p className={s.item__list_spanBlock}>{product.stock ? "In Stock" : "Absent"}</p>
                  </li>
                  <li className={`${s.item_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}>Color:</p>
                    <p className={`${s.item_greenColor} ${s.item__list_spanBlock}`}>White blue</p>
                  </li>
                </ul>
                <ul className={s.item__list}>
                  <li className={`${s.item_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}> Size: </p>
                    <p className={s.item__list_spanBlock}>
                      {product.possibleUnits.filter((_, id) => id <= 5).join(", ")}
                    </p>
                  </li>
                  <li className={`${s.card_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}>Buy by:</p>
                    <p className={s.item__list_spanBlock}>{["psc"].concat(product?.shoppingListUnits).join(", ")}</p>
                  </li>
                  <li className={`${s.item_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}>Delivery:</p>
                    <p className={s.item__list_spanBlock}>{product.delivery}</p>
                  </li>
                  <li className={`${s.item_lightText} ${s.item__list_height}`}>
                    <p className={s.item__list_overflow}>Delivery area:</p>
                    <p className={`${s.item_greenColor} ${s.item__list_spanBlock}`}>Europe</p>
                  </li>
                </ul>
              </div>
            </div>

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
                  <div className={s.select__divider}>
                    <p>.</p>
                  </div>
                  <Select defaultValue="Psc" className="sortSelect__select">
                    {["psc"].concat(product?.shoppingListUnits).map((el) => (
                      <Option value={el}>{el}</Option>
                    ))}
                  </Select>
                </div>
                <button className={s.buttonMenu__button_green}>
                  <img src={plus} /> Add to cart
                </button>
              </div>
            </div>
            <div className={s.item__wishList}>
              <p>{<HeartOutlined />} Add to my wish list</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailCard;
