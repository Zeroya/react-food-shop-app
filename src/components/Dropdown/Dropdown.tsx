import React, { FC } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { IDropDown } from "@models/ICard";
import { addDropDownValues, addFilterValues } from "@store/reducers/UserSlice";
import { useAppDispatch } from "@hooks/hooks";
import { Dropdown, Menu, Space } from "antd";
import "./DropDown.css";

const DropDown: FC<IDropDown> = (down) => {
  const dispatch = useAppDispatch();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    dispatch(addDropDownValues([down.menu[Number(key) - 1].label, down.tag]));
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

  return (
    <Dropdown overlay={<Menu onClick={onClick} items={[...down.menu]} />} className="dropdown">
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {down.tag}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;
