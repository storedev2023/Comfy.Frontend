import React, { useEffect, useState } from "react";
//Components
import  Card                from "../../../components/card/Card";
import  Icon                from "../../../components/icon/icon";
//styles
import './Orders.scss'


function Orders() {
  return (
            <div className="orders-block">
                <div className="orders-title">
                  Мої замовлення
                </div>
              <div className="order-block">
                  <label className="expander" for="expand-checkbox">
                    <div className="order-number">
                      №123123123
                    </div>
                    <div className="order-data">              
                      01.11.2022
                    </div>
                    <div className="order-status-succes">              
                      Виконано
                    </div>
                    <div className="order-price">              
                      969 ₴
                    </div>
                    <div className="order-image">              
                      <div className="small-img">
                      </div>
                      <div className="small-img">
                      </div>
                    </div>
                      <span className="arrow-down-span"></span>
                  </label>
                  <input id="expand-checkbox" className="checkbox" type="checkbox"/>
                  <div class="content">
                  <div className="ordered-product">
                           {/* <img src="" alt=""> */}
                           <div className="large-img"></div>
                           <div className="product-info">
                              <div className="product-name">Ноутбук Apple MacBook Pro 14'' M2 Pro 1TB MPHF3 Space Gray</div>
                              <div className="product-price">29 999 ₴</div>
                           </div>
                  </div>
                  <div className="border"></div>
                      <div className="delivery-title">
                        Доставка
                      </div>
                      <div className="full-name-div">
                      <div className="title">
                          ПІБ
                        </div>
                        <div className="full-name-text">
                            Тіана Сідху
                        </div>
                      </div>
                      <div className="mail-div">
                          <div className="title">
                          Пошта
                        </div>
                        <div className="mail-text">
                          tia.sidhu81@gmai.com
                        </div>
                      </div>
                      <div className="phone-div">
                          <div className="title">
                          Номер телефону
                        </div>
                        <div className="phone-text">             
                          +38 (099) 222 - 22 - 22
                        </div>
                      </div>
                      <div className="city-div">
                          <div className="title">
                          Місто доставки
                        </div>
                        <div className="city-text">
                          Одеса
                        </div>
                      </div>
                      <div className="delivery-div">
                          <div className="title">
                          Адреса доставки
                        </div>
                        <div className="delivery-text">
                          Садова 3, 1234
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="payment-title">
                        Оплата
                      </div>
                      <div className="payment-div">
                          <div className="title">
                          Загальна сума
                        </div>
                        <div className="payment-text">
                          123443
                        </div>
                      </div>
                  </div>
              </div> 
              <div className="order-block">
                  <label className="expander" for="expand-checkbox">
                    <div className="order-number">
                      №123123123
                    </div>
                    <div className="order-data">              
                      01.11.2022
                    </div>
                    <div className="order-status-succes">              
                      Виконано
                    </div>
                    <div className="order-price">              
                      969 ₴
                    </div>
                    <div className="order-image">              
                      <div className="small-img">
                      </div>
                      <div className="small-img">
                      </div>
                    </div>
                      <span className="arrow-down-span"></span>
                  </label>
                  <input id="expand-checkbox" className="checkbox" type="checkbox"/>
                  <div class="content">
                  <div className="ordered-product">
                           {/* <img src="" alt=""> */}
                           <div className="large-img"></div>
                           <div className="product-info">
                              <div className="product-name">Ноутбук Apple MacBook Pro 14'' M2 Pro 1TB MPHF3 Space Gray</div>
                              <div className="product-price">29 999 ₴</div>
                           </div>
                  </div>
                  <div className="border"></div>
                      <div className="delivery-title">
                        Доставка
                      </div>
                      <div className="full-name-div">
                      <div className="title">
                          ПІБ
                        </div>
                        <div className="full-name-text">
                            Тіана Сідху
                        </div>
                      </div>
                      <div className="mail-div">
                          <div className="title">
                          Пошта
                        </div>
                        <div className="mail-text">
                          tia.sidhu81@gmai.com
                        </div>
                      </div>
                      <div className="phone-div">
                          <div className="title">
                          Номер телефону
                        </div>
                        <div className="phone-text">             
                          +38 (099) 222 - 22 - 22
                        </div>
                      </div>
                      <div className="city-div">
                          <div className="title">
                          Місто доставки
                        </div>
                        <div className="city-text">
                          Одеса
                        </div>
                      </div>
                      <div className="delivery-div">
                          <div className="title">
                          Адреса доставки
                        </div>
                        <div className="delivery-text">
                          Садова 3, 1234
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="payment-title">
                        Оплата
                      </div>
                      <div className="payment-div">
                          <div className="title">
                          Загальна сума
                        </div>
                        <div className="payment-text">
                          123443
                        </div>
                      </div>
                  </div>
              </div> 
            </div>
  );
}

export default Orders;