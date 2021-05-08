import React from "react";
import Slider from "react-slick";
import { Product } from "../..";
import { Typography } from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slick.css";

import useStyles from "./styles";

function RelatedProduct({ relatedProducts }) {
  const classes = useStyles();

  var settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          draggable: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          draggable: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: false
        }
      }
    ]
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Related products
      </Typography>
      <div className={classes.container}>
        <Slider {...settings}>
          {relatedProducts.map((product) => (
            <div className={classes.itemContainer} key={product.id}>
              <div className={classes.item}>
                <Product product={product} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RelatedProduct;
