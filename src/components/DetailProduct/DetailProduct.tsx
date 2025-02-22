"use client";

import React, { useEffect, useState } from "react";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import RelatedProduct from "./RelatedProduct/RelatedProduct";

import useStyles from "./styles";

function DetailProduct({ onAddToCart, onRefreshProducts }) {
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const [isSelectedSize, setIsSelectedSize] = useState(false);
  const [optionId, setOptionId] = useState("");

  // const loadProduct = async () => {
  //   const response = await commerce.products.retrieve(productId);
  //   setProduct(response);
  //   onRefreshProducts();
  // };

  const handleSelectSize = (value, optionId) => {
    setSize(value);
    setIsSelectedSize(false);
    setOptionId(optionId);
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 10) setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    if (!size) setIsSelectedSize(true);
    else {
      var options = {};
      options[(product as any).variant_groups[0].id] = optionId;
      onAddToCart((product as any).id, quantity, options);
    }
  };

  useEffect(() => {
    setProduct({});
    setSize(undefined);
    setOptionId("");
    setQuantity(1);
    // loadProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {(product as any).price && product ? (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} md={8} className={classes.mediaContainer}>
              <img
                className={classes.media}
                src={(product as any).media.source}
                alt={(product as any).name}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" gutterBottom>
                {(product as any).name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {(product as any).price.formatted_with_symbol}
              </Typography>
              <div className={classes.selectSize}>
                <Typography variant="body1" gutterBottom>
                  SELECT SIZE
                </Typography>
                <div className={classes.buttons}>
                  {(product as any).variant_groups
                    .filter((vg) => vg.name === "Size")[0]
                    .options.map((op) => (
                      <Button
                        type="button"
                        variant="outlined"
                        key={op.id}
                        className={`${classes.buttonSize} ${
                          op.name === size ? classes.buttonSelectedSize : null
                        }`}
                        onClick={() => handleSelectSize(op.name, op.id)}
                      >
                        {op.name}
                      </Button>
                    ))}
                </div>
                {isSelectedSize && (
                  <Typography className={classes.missingSelectSize}>
                    Please select your size
                  </Typography>
                )}
              </div>
              <div className={classes.selectQuantity}>
                <Typography variant="body1" gutterBottom>
                  QUANTITY
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    type="button"
                    variant="outlined"
                    className={classes.buttonQuantity}
                    onClick={() => handleDecreaseQuantity()}
                  >
                    -
                  </Button>
                  <Typography className={classes.quantity}>
                    {quantity}
                  </Typography>
                  <Button
                    type="button"
                    variant="outlined"
                    className={classes.buttonQuantity}
                    onClick={() => handleIncreaseQuantity()}
                  >
                    +
                  </Button>
                </div>
              </div>
              <Button
                type="button"
                variant="outlined"
                className={classes.addToCart}
                onClick={() => handleAddToCart()}
              >
                <Typography>ADD TO CART</Typography>
              </Button>
            </Grid>
          </Grid>
          <RelatedProduct
            relatedProducts={(product as any).related_products}
          ></RelatedProduct>
        </div>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress style={{ color: "#2d3436" }} />
        </div>
      )}
    </main>
  );
}

export default DetailProduct;
