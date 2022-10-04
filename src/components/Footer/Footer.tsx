import React, { FC } from "react";
import { tagsArr, infoArr } from "@constants";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.infoBlock}>
        {infoArr.map((el) => {
          return (
            <div className={s.infoBlock_section}>
              <h2>{el.header}</h2>
              {el.text.map((text) => (
                <p>{text}</p>
              ))}
            </div>
          );
        })}
      </div>
      <div className={s.tagsBlock}>
        <h2>Product tags</h2>
        <div className={s.tagsBlock_list}>
          {tagsArr.map((tag) => {
            return (
              <div>
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.CopyrightBlock}>
        <p>Copyright © 2020 petrbilek.com</p>
      </div>
    </div>
  );
};

export default Footer;
