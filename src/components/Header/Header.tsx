import React, { FC } from "react";
import frechnesecom from "@assets/icons/Freshnesecom.svg";
import human from "@assets/icons/human.png";
import { Input, Select } from "antd";
import { selectArr } from "@constants";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import s from "./Header.module.scss";

const Header: FC = () => {
  const { Option } = Select;

  return (
    <div className={s.header}>
      <div className={s.infoBlock}>
        <div className={s.infoBlock_contacts}>
          <p>Chat with us</p>
          <p>+420 336 775 664</p>
          <p>info@freshnesecom.com</p>
        </div>
        <div className={s.infoBlock_links}>
          <p>Blog</p>
          <p>About Us</p>
          <p>Careers</p>
        </div>
      </div>
      <hr />
      <div className={s.searchBlock}>
        <div className={s.searchBlock_logoText}>
          <img src={frechnesecom} />
        </div>
        <div className={s.searchBlock_input}>
          <Input.Group compact>
            <Select className={s.searchBlock_input_select} defaultValue="All categories">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input
              style={{ width: "50%" }}
              suffix={<SearchOutlined />}
              className={s.searchBlock_input_search}
              placeholder="Search Products, categories ..."
            />
          </Input.Group>
        </div>
        <div className={s.searchBlock_icons}>
          <img src={human} />
          <ShoppingCartOutlined style={{ fontSize: "30px", paddingTop: "8px" }} />
        </div>
      </div>
      <div className={s.selectBlock}>
        {selectArr.map((el) => {
          return (
            <Select
              defaultValue={el}
              bordered={false}
              style={{ width: "auto", fontWeight: 800, fontSize: 18, color: "#151515", fontFamily: "Poppins" }}
            >
              <Option value="option 1">option 1</Option>
              <Option value="option 2">option 2</Option>
              <Option value="option 3">option 3</Option>
            </Select>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
