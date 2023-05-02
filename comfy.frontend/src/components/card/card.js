import React from "react"
//components
import Icon     from "../icon/icon";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
//style
import './card.scss'
//images
import I1 from '../../assets/images/TestProduct/w_600.jpg'
import I2 from '../../assets/images/TestProduct/w_601.jpg'
import I3 from '../../assets/images/TestProduct/w_602.jpg'





const Card = (props) => {

    const prevImgs = [I1,I2,I3];

    let prevImgsList = [];

    prevImgs.forEach((prev, index) => {
        prevImgsList.push(<CarouselItem key={index}><img src={prev}/></CarouselItem>);
    });


  return (
    <div className="list-item">
        <div className="list-item-header">
            <div className="list-item-promo-label">
                Хiт продаж
            </div>
            <div className="list-item-list-control">
                <div className="control-compare control-item">
                    <Icon id="compare" className="card-icon"/>
                </div>
                <div className="control-wishlist control-item" >
                    <Icon id="wishlist" className="card-icon" />  
                </div>
            </div>
        </div>
        <div className="list-item-img">
            <a  className="img-link">
                <div className="img-carousel">
                    <Carousel interval={null} variant="dark">
                        {prevImgsList}
                    </Carousel>
                </div>
            </a>
        </div>
        <div className="list-item-info">
            <a href="#" >Ноутбук ігровий Lenovo IdeaPad Gaming 3 15ACH6 (82K201B9RA) Shadow Black</a>
            <div className="list-item-info-content">
                <div className="content-feedback-labels">
                    <div className="content-feedback">
                        <div className="content-rating">

                        </div>
                        <div className="content-comments">

                        </div>
                    </div>
                    <div className="content-labels">

                    </div>
                </div>
                <div className="content-price-actions">
                    <div className="content-price-actions-content"> 
                        <div className="actions-content-price">
                            <div className="actions-content-price-old">
                                35 999 ₴
                                <span className="actions-content-price-discount">
                                    -17%
                                </span>
                            </div>
                            <div className="actions-content-price-current">
                                29 999 
                                <span className="actions-content-price-currency">
                                    ₴
                                </span>
                            </div>
                        </div>
                        <div className="actions-content-btn">
                            <button className="list-item-btn">
                                <Icon id="cart" className="card-btn-icon"/>  
                            </button>
                        </div>
                    </div>
                    <div className="content-price-actions-annotations">
                    <div className="bonus">
                        <div className="bonus-label">
                            <i className="icon-comfy bonus-label__icon icon-comfy__bonus"></i>
                            <span className="bonus-label-value">+300 ₴</span>
                            <span className="bonus-label-text">на бонусний рахунок</span>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
