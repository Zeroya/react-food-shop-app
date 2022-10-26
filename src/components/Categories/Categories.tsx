import React, { FC, useState, useEffect } from "react";
import { starsArr } from "mockedData/mockedData";
import { calcCategoriesAmount } from "@utils/calcCategoriesAmount";
import { Checkbox, Rate, Slider, InputNumber } from "antd";
import { SidebarCondition } from "@models/Enums";
import { findMinMaxPrice } from "@utils/findMinMaxPrice";
import { calcDiscountPriceAll } from "@utils/calcDiscountPrice";
import {
  addFilterValues,
  resetDropDownValues,
  toggleMarkChange,
  resetFilterState,
  addCategoryValue,
  resetBrandState,
} from "@store/reducers/UserSlice";
import { IFilterData } from "@models/ICard";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import s from "./Categories.module.scss";
import "./checkbox.css";

const Categories: FC = () => {
  const [price, setPrice] = useState<Array<number>>([]);
  const [reset, setReset] = useState(false);

  const [input, setInput] = useState<IFilterData>({
    category: [],
    brand: [],
    rating: [],
    priceMin: Math.floor(price[0]),
    priceMax: Math.ceil(price[1]),
  });

  const dispatch = useAppDispatch();

  const cards = useAppSelector((state) => state.food.cards);
  const dropDownValue = useAppSelector((state) => state.food.dropDownValue);
  const categoryValues = useAppSelector((state) => state.food.categoryValues);
  const brandValues = useAppSelector((state) => state.food.brandValues);
  const category = useAppSelector((state) => state.food.filterValues.category);
  const brand = useAppSelector((state) => state.food.filterValues.brand);

  const comparisonArr = category[0]?.split("").every((el) => el === el.toLowerCase());

  const onChange = (e: number, fieldName: string): void => {
    setInput({ ...input, [fieldName]: e });
  };

  const onClick = (e: number | string, fieldName: string): void => {
    setInput({
      ...input,
      [fieldName]:
        fieldName === SidebarCondition.category
          ? [e]
          : fieldName === SidebarCondition.brand
          ? [...input.brand, e]
          : [...input.rating, e],
    });
    fieldName === "category" && typeof e === "string" && dispatch(addCategoryValue(e));
  };

  const toggleChange = (checked: boolean, id: number, value: number | string, fieldName: string): void => {
    checked &&
      setInput({
        ...input,
        [fieldName]:
          fieldName === SidebarCondition.rating
            ? input.rating.filter((el) => el !== value)
            : fieldName === SidebarCondition.category
            ? input.category.filter((el) => el !== value)
            : input.brand.filter((el) => el !== value),
      });
    fieldName === SidebarCondition.rating
      ? (starsArr[id].checked = !checked)
      : fieldName === SidebarCondition.category
      ? dispatch(toggleMarkChange({ fieldName, id, checked }))
      : dispatch(toggleMarkChange({ fieldName, id, checked }));
  };

  const multSelect = ([priceMin, priceMax]: Array<number>) => {
    setInput({ ...input, priceMin, priceMax });
  };

  const filterReset = () => {
    starsArr.forEach((_, id) => (starsArr[id].checked = false));
    dispatch(resetFilterState());
    setInput({
      category: [],
      brand: [],
      rating: [],
      priceMin: Math.floor(price[0]),
      priceMax: Math.ceil(price[1]),
    });
    setReset(!reset);
    dispatch(
      addFilterValues({
        category: [],
        brand: [],
        rating: [],
        priceMin: Math.floor(price[0]),
        priceMax: Math.ceil(price[1]),
      })
    );
  };

  const buttonReset = () => {
    filterReset();
    dispatch(resetDropDownValues());
  };

  const categoryToggle = (value: number | string, id: number, checked: boolean, category: string) => {
    dispatch(resetDropDownValues());
    onClick(value, category);
    toggleChange(checked, id, value, category);
  };

  useEffect(() => {
    dispatch(addFilterValues(input));
    comparisonArr && dispatch(addFilterValues({ ...input, category }));
  }, [input]);

  useEffect(() => {
    dropDownValue.length && filterReset();
    category.length &&
      brand.length &&
      dispatch(
        addFilterValues({
          category: [category[0]],
          brand: [brand[0]],
          rating: [],
          priceMin: Math.floor(price[0]),
          priceMax: Math.ceil(price[1]),
        })
      );

    const categoryIndex = categoryValues
      .map((el, id) => (el.value.toLocaleLowerCase() === String(category[0]).toLocaleLowerCase() ? id : el))
      .filter((el) => typeof el === "number")
      .join("");

    const brandIndex = brandValues
      .map((el, id) => (el.value.toLocaleLowerCase() === String(brand[0]).toLocaleLowerCase() ? id : el))
      .filter((el) => typeof el === "number")
      .join("");

    category.length &&
      dropDownValue.length &&
      toggleChange(false, Number(categoryIndex), String(category[0]), SidebarCondition.category);
    brand.length && toggleChange(false, Number(brandIndex), String(brand[0]), SidebarCondition.brand);

    !brand.length && dispatch(resetBrandState());
  }, [dropDownValue]);

  useEffect(() => {
    setPrice(findMinMaxPrice(calcDiscountPriceAll(cards)));
    setTimeout(() => {
      buttonReset();
    }, 1000);
  }, [cards]);

  useEffect(() => {
    dropDownValue[0] === "all categories" && dispatch(resetDropDownValues());
  }, [dropDownValue]);

  return (
    <aside className={s.sidebar}>
      <div className={s.categories}>
        <h3 className={s.sidebar__topic}>Categories</h3>
        <ul className={s.categories__wrapper}>
          {categoryValues.map((el, id) => {
            return (
              <li
                className={`${s.categories__item} ${s.categories__item_hoverEffect} `}
                onClick={() => categoryToggle(el.value, id, el.checked, SidebarCondition.category)}
              >
                <div className={`${s.categories__name} ${s.sidebar__text} ${el.checked && s.categories__item_active} `}>
                  {el.value}
                </div>
                <span className={s.categories__amount}>{calcCategoriesAmount(cards, el.value)}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.brands}>
        <h3 className={s.sidebar__topic}>Brands</h3>
        <ul>
          {brandValues.map((el, id) => {
            return (
              <li className={`${s.brands__item}`}>
                <div
                  className={`${s.categories__item_hoverEffect} `}
                  onClick={() => onClick(el.value, SidebarCondition.brand)}
                >
                  <Checkbox
                    checked={el.checked}
                    onChange={() => toggleChange(el.checked, id, el.value, SidebarCondition.brand)}
                  >
                    <div className={`${s.sidebar__text} ${s.brands__name}`}>{el.value}</div>
                  </Checkbox>
                </div>
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
              <li key={id} className={`${s.brands__item}`}>
                <div
                  className={`${s.categories__item_hoverEffect} `}
                  onClick={() => onClick(el.value, SidebarCondition.rating)}
                >
                  <Checkbox
                    checked={el.checked}
                    onChange={() => toggleChange(el.checked, id, el.value, SidebarCondition.rating)}
                  >
                    <Rate disabled defaultValue={el.value} />
                  </Checkbox>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.price}>
        <h3 className={s.sidebar__topic}>Price</h3>
        <Slider
          range
          min={Math.floor(price[0])}
          max={Math.ceil(price[1])}
          value={[input.priceMin, input.priceMax]}
          onChange={(e) => multSelect(e)}
        />
        <div className={s.sidebar__buttons}>
          <div className={s.price__button}>
            <span> Min</span>{" "}
            <InputNumber
              step={3}
              min={Math.floor(price[0])}
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
              max={Math.ceil(price[1])}
              value={input.priceMax}
              onChange={(e) => onChange(e, "priceMax")}
            />
          </div>
        </div>
      </div>
      <div onClick={buttonReset} className={s.reset}>
        <span>Reset</span>
      </div>
    </aside>
  );
};

export default Categories;
