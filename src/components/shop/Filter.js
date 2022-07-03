import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../actions/category";
import { connect } from "react-redux";

import classes from "./Filter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { PropagateLoader } from "react-spinners";

function Filter({ getCategories, categories: { categories, loading } }) {
  const [priceRange, setPriceRange] = useState(0);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const onPriceSliderInputHandler = (e) => {
    console.log(e.target.value);
    setPriceRange(e.target.value);
  };

  return (
    <section className={classes.filter_section}>
      <section className={classes.filter_category_section}>
        <h3 className={classes.filter_category_title}>Filter by category :</h3>

        <div className={classes.filter_button_section}>
          {loading ? (
            <div className='loader'>
              <PropagateLoader color='#d35400' size={16} speedMultiplier={1} />
            </div>
          ) : (
            categories.map((category) => (
              <button className={classes.filter_button_item}>
                <span>{category}</span>
                <span>
                  <FontAwesomeIcon icon={faCirclePlus} />
                </span>
              </button>
            ))
          )}
        </div>
      </section>

      <section className={classes.filter_category_section}>
        <h3 className={classes.filter_category_title}>Filter by price :</h3>

        <div className={classes.price_slider}>
          <input
            className={classes.price_slider_range}
            type='range'
            name=''
            id=''
            min='0'
            max='1500'
            step='10'
            onInput={onPriceSliderInputHandler}
          />
          <div className={classes.filter_value}>$0 - ${priceRange}</div>
        </div>
      </section>
    </section>
  );
}

Filter.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(Filter);
