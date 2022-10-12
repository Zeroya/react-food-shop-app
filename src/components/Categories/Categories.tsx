import React, { FC, useState, useEffect } from "react";
import { categoriesArr, brandArr, starsArr } from "mockedData/mockedData";
import { calcCategoriesAmount } from "@utils/calcCategoriesAmount";
import { Checkbox, Rate, Slider, InputNumber } from "antd";
import { addFilterValues, resetDropDownValues } from "@store/reducers/UserSlice";
import { IFilterData } from "@models/ICard";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import s from "./Categories.module.scss";
import "./checkbox.css";

const Categories: FC = () => {
  const [reset, setReset] = useState(false);
  const [input, setInput] = useState<IFilterData>({
    category: [],
    brand: [],
    rating: [],
    priceMin: 5,
    priceMax: 100,
  });

  const cards = useAppSelector((state) => state.food.cards);
  const dropDownValue = useAppSelector((state) => state.food.dropDownValue);

  const dispatch = useAppDispatch();

  const onChange = (e: number, fieldName: string): void => {
    setInput({ ...input, [fieldName]: e });
  };

  const onClick = (e: number | string, fieldName: string): void => {
    setInput({
      ...input,
      [fieldName]:
        fieldName === "category"
          ? [...input.category, e]
          : fieldName === "brand"
          ? [...input.brand, e]
          : [...input.rating, e],
    });
  };

  const toggleChange = (checked: boolean, id: number, value: number | string, fieldName: string): void => {
    checked &&
      setInput({
        ...input,
        [fieldName]:
          fieldName === "rating"
            ? input.rating.filter((el) => el !== value)
            : fieldName === "category"
            ? input.category.filter((el) => el !== value)
            : input.brand.filter((el) => el !== value),
      });
    fieldName === "rating"
      ? (starsArr[id].checked = !checked)
      : fieldName === "category"
      ? (categoriesArr[id].checked = !checked)
      : (brandArr[id].checked = !checked);
  };

  const multSelect = ([priceMin, priceMax]: Array<number>) => {
    setInput({ ...input, priceMin, priceMax });
  };

  const filterReset = () => {
    starsArr.forEach((_, id) => (starsArr[id].checked = false));
    brandArr.forEach((_, id) => (brandArr[id].checked = false));
    categoriesArr.forEach((_, id) => (categoriesArr[id].checked = false));
    setReset(!reset);
    dispatch(
      addFilterValues({
        category: [],
        brand: [],
        rating: [],
        priceMin: 5,
        priceMax: 100,
      })
    );
  };

  const buttonReset = () => {
    filterReset();
    dispatch(resetDropDownValues());
  };

  useEffect(() => {
    input && dispatch(addFilterValues(input));
  }, [input]);

  useEffect(() => {
    dropDownValue && filterReset();
  }, [dropDownValue]);

  return (
    <div className={s.sidebar}>
      <div className={s.categories}>
        <h3 className={s.sidebar__topic}>Categories</h3>
        <ul>
          {categoriesArr.map((el, id) => {
            return (
              <li
                className={s.categories__item}
                onClick={() => {
                  onClick(el.value, "category");
                  toggleChange(el.checked, id, el.value, "category");
                }}
              >
                <div className={`${s.categories__name} ${s.sidebar__text} ${el.checked && s.categories__item_active} `}>
                  {el.value}
                </div>
                <div className={s.categories__amount}>{calcCategoriesAmount(cards, el.value)}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.brands}>
        <h3 className={s.sidebar__topic}>Brands</h3>
        <ul>
          {brandArr.map((el, id) => {
            return (
              <li className={s.brands__item} onClick={() => onClick(el.value, "brand")}>
                <Checkbox checked={el.checked} onChange={() => toggleChange(el.checked, id, el.value, "brand")}>
                  <div className={s.sidebar__text}>{el.value}</div>
                </Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.rating}>
        <h3 className={s.sidebar__topic}>Rating</h3>
        <ul>
          {starsArr.map((el, id) => {
            return (
              <li key={id} className={s.brands__item} onClick={() => onClick(el.value, "rating")}>
                <Checkbox checked={el.checked} onChange={() => toggleChange(el.checked, id, el.value, "rating")}>
                  <Rate disabled defaultValue={el.value} />
                </Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.price}>
        <h3 className={s.sidebar__topic}>Price</h3>
        <Slider range min={1} max={100} value={[input.priceMin, input.priceMax]} onChange={(e) => multSelect(e)} />
        <div className={s.sidebar__buttons}>
          <div className={s.price__button}>
            <span> Min</span>{" "}
            <InputNumber
              step={3}
              min={1}
              max={input.priceMax}
              value={input.priceMin}
              onChange={(e) => onChange(e, "priceMin")}
            />
          </div>
          <div className={s.price__button}>
            <span> Max</span>{" "}
            <InputNumber
              step={3}
              min={input.priceMin}
              max={100}
              value={input.priceMax}
              onChange={(e) => onChange(e, "priceMax")}
            />
          </div>
        </div>
      </div>
      <div onClick={buttonReset} className={s.reset}>
        <span>Reset</span>
      </div>
    </div>
  );
};

export default Categories;
