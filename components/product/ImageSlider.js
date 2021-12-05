import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import imagestyles from "./imageStyle.module.css";
export default class ImageSlider extends Component {
  render() {
    const settings = {
      pauseOnHover:true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      fade:true,
      speed: 500,
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className={imagestyles.card}>
                <img src={this.props.img1Slider} alt="onlineceo"/>
            </div>
            
          </div>
          <div>
            <div className={imagestyles.card}>
              <img src={this.props.img2Slider} alt="ceo"/>
            </div>
          </div>
          <div>
            <div className={imagestyles.card}>
              <img src={this.props.img3Slider} alt="مدیریت آنلاین"/>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
