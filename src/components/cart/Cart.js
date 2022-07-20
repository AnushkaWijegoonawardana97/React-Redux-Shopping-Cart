import React from "react";
import { connect } from "react-redux";
import Navigation from "../ui/Navigation";
import Classes from "./Cart.module.scss";
import CartItem from "./CartItem";

export const Cart = () => {
  return (
    <section className={Classes.cart_page}>
      <Navigation />

      <div className={Classes.cartpage_inner_container}>
        <h1></h1>

        <div className={Classes.cart_itme_grid}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className={Classes.cart_footer}></div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
