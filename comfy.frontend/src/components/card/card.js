import React, { useEffect, useState } from "react"
//components
import Icon     from "../icon/icon";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
//style
import './Card.scss'
import { Link } from "react-router-dom";

//images





const Card = ({product}) => {
    

    const [productDiscount, setProductDiscount] = useState (product.discountAmount > 0)
    const [productImages, setProductImages] = useState(product.images.length != 0)

    let prevImgsList = [];

    // product.images.forEach((prev, index) => {
    //     console.log(prev)
    //     prevImgsList.push(<CarouselItem key={index}><img src={prev.url}/></CarouselItem>);
    // });

    
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
                    {productImages                      
                        ? <Carousel interval={null} variant="dark">
                            {prevImgsList}
                         </Carousel> 
                        : <img url="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"/>
                    }
                </div>
            </a>
        </div>
        <div className="list-item-info">
            <Link to={`/${product.url}`} className="item-info-name" reloadDocument={true}>{product.name}</Link>
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
                            {productDiscount &&
                                <div className="actions-content-price-old">
                                    <span>
                                        {product.price}
                                    </span>
                                    <span className="actions-content-price-discount">
                                        -{product.discountAmount}%
                                    </span>
                                </div>
                            }
                            <div className="actions-content-price-current">
                                { productDiscount 
                                    ? <>{Math.round(product.price - (product.price * (product.discountAmount / 100)))}</>
                                    : <>{product.price}</>
                                }
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
