import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';

//style
import "./Carousel-product-imgs.scss"


const CarouselProductImages = ({
    setVisibleSlides,
    items,
    sliderClass,
    slideClass,
    isDot,
    dotClass,
}) => {

    const [isDisplayNone, setIsDisplayNone] = useState(true)

    const displayNone = () => {
        setIsDisplayNone(!isDisplayNone);
    }

    useEffect(() => {
        const slides = document.querySelectorAll('[aria-label="slide"]')
        slides.forEach(slide => {  
            
            if(slide.getAttribute("tabindex") != 0){
                slide.classList.add('display-none')
            }
            else{ 
                slide.classList.remove('display-none')    
            }
        })
    },[items,isDisplayNone])


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
                {items?.map(image => (
                    <Slide className={slideClass}  index={items?.indexOf(image)} key={items?.indexOf(image)}>
                        <img src={image.url} />
                    </Slide>
                ))}
                {isDot && 
                <div className="product-page-slider-dot-list">                    
                    {items?.map(image => (
                        <Dot onClick={displayNone} className={dotClass} slide={items?.indexOf(image)} key={items?.indexOf(image)}>
                            <img src={image.url} />
                        </Dot>
                    ))}
                </div>
                }
            </Slider>
        </CarouselProvider>
    );
}

CarouselProductImages.propTypes = {
    setVisibleSlides: PropTypes.number,
    items: PropTypes.array,
    sliderClass: PropTypes.string,
    slideClass: PropTypes.string,
    dotClass: PropTypes.string,
    isDot: PropTypes.bool,
};

CarouselProductImages.defaultProps = {
    setVisibleSlides: 1,
    items: [],
    sliderClass: "",
    slideClass: "",
    dotClass: "",
    isDot: false,
};

export default CarouselProductImages;