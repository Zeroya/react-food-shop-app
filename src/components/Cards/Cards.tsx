import React, { FC } from "react";
import { Link } from "react-router-dom";

const Cards: FC = () => {
  return (
    <div>
      <Link to="/product/1234">Cards</Link>
    </div>
  );
};

export default Cards;
