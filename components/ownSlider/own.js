import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageSliderStyles from "./own.module.css";


export default class own extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      fade: true,
      lazyLoad: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className={imageSliderStyles["container"]}>
          <Slider {...settings}>
            <div>
              
              <div className={imageSliderStyles["img"]}>
                <img
                  src="./images/office01.jpg"
                  alt="online ceo"
                />
              </div>
            </div>
            <div>
              <div className={imageSliderStyles["img"]}>
                <img
                  src="./images/office02.jpg"
                  alt="طراحی نرم افزار"
                />
              </div>
            </div>
            <div>
              <div className={imageSliderStyles["img"]}>
                <img
                  src="./images/office03.jpg"
                  alt="برنامه نویسی"
                />
              </div>
              
            </div>


            <div>
              <div className={imageSliderStyles["img"]}>
                <img
                  src="./images/office04.jpg"
                  alt=""
                />
              </div>
              
            </div>

            
          </Slider>
        </div>
      </div>
    );
  }
}
