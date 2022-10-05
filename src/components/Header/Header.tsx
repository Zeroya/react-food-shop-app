import React, { FC } from "react";
import frechnesecom from "@assets/icons/Freshnesecom.svg";
import human from "@assets/icons/human.png";
import { Input, Select } from "antd";
import { product, checkout } from "@constants";
import { selectArr } from "mockedData/mockedData";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const { Option } = Select;

  return (
    <div className={s.header}>
      <div className={s.info}>
        <div className={s.info__contacts}>
          <p>Chat with us</p>
          <a className={s.info__reference} href="tel:+420336775664">
            +420 336 775 664
          </a>
          <a className={s.info__reference} href="mailto:info@freshnesecom.com">
            info@freshnesecom.com
          </a>
        </div>
        <div className={s.info__links}>
          <Link className={s.info__reference} to="/">
            Blog
          </Link>
          <Link className={s.info__reference} to={product + 1234}>
            About Us
          </Link>
          <Link className={s.info__reference} to={checkout}>
            Careers
          </Link>
        </div>
      </div>
      <hr />
      <div className={s.search}>
        <div className={s.search__logo}>
          <img src={frechnesecom} />
        </div>
        <div className={s.search__input}>
          <Input.Group compact>
            <Select className={s.search__select} defaultValue="All categories">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input
              suffix={<SearchOutlined />}
              className={s.search__input_form}
              placeholder="Search Products, categories ..."
            />
          </Input.Group>
        </div>
        <div className={s.search__icons}>
          <img src={human} />
          <ShoppingCartOutlined className={s.search__icons_width} />
        </div>
      </div>
      <div className={s.select}>
        {selectArr.map((el) => (
          <Select key={el} defaultValue={el} bordered={false} className={s.select__dropdown}>
            <Option value="option 1">option 1</Option>
            <Option value="option 2">option 2</Option>
            <Option value="option 3">option 3</Option>
          </Select>
        ))}
      </div>
    </div>
  );
};

export default Header;
