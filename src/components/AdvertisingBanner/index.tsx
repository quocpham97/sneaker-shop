"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useStyles from "./styles";

function AdvertisingBanner() {
  const classes = useStyles();

  const settings = {
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    draggable: false,
    pauseOnHover: false,
    autoplaySpeed: 4000,
  };

  return (
    <div className={classes.content}>
      <Slider {...settings}>
        <div>
          <img
            className={classes.image}
            alt="banner-nike"
            src={"../../assets/banner-nike.jpg"}
          />
        </div>
        <div>
          <img
            className={classes.image}
            alt="banner-adidas"
            src={"../../assets/banner-adidas.jpg"}
          />
        </div>
        <div>
          <img
            className={classes.image}
            alt="banner-jordan"
            src={"../../assets/banner-jordan.jpg"}
          />
        </div>
        <div>
          <img
            className={classes.image}
            alt="banner-new-balance"
            src={"../../assets/banner-new-balance.jpg"}
          />
        </div>
        <div>
          <img
            className={classes.image}
            alt="banner-adidas-2"
            src={"../../assets/banner-adidas-2.jpg"}
          />
        </div>
      </Slider>
    </div>
  );
}

export default AdvertisingBanner;
