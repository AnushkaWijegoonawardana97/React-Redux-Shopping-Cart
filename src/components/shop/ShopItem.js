import React from "react";
import PropTypes from "prop-types";
import {
  faHeart,
  faStar,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ShopItem.module.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ShopItem = ({
  product: { id, title, price, category, image, rating },
}) => {
  let editedTitle = "";

  if (title.length > 37) {
    editedTitle = `${title.slice(0, 37)}...`;
  } else {
    editedTitle = title;
  }

  console.log(editedTitle);

  return (
    <div className={classes.shop_item} id={id}>
      <div className={classes.shop_item_top}>
        <a className={classes.shop_item_fav} href='/'>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </a>

        <img src={image} alt={title} />

        <button className={classes.addtocart_btn}>
          <span>Add to cart</span>
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </button>
      </div>

      <div className={classes.shop_item_bottom}>
        <div className={classes.product_details}>
          <h3>
            <Link to={`/${id}`} title={title}>
              {" "}
              {editedTitle}
            </Link>
          </h3>

          <p className={classes.product_category}>{category}</p>
        </div>

        <div className={classes.product_values}>
          <div className={classes.product_price}>{price} $</div>

          <div className={classes.product_ratings}>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>

            <span>{rating.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default connect(null, {})(ShopItem);
