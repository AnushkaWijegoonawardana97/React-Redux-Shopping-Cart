import React, { useEffect } from "react";
import ShopItem from "./ShopItem";
import classes from "./ShopContainer.module.scss";
import { connect } from "react-redux";
import { getProducts } from "../../actions/product";
import PropTypes from "prop-types";
import Navigation from "../ui/Navigation";
import { PropagateLoader } from "react-spinners";

function ShopContainer({ getProducts, products: { products, loading } }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section className={classes.shop_section}>
      <Navigation />
      {loading ? (
        <div className='loader'>
          <PropagateLoader color='#d35400' size={32} speedMultiplier={1} />
        </div>
      ) : (
        <section className={classes.shop_grid}>
          {products.map((product) => (
            <ShopItem key={product.id} product={product} />
          ))}
        </section>
      )}
    </section>
  );
}

ShopContainer.propTypes = {
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts })(ShopContainer);
