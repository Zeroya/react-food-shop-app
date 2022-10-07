import React, { FC } from "react";
import { tagsArr, infoArr } from "mockedData/mockedData";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.info}>
        {infoArr.map((el) => (
          <ul key={el.header} className={s.info__section}>
            <li>{el.header}</li>
            {el.text.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className={s.tags}>
        <h2 className={s.tags__header}>Product tags</h2>
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
