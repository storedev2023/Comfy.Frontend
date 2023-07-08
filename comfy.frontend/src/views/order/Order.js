import React, { useEffect, useState } from "react";
//Components
import Card from "../../components/card/Card";
import Icon from "../../components/icon/icon";
import { deleteItemFromCart } from "../../redux/reducers/cart-reducer";
import { calcDiscount, priceFormat } from "../../scripts";
import { useDispatch, useSelector } from "react-redux";
//styles
import './Order.scss'



function Orders() {
    const products = useSelector(state => state.cart.itemsInCart)
    const totalPrice = products.reduce((acc, product) => acc += calcDiscount(product.price, product.discountAmount), 0)
    console.log(products)

    const dispatch = useDispatch();
    const deleteProduct = (event, id) => {
        dispatch(deleteItemFromCart(id));
    }

    return (
            
            <div className="order-page">
                <div className="info-block">
                      <div className="title-order">
                        <p>Оформити замовлення</p>
                        </div>
                    <div className="block">
                        <p className="city-title">Ваше  місто</p>
                        <div className="dropdown">
                            <button className="dropdown-button"><span>Одеса</span><span className="arrow-down"></span></button>
                            <div className="dropdown-content">
                                <div className="city-search-div">
                                    <div>Місто</div>
                                    <input className="city-name" placeholder="Введіть назву міста" type="text" />
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
                                {products.map(product => (
                                <li className="product-li" key={product.url}>
                                   <img className="product-image" src={product.images[0].url} alt="Product Image"/>
                                    <div className="product-info">
                                        <div className="product-name">{product.name}</div>
                                        <div className="product-code">Код: {product.code}</div>
                                    </div>
                                    <div className="product-count-div">
                                        <div className="product-count">1</div>
                                        <div className="product-counts">
                                            <button className="product-minus-button" type="">-</button>
                                            <button className="product-plus-button" type="">+</button>
                                        </div>

                                    </div>
                                    <div className="price-div">
                                    {product.discountAmount > 0 &&
                                        <div className="old-price">{priceFormat(calcDiscount(product.price, product.discountAmount))} ₴</div>
                                    }
                                       <div className="price">{priceFormat(product.price)} ₴</div>
                                    </div>

                                    <div className="delete-product-svg" onClick={(e) => { deleteProduct(e, product.id) }}>
                                        <Icon id="delete-item-cart" className="card-btn-icon-full" />
                                    </div>
                                </li>
                                ))
                                }

                            </ul>
                        </div>
                    </div>
                    <div className="block">
                        <div className="contact-title">
                                Контактна інформація
                        </div>
                        <div className="contacts-inputs">
                            <div className="contact-div">
                                <div className="title">Пошта</div>
                                <input className="input" type="email" name="" />
                            </div>
                            <div className="contact-div">
                                <div className="title">Номер телефону</div>
                                <input className="input" type="number" placeholder="+380 73 6343 817" name="" />
                            </div>
                            <div className="contact-div">
                              </div>
                        </div>
                            <div className="contacts-inputs">
                                <div className="contact-div">
                                    <div className="title">Ім`я</div>
                                    <input className="input" type="text" name="" />
                                </div>
                                <div className="contact-div">
                                    <div className="title">Фамілія</div>
                                    <input className="input" type="text"  name=""/>
                                </div>
                                <div className="contact-div">
                                    <div className="title">По батькові</div>
                                    <input className="input" type="text"  name="" />
                                </div>
                             </div>
                             <div className="contacts-inputs">
                                <div className="contact-div">
                                    <div className="title">Місто</div>
                                    <input className="input" type="text" name=""/>
                                </div>
                                <div className="contact-div">
                                    <div className="title">Адреса</div>
                                    <input className="input" type="text"  name=""/>
                                </div>
                                <div className="contact-div">
                                </div>
                            </div>
                            <div className="contacts-inputs">
                            <div className="contact-div-long">
                                <div className="title">Коментар до замовлення</div>
                                <input className="input" type="text" name=""/>
                            </div>
                        </div>
                        <div className="contacts-inputs">
                            <div className="callback-inputs">
                            <label for="myCheckbox">Передзвонити після оформлення</label>
                            <input type="checkbox" id="myCheckbox" class="custom-checkbox"/>
                        </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="giftcard">
                            <input className="gif-card-checkbox" type="checkbox" />
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
                                <input className="discount-code-input" placeholder="Код знижки" type="text" />
                                <button className="discount-code-button" type="">Застосувати</button>
                            </div>
                        </div>
                        <div className="bonuscard-div">
                            <div className="bonuscard-input-title">Номер вашої бонусної картки</div>
                            <div>
                                <input className="discountcard-code-input" placeholder="0000-0000-0000" type="text" />
                                <button className="discountcard-button" type="">Ок</button>
                            </div>
                        </div>
                        <div className="product-counting">
                            <div className="products-count">{products.length} товари на суму:</div>
                            <div className="products-prices">{priceFormat(totalPrice)} ₴</div>
                        </div>
                        <div className="br-div"></div>
                        <div className="payment">
                            <div className="payment-title">До сплати: </div>
                            <div className="payment-price">{priceFormat(totalPrice)} ₴ </div>
                        </div>
                        <div className="placing-order">
                            <button className="placing-order-button" type="">Застосувати</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Orders;