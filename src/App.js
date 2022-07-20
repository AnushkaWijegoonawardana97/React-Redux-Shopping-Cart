import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import Shop from "./components/shop/Shop";
import { Provider } from "react-redux";
import store from "./store";
import Wishlist from "./components/wishlist/Wishlist";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
