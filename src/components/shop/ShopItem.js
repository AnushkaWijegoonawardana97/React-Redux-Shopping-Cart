import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./ShopItem.module.scss";

function ShopItem() {
  return (
    <div className={classes.shop_item}>
      <div className={classes.shop_item_top}>
        <a className={classes.shop_item_fav} href='/'>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </a>
        <img
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          alt=''
        />
      </div>

      <div className={classes.shop_item_bottom}>
        <div className={classes.product_details}>
          <h3>
            <a href='/'>
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </a>
          </h3>

          <p className={classes.product_category}>men's clothing</p>
        </div>

        <div className={classes.product_values}>
          <div className={classes.product_price}>109.95 $</div>

          <div className={classes.product_ratings}>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>

            <span>3.9</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
