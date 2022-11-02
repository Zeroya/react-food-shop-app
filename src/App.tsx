import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import AllProducts from "@pages/AllProducts";
import Product from "@pages/Product";
import CheckOut from "@pages/CheckOut";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/Allproducts" element={<AllProducts />} />
        <Route path="/Allproducts/:productId" element={<Product />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route>404 not found</Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
