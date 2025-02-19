"use client";

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

import useStyles from "./styles";

function Product({ product }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />

      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body1" className={classes.productName}>
            {product.name}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Typography variant="body1" className={classes.productPrice}>
          {product.price.formatted_with_symbol}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Product;
