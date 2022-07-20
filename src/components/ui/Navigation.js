import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import classes from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <div className={classes.navigation_menu}>
      <Link to='/' className={classes.home}>
        <span>
          <FontAwesomeIcon icon={faHouse} />
        </span>
      </Link>

      <Link to='/wishlist' className={classes.wish_list}>
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </Link>

      <Link to='/cart' className={classes.open_cart}>
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
      </Link>
    </div>
  );
};

Navigation.propTypes = {};

export default connect(null, {})(Navigation);
