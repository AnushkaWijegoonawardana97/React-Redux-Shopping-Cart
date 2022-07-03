import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../actions/product";
import { useLocation } from "react-router-dom";

export const Product = ({ getProduct, products: { product, loading } }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const productId = pathname.substr(1, pathname.length);
  useEffect(() => {
    getProduct(productId);
  }, [getProduct]);

  return <div>tttt</div>;
};

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProduct })(Product);
