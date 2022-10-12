import React, { FC, ChangeEvent, useState, useEffect } from "react";
import frechnesecom from "@assets/icons/Freshnesecom.svg";
import human from "@assets/icons/human.png";
import { Input, Select } from "antd";
import { useAppDispatch } from "@hooks/hooks";
import { addSearchValue, addDropDownValues } from "@store/reducers/UserSlice";
import { product, checkout } from "@constants";
import { selectArr, searchArr } from "mockedData/mockedData";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import DropDown from "@components/Dropdown/Dropdown";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const { Option } = Select;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const onChange = (value: string) => {
    dispatch(addDropDownValues([value]));
  };

  useEffect(() => {
    dispatch(addSearchValue(search));
  }, [search]);

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
            <Select className={s.search__select} onChange={onChange} defaultValue="All categories">
              {searchArr.map((el) => (
                <Option value={el.toLowerCase()}>{el}</Option>
              ))}
            </Select>
            <Input
              value={search}
              onChange={handleChange}
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
        <ul>
          {selectArr.map((el) => (
            <li>
              <DropDown tag={el.tag} menu={el.menu} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
