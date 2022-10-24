import React, { FC } from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { firstLetterStrUpperCase } from "@utils/firstLetterStrUpperCase";
import s from "./BreadCrumb.module.scss";

const BreadCrumb: FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((item) => item);

  const extraBreadcrumbItems = pathSnippets.map((name, index) => {
    const url = `/${pathSnippets
      .map((el) => el.split(" ").join(""))
      .map((el) => el.replace("%20", ""))
      .slice(0, index + 1)
      .join("/")}`;
    const completeName = name === "Allproducts" ? "All products" : firstLetterStrUpperCase(name.replace("%20", " "));

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{completeName}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <div className={s.breadCrumb}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Homepage</Link>
        </Breadcrumb.Item>
        {pathSnippets.length > 0 ? (
          <>{extraBreadcrumbItems}</>
        ) : (
          <Breadcrumb.Item>
            <Link to="/">All products</Link>
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
