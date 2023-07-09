import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Order.scss'


function Order({
    order
}) {

    const [openOrder, setOpenOrder] = useState(false)

    const isOpen = () => {
        setOpenOrder(!openOrder)
        
      }

    return (
        <div className="order-block">
            <div className="order-info" key={order.id} onClick={isOpen}>
                <div className="order-number">
                    № {order.id}
                </div>
                <div className="order-status">
                    {order.orderStatus}
                </div>
                {!openOrder &&
                    <>
                    <div className="order-price">
                        {order.totalPrice} ₴
                    </div>
                    <div className="order-products-img">
                        {order.products.map(product => (
                            <img src={product.imageUrl} key={`${order.id}_${product.imageUrl}_${order.id}`} />
                        ))}
                    </div>
                    </>
                }
                <div className="order-btn">
                    <span className="select-arrow-down" />
                </div>
            </div>
            {openOrder &&
                <div className="order-full-info">
                    <div className="order-product-list">
                        {order.products.map(product => (
                           <div className="order-product" key={`${product.url}_${order.id}`}>
                                <div className="order-product-img">
                                    <img src={product.imageUrl}/>
                                </div>
                                <div className="order-product-name">
                                    <Link to={`/product/${product.url}`} reloadDocument={true}>{product.name}</Link>
                                </div>
                                <div className="order-product-price">
                                    {product.price} ₴
                                </div>
                           </div>    
                        ))}
                    </div>
                    <div className="order-deliver-info">
                        <div className="order-deliver-info-title">
                        Доставка
                        </div>
                        <div className="order-deliver-info-row">
                            <div className="label">
                                Адреса доставки: 
                            </div>   
                            <div className="value">
                                {order.city}, {order.address}.
                            </div>  
                        </div>
                        <div className="order-deliver-info-row">
                            <div className="label">
                                Отримувач:
                            </div>   
                            <div className="value">
                                {order.surname} {order.name} {order.patronymic}, <b>{order.phoneNumber}</b>.
                            </div> 
                        </div>
                        <div className="order-deliver-info-row">
                            <div className="label">
                                Коментар
                            </div>   
                            <div className="value">
                                "{order.userComment}"
                            </div> 
                        </div>
                    </div>
                    <div className="order-order-price">
                        <div className="order-price-info-title">
                            Всього:
                        </div>
                        <div className="order-price-info-value">
                            {order.totalPrice} ₴
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Order;