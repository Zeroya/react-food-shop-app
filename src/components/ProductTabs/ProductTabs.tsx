import React, { FC } from "react";
import { ICard } from "@models/ICard";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import s from "./ProductTabs.module.scss";

const ProductTabs: FC<{ product: ICard }> = ({ product }) => {
  const styles = {
    activeLinkStyle: {
      borderBottom: "2px solid #333",
    },
    visibleTabStyle: {
      display: "inline-block",
    },
  };

  return (
    <div className={s.item__tabs}>
      <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle}>
        <div className={s.item__links}>
          <TabLink to="tab1" className={s.item__tabLink}>
            <h3 className={s.item__tabLink_text}>Description </h3>
          </TabLink>
          <TabLink to="tab2" className={s.item__tabLink}>
            <h3 className={s.item__tabLink_text}> Reviews</h3>
            <span>{product.reviews.length}</span>
          </TabLink>
          <TabLink to="tab3" className={s.item__tabLink}>
            <h3 className={s.item__tabLink_text}> Questions</h3>
            <span>{product.questions.length}</span>
          </TabLink>
        </div>
        <div className={s.item__content}>
          <TabContent for="tab1" className={s.item__tabContent}>
            <h3>Origins</h3>
            <p>{product.description}</p>
            <h3>How to cook</h3>
            <p>{product.description}</p>
          </TabContent>
          <TabContent for="tab2" className={s.item__tabContent}>
            <div className={`${s.item__messageContainer} ${product.reviews.length < 3 && s.scrollDefault}`}>
              {product.reviews.map((el) => (
                <div className={s.item__message}>{el}</div>
              ))}
            </div>
          </TabContent>
          <TabContent for="tab3" className={s.item__tabContent}>
            <div className={`${s.item__messageContainer} ${product.questions.length < 3 && s.scrollDefault}`}>
              {product.questions.map((el) => (
                <div className={s.item__message}>{el}</div>
              ))}
            </div>
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
