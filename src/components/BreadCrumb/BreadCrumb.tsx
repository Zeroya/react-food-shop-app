import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import s from "./BreadCrumb.module.scss";

const BreadCrumb: FC = () => {
  return (
    <div className={s.breadCrumb}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Homepage</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">All products</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
