import React from "react";
import ShopItem from "./ShopItem";
import classes from "./ShopContainer.module.scss";

function ShopContainer() {
  return (
    <section className={classes.shop_section}>
      <div>Header</div>
      <section className={classes.shop_grid}>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </section>
    </section>
  );
}

export default ShopContainer;
