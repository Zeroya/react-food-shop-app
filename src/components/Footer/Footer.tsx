import React, { FC } from "react";
import { tagsArr, infoArr } from "mockedData/mockedData";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.info}>
        {infoArr.map((el) => (
          <div key={el.header} className={s.info__section}>
            <h2>{el.header}</h2>
            {el.text.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        ))}
      </div>
      <div className={s.tags}>
        <h2>Product tags</h2>
        <div className={s.tags__list}>
          {tagsArr.map((tag) => (
            <div className={s.tags__shape} key={tag}>
              <p className={s.tags__text}>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={s.copyright}>
        <p>Copyright © 2020 petrbilek.com</p>
      </div>
    </div>
  );
};

export default Footer;
