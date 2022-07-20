import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import classes from "./CartItem.module.scss";

export const CartItem = () => {
  return (
    <div className={classes.cart_item_container}>
      <div className={classes.cart_item_image}>
        <img
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          alt=''
        />
      </div>

      <div className={classes.cart_item_description}>
        <div className={classes.cart_item_description_top}>
          <h3 className={classes.cart_item_title}>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h3>

          <div className={classes.cart_item_category}>men's clothing</div>
        </div>

        <div className={classes.cart_item_description_bottom}>
          <div className={classes.cart_item_price}>109.95 $</div>

          <div className={classes.cart_item_action}>
            <button className={classes.cart_item_add}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>

            <div className={classes.cart_item_count}>01</div>

            <button className={classes.cart_item_remove}>
              <FontAwesomeIcon icon={faMinusCircle} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
