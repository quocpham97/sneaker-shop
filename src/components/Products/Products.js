import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";
import { AdvertisingBanner, Category } from "..";

function Products({ categories, products, onAddToCart, onSelectCategory, selectedCategory }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <AdvertisingBanner />
      <Category
        categories={categories}
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
      />
      {products.length === 0 ? (
        <div className={classes.spinner}>
          <CircularProgress style={{ color: "#2d3436" }} />
        </div>
      ) : null}

      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
