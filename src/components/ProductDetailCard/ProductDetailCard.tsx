import React, { FC } from "react";
import { Link } from "react-router-dom";
import { checkout } from "@constants";

const ProductDetailCard: FC = () => {
  return (
    <div>
      <Link to={checkout}>ProductDetailCard</Link>
    </div>
  );
};

export default ProductDetailCard;
