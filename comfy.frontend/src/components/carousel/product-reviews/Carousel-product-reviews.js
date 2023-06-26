import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';

//style
import "./Carousel-product-reviews.scss"


const CarouselProductReviews = ({
    setVisibleSlides,
    items,
    sliderClass,
    slideClass,
}) => {

    const [isDisplayNone, setIsDisplayNone] = useState(true)

    const displayNone = () => {
        setIsDisplayNone(!isDisplayNone);
    }




    return (
        <CarouselProvider
            visibleSlides={setVisibleSlides}
            totalSlides={items.length}
            step={1}
            currentSlide={0}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            isIntrinsicHeight={true}
            dragEnabled = {false}
        >
            <Slider className={sliderClass} >
                <Slide className={slideClass}  index={0} key={0}>
                      
                </Slide>
            </Slider>
        </CarouselProvider>
    );
}

CarouselProductReviews.propTypes = {
    setVisibleSlides: PropTypes.number,
    items: PropTypes.array,
    sliderClass: PropTypes.string,
    slideClass: PropTypes.string,
    dotClass: PropTypes.string,
};

CarouselProductReviews.defaultProps = {
    setVisibleSlides: 1,
    items: [],
    sliderClass: "",
    slideClass: "",
    dotClass: "",
};

export default CarouselProductReviews;