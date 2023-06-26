import React, { useState } from "react"
import { setItemInCart } from "../../redux/reducers/cart-reducer"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

//components
import Icon from "../icon/icon";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
//style
import './Card.scss'
import { calcDiscount, priceFormat } from "../../scripts";
import StarRating from "../star-rating/StarRating";




const Card = ({ product }) => {


    const [productDiscount, setProductDiscount] = useState(product.discountAmount > 0)
    const [productImages, setProductImages] = useState(product.images.length != 0)
    const [isProductHover, setIsProductHover] = useState(false)

    const productHover = () => {
        setIsProductHover(!isProductHover)
    }

    let prevImgsList = [];

    product.images.forEach((prev, index) => {
        prevImgsList.push(<CarouselItem key={index}><Link to={`/product/${product.url}`} className="img-link" reloadDocument={true}><img src={prev.url} /></Link></CarouselItem>);
    });


    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === product.id)
    const addToCart = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(product))
    }

    return (
        <div className="list-item" onMouseEnter={productHover} onMouseLeave={productHover}>
            <div className="list-item-header">
                <div className="list-item-promo-label">
                    Хiт продаж
                </div>
                <div className="list-item-list-control">
                    <div className="control-compare control-item">
                        <Icon id="compare" className="card-icon" />
                    </div>
                    <div className="control-wishlist control-item" >
                        <Icon id="wishlist" className="card-icon" />
                    </div>
                </div>
            </div>
            <div className="list-item-img">

                <div className="img-carousel">
                    {productImages
                        ? <Carousel interval={null} variant="dark">
                            {prevImgsList}
                        </Carousel>
                        : <img url="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" />
                    }
                </div>

            </div>
            <div className="list-item-info">
                <Link to={`/product/${product.url}`} className="item-info-name" reloadDocument={true} >{product.name}</Link>
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
                                            {priceFormat(product.price)}
                                        </span>
                                        <span className="actions-content-price-discount">
                                            -{priceFormat(product.discountAmount)}%
                                        </span>
                                    </div>
                                }
                                <div className="actions-content-price-current">
                                    {productDiscount
                                        ? <>{priceFormat(calcDiscount(product.price, product.discountAmount))}</>
                                        : <>{priceFormat(product.price)}</>
                                    }
                                    <span className="actions-content-price-currency">
                                        ₴
                                    </span>
                                </div>
                            </div>
                            <div className="actions-content-btn">
                                {!isItemInCart
                                    ? <button className="list-item-btn" onClick={addToCart}>
                                        <Icon id="cart" className="card-btn-icon" />
                                    </button>
                                    : <Link className="list-item-btn_link" to="">
                                        <Icon id="cart-full" className="card-btn-icon-full" />
                                    </Link>
                                }
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
            {isProductHover &&
                <div className="list-item-more-info">
                    <StarRating defaultState={product.rating} />
                    <div className="list-item-more-info-characteristics">
                        { product.characteristicGroups.length != 0 
                        ? product.characteristicGroups[0].characteristics.map(characteristic => (
                            <div className="more-info-characteristics" key={characteristic.name}>
                                <div className="more-info-characteristics-name">
                                    {characteristic.name}
                                </div>
                                <div className="more-info-characteristics-value">
                                    {characteristic.value}
                                </div>
                            </div >
                            ))
                        : <></>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default Card;
