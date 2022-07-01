import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import Shop from "./components/shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
