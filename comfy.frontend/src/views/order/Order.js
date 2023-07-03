import React, { useEffect, useState } from "react";
//Components
import  Card                from "../../components/card/Сard";
import  Icon                from "../../components/icon/icon";
//styles
import './Order.scss'



function Orders() {
  return (
        <main>
            <div className="title-order">
                <p>Оформити замовлення</p>
            </div>
            <div className="order-page">
                <div className="info-block">
                    <div className="block">
                        <p className="city-title">Ваше  місто</p>
                        <div class="dropdown">
                            <button className="dropdown-button"><span>Одеса</span><span class="arrow-down"></span></button>
                            <div class="dropdown-content">
                                <div className="city-search-div">
                                    <div>Місто</div>
                                    <input className="city-name" placeholder="Введіть назву міста" type="text"/>
                                </div>
                                <ul className="city-ul">
                                    <li><div>Пункт меню 1</div></li>
                                    <li><div>Пункт меню 2</div></li>
                                    <li><div>Пункт меню 3</div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div>
                            <div className="yourorder-title">
                            <p >Ваше замовлення </p> 
                            <div className="delete-order-div">
                                <Icon id="delete-item-cart" className="card-btn-icon-full" />
                            </div> </div>
                        </div>
                        <div>
                            <ul className="product-ul">
                                <li className="product-li">
                                    <div className="product-image"></div>
                                    {/* <img className="product-image" src="" alt="Product Image"/> */}
                                    <div className="product-info">
                                        <div className="product-name">Ноутбук Apple MacBook Pro 14'' M2 Pro 1TB MPHF3 Space Gray</div>
                                        <div className="product-code">Код: 34869023</div>
                                    </div>
                                    <div className="product-count-div">
                                        <div className="product-count">1</div>
                                        <div className="product-counts">
                                            <button className="product-minus-button" type="">-</button>
                                            <button className="product-plus-button"  type="">+</button>
                                        </div>

                                    </div>
                                    <div className="price-div">
                                        <div className="old-p-price">39 999 ₴</div>
                                        <div className="p-price">29 999 ₴</div>
                                    </div>

                                    <div className="delete-product-svg">
                                        <Icon id="delete-item-cart" className="card-btn-icon-full" />
                                    </div>
                                </li>
                                <li className="product-li">
                                    <div className="product-image"></div>
                                    {/* <img className="product-image" src="" alt="Product Image"/> */}
                                    <div className="product-info">
                                        <div className="product-name">Ноутбук Apple MacBook Pro 14'' M2 Pro 1TB MPHF3 Space Gray</div>
                                        <div className="product-code">Код: 34869023</div>
                                    </div>
                                    <div className="product-count-div">
                                        <p className="product-count">1</p>
                                        <div className="product-counts">
                                            <button className="product-minus-button" type="">-</button>
                                            <button className="product-plus-button"  type="">+</button>
                                        </div>

                                    </div>
                                    <div className="price-div">
                                        <p className="p-price">29 999 ₴</p>
                                    </div>

                                    <div className="delete-product-svg">
                                        <Icon id="delete-item-cart" className="card-btn-icon-full" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="block">
                        <div className="contact-title">
                            1. Контактна інформація
                        </div>
                        <div className="contacts-inputs">
                            <div>
                                <div className="phone-number-title">Номер телефону</div>
                                <input className="phone-number-input" placeholder="(380) 000 000 000" type="number"></input>
                                
                            </div>
                            <div className="name-inputs">
                                <div className="name-title">Ім`я</div>
                                <input className="name-input" placeholder="" type="text"></input>
                            </div> 
                               <div className="email-inputs">
                                <div className="email-title">Email</div>
                                <input className="email-input" placeholder="" type="email"></input>
                                <button className="login-button" type="">Увійти</button>
                            </div>
                        </div>
                        <div className="continue-order">
                            <button className="continue-order-button" type="">Продовжити замовлення</button>
                        </div>
                    </div>
                    <div className="block">
                        <div className="giftcard">
                            <input className="gif-card-checkbox" type="checkbox"/>
                            <div className="gift-card-title"> В мене є подарункова карта</div>
                            <div className="help-tag">
                                <div className="help-tag-title">
                                    ?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total-block">
                    <div className="block">
                        <div className="total-title">Підсумок:</div>
                        <div className="discount-div">
                            <div className="discount-input-title">Код знижки / промокод</div>
                            <div>
                                <input className="discount-code-input" placeholder="Код знижки" type="text"/>
                                <button className="discount-code-button" type="">Застосувати</button>
                            </div>
                        </div>
                        <div className="bonuscard-div">
                            <div className="bonuscard-input-title">Номер вашої бонусної картки</div>
                            <div>
                                <input className="discountcard-code-input" placeholder="0000-0000-0000" type="text"/>
                                <button className="discountcard-button" type="">Ок</button>
                            </div>
                        </div>
                        <div className="product-counting">
                            <div className="products-count">2 товари на суму:</div>
                            <div className="products-prices">30 699.50 ₴</div>
                        </div>
                        <div className="br-div"></div>
                        <div className="payment">
                            <div className="payment-title">До сплати: </div>
                            <div className="payment-price">30 699.50 ₴ </div>
                        </div>
                        <div className="placing-order">
                            <button className="placing-order-button" type="">Застосувати</button>
                        </div>
           
                        
                    </div>
                </div>
            </div>
        </main>
  );
}

export default Orders;







