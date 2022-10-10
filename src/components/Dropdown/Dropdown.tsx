import React, { FC } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { IDropDown } from "@models/ICard";
import { Dropdown, Menu, message, Space } from "antd";
import "./DropDown.css";

const onClick: MenuProps["onClick"] = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const DropDown: FC<IDropDown> = ({ menu, tag }) => (
  <Dropdown overlay={<Menu onClick={onClick} items={[...menu]} />} className="dropdown">
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {tag}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDown;
