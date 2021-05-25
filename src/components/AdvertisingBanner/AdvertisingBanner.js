import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useStyles from "./styles";

import BannerNike from "../../assets/banner-nike.jpg";
import BannerAdidas from "../../assets/banner-adidas.jpg";
import BannerJordan from "../../assets/banner-jordan.jpg";
import BannerNewBalance from "../../assets/banner-new-balance.jpg";
import BannerAdidas2 from "../../assets/banner-adidas-2.jpg";

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
    autoplaySpeed: 4000
  };

  return (
    <div className={classes.content}>
      <Slider {...settings}>
        <div>
          <img className={classes.image} alt="banner-nike" src={BannerNike} />
        </div>
        <div>
          <img className={classes.image} alt="banner-adidas" src={BannerAdidas} />
        </div>
        <div>
          <img className={classes.image} alt="banner-jordan" src={BannerJordan} />
        </div>
        <div>
          <img className={classes.image} alt="banner-new-balance" src={BannerNewBalance} />
        </div>
        <div>
          <img className={classes.image} alt="banner-adidas-2" src={BannerAdidas2} />
        </div>
      </Slider>
    </div>
  );
}

export default AdvertisingBanner;
