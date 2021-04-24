import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import useStyles from "./styles";

import BannerNike from "../../assets/banner-nike.jpg";
import BannerAdidas from "../../assets/banner-adidas.jpg";
import BannerJordan from "../../assets/banner-jordan.jpg";
import BannerNewBalance from "../../assets/banner-new-balance.jpg";
import BannerAdidas2 from "../../assets/banner-adidas-2.jpg";

function AdvertisingBanner() {
  const classes = useStyles();

  const settings = {
    autoPlay: true,
    showThumbs: false,
    swipeable: true,
    infiniteLoop: true,
    emulateTouch: true,
    showStatus: false,
    showArrows: false,
    interval: 5000
  };
  return (
    <div className={classes.content}>
      <Carousel {...settings}>
        <div>
          <img alt="banner-nike" src={BannerNike} />
        </div>
        <div>
          <img alt="banner-adidas" src={BannerAdidas} />
        </div>
        <div>
          <img alt="banner-jordan" src={BannerJordan} />
        </div>
        <div>
          <img alt="banner-new-balance" src={BannerNewBalance} />
        </div>
        <div>
          <img alt="banner-adidas-2" src={BannerAdidas2} />
        </div>
      </Carousel>
    </div>
  );
}

export default AdvertisingBanner;
