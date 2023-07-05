import React, { useState } from "react"
import { setItemInCart } from "../../redux/reducers/cart-reducer"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

//components
import Icon from "../icon/icon";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
//style
import "./Card.scss"
import { calcDiscount, priceFormat } from "../../scripts";
import StarRating from "../star-rating/StarRating";




const Card = ({
    product,
    hit,
    slider,
    hover,
}) => {


    const [isProductHover, setIsProductHover] = useState(false)

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === product.id)
    const addToCart = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(product))
    }

    return (
        <div className="list-item" onMouseEnter={() => setIsProductHover(true)} onMouseLeave={() => setIsProductHover(false)}>
            <div className="list-item-header">
                <div className="list-item-promo-label">
                    {hit &&
                        <>Хiт продаж</>
                    }
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
                    {slider
                        ? <Carousel interval={null} variant="dark">
                            {product.images.map(image => (
                                <CarouselItem key={product.images.indexOf(image)}>
                                    <Link to={`/product/${product.url}`} className="img-link" reloadDocument={true}>
                                        <img src={image.url} />
                                    </Link>
                                </CarouselItem>
                            ))}
                        </Carousel>
                        : 
                        <Link to={`/product/${product.url}`} className="img-link" reloadDocument={true}> 
                            <img src={product?.images[0]?.url}/> 
                        </Link>
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
                                {product.discountAmount > 0 &&
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
                                    {product.discountAmount > 0
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
                                    : <Link reloadDocument={true}  className="list-item-btn_link" to="/order">
                                        <Icon id="cart-full" className="card-btn-icon-full" />
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isProductHover && hover &&
                <div className="list-item-more-info">
                    { product?.rating !== undefined && 
                    <StarRating defaultState={product?.rating} />
                    }
                    <div className="list-item-more-info-characteristics">
                        {product.characteristicGroups.length != 0
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
