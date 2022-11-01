import React, { FC } from "react";
import BreadCrumb from "@components/BreadCrumb";
import BillingInfo from "@components/BillingInfo/BillingInfo";
import OrderSummary from "@components/OrderSummary/OrderSummary";

const CheckOut: FC = () => {
  return (
    <div>
      <BreadCrumb />
      <BillingInfo />
      <OrderSummary />
    </div>
  );
};

export default CheckOut;
