import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../actions/product";
import { useLocation } from "react-router-dom";
import classes from "./Product.module.scss";
import Navigation from "../ui/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Product = ({ getProduct, products: { product, loading } }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const productId = pathname.substr(1, pathname.length);
  console.log(product);
  useEffect(() => {
    getProduct(productId);
  }, [getProduct]);

  return (
    <Fragment>
      {loading ? (
        <p>Loading</p>
      ) : (
        <section className={classes.productpage_container}>
          <Navigation />

          <div className={classes.productpage_grid_container}>
            <div
              className={classes.productpage_image}
              style={{ backgroundImage: `url(${product.image})` }}></div>

            <div className={classes.productpage_description}>
              <div>
                <h1 className={classes.productpage_title}>{product.title}</h1>
                <p className={classes.productpage_category}>
                  {product.category}
                </p>
              </div>

              <div className={classes.productpage_review_grid}>
                <div className={classes.productpage_review_count}>
                  {product.rating.count} Reviews
                </div>

                <div className={classes.productpage_review_rating_grid}>
                  <div className={classes.productpage_review_average}>
                    {product.rating.rate}
                  </div>

                  <div className={classes.productpage_review_stars}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>

              <div className={classes.productpage_description_text}>
                {product.description}
              </div>

              <div className={classes.productpage_prices}>
                {product.price} $
              </div>

              <div className={classes.productpage_cta_buttons}>
                <button className={classes.productpage_cart_button}>
                  Add To Cart
                </button>

                <button className={classes.productpage_wishlist_button}>
                  Add To Wist List
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProduct })(Product);
