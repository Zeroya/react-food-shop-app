import React from "react";
import { Select } from "antd";
import { sortArr } from "mockedData/mockedData";
import { useAppDispatch } from "@hooks/hooks";
import { setSortValue } from "@store/reducers/UserSlice";
import s from "./SortSelect.module.scss";
import "./selector.css";

const SortSelect = () => {
  const { Option } = Select;
  const dispatch = useAppDispatch();

  function handleChange(value: string) {
    dispatch(setSortValue(value));
  }

  return (
    <div className={s.sortSelect}>
      <div className={s.sortSelect__text}>
        <p>Sort by</p>
      </div>
      <div className={s.sortSelect__divider}>
        <p>.</p>
      </div>
      <Select defaultValue="Select" className="sortSelect__select" onChange={handleChange}>
        {sortArr.map((el) => (
          <Option value={el.name}>{el.name}</Option>
        ))}
      </Select>
    </div>
  );
};

export default SortSelect;
