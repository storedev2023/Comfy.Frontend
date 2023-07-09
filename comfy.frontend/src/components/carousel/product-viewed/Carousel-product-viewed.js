import React from "react"
import { useSelector } from "react-redux";

import Card from "../../card/Card";
import Slider from "react-slick"


//style
import "./Carousel-product-viewed.scss"
import Icon from "../../icon/icon";



const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { onClick } = props;
    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <Icon id="slider-arrow-left" className={currentSlide === 0 ? "carousel-fist-slide" : undefined}/>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const {  onClick } = props;
    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <Icon id="slider-arrow-right" className={currentSlide === slideCount-4 ? "carousel-last-slide" : undefined} />
      </div>
    );
  };

const CarouselProductViewed = () => {


    // Received products that were viewed by the user and reversed.
    const products = useSelector(state => state.v_product.itemsInViewedProductsSlider)

    const settings = {
      
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <GalleryNextArrow />,
        prevArrow: <GalleryPrevArrow />
      };

    return (
    <div className="test-slick-slider">
        <Slider {...settings}>
            {products?.map(product => (
                 <Card product={product} slider={false} hover={false} key={product.id}/>
            ))}
        </Slider>
    </div>
    );
}

export default CarouselProductViewed;