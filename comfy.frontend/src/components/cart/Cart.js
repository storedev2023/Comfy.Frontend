import React, { useEffect, useState } from "react"
import { useInView } from 'react-intersection-observer'

//components
import Icon from "../icon/icon";
//style
import './Cart.scss'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calcDiscount, priceFormat } from "../../scripts";
import { deleteItemFromCart } from "../../redux/reducers/cart-reducer";

//images



const Cart = (props) => {


    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.itemsInCart)
    const totalPrice = products.reduce((acc, product) => acc += calcDiscount(product.price, product.discountAmount), 0)

    const deleteProduct = (event, id) => {
        dispatch(deleteItemFromCart(id))
        if (products.length === 1) {
            props.setIsShow(false)
            props.setIsCartOverlay(false)
        }
    }

    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView) {
            props.setIsCartOverlay(true)
        }

    }, [inView])




    return (
        <>  <Icon id="cart" className="header-icon" />
            {products.length !== 0 &&
            <div className="cart-number-of-goods">
                {products.length}
            </div>
            }
            {props.isShow &&
                <>
                    {products.length === 0
                        ? <div className="empty-cart">
                            <div className="empty-cart-body">
                                <div className="empty-cart-arrow">

                                </div>
                                <div className="empty-cart-info">
                                    <div className="empty-cart-title">
                                        Кошик порожній
                                    </div>
                                    <div className="empty-cart-message">
                                        Ознайомтеся з нашими
                                        <Link> акціямі</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <>
                            <div className="default-cart" ref={ref}>
                                <div className="default-cart-body">
                                    <div className="default-cart-title">
                                        Кошик
                                    </div>
                                    <div className="default-cart-products-list">
                                        {products.map(product => (
                                            <div className="cart-product" key={product.url} >
                                                <div className="cart-product-img">
                                                <Link to={`/product/${product.url}`} reloadDocument={true}>
                                                    {product.hasOwnProperty("imageUrl")  
                                                    ? <img src={product.imageUrl} alt="" />
                                                    : <img src={product.images[0].url} alt="" />
                                                    }
                                                   
                                                </Link>    
                                                </div>
                                                <div className="cart-product-info">
                                                    <div className="cart-product-name" >
                                                       <Link to={`/product/${product.url}`} reloadDocument={true}>
                                                            {product.name}
                                                       </Link>
                                                    </div>
                                                    <div className="cart-product-code">
                                                        Код:  {product.code}
                                                    </div>
                                                </div>
                                                <div className="cart-product-price">
                                                    {product.discountAmount !== 0 &&
                                                        <div className="cart-product-price-old">
                                                            {priceFormat(product.price)} ₴
                                                        </div>
                                                    }

                                                    <div className="cart-product-price-current">
                                                        {priceFormat(calcDiscount(product.price, product.discountAmount))} ₴
                                                    </div>
                                                </div>
                                                <div className="cart-product-delete-btn">
                                                    <div onClick={(e) => { deleteProduct(e, product.id) }}>
                                                        <Icon id="delete-item-cart" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="default-cart-products-price">
                                        <span className="cart-products-price-text">Всього, без доставки:</span>
                                        <span className="cart-products-price-total">{priceFormat(totalPrice)} ₴</span>
                                    </div>
                                    <div className="default-cart-products-btn">
                                        <Link to="/order" reloadDocument={true}>Оформити замовлення</Link>
                                    </div>
                                </div>
                            </div>

                        </>
                    }
                </>
            }
        </>
    );
}

export default Cart;
