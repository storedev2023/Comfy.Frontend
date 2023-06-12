
import './carousel_w_cards.scss'

import React from "react";
import Slider from "react-slick";
//components
import Icon     from "../icon/icon";
import CarouselCard from '../card/carousel_card'

const CarouselWithCards = (props) => {
    var settings = {
        infinite: false,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
      };

    return (
      <div>
        <Slider {...settings}>
            <div>
                <CarouselCard/>
            </div>
            <div>
                <CarouselCard/>
            </div>
            <div>
                <CarouselCard/>
            </div>
            <div>
                <CarouselCard/>
            </div>
            <div>
                <CarouselCard/>
            </div>
            <div>
                <CarouselCard/>
            </div>
            <div>
                <CarouselCard/>
            </div>
            <div>
                <CarouselCard/>
            </div>
        </Slider>
      </div>
    );
  }
  
  export default CarouselWithCards;