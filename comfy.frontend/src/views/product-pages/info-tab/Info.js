import React from "react";
import { useSelector } from "react-redux";

import { Link} from "react-router-dom";



import CarouselWithCards from "../../../components/carousels/carousel_w_cards";
import Icon from "../../../components/icon/icon";
import './Info.scss'
function Info() {


  const product = useSelector(state => state.product.currentProduct)
  // console.log(product.name)

  return (
    <div className="product-page-content">
      <div className="product-page-top">
        <div className="product-page-top-gallery-section">

        </div>
        <div className="product-page-top-info-section">
          <div className="product-page-info-name">
            <h3>Ноутбук ігровий Lenovo IdeaPad Gaming 3 15ACH6 (82K201B9RA) Shadow Black</h3>
          </div>
          <div className="product-page-info-price-section">
            <div className="price-section" >
              <div className="price-section-current-price">
                29 999
                <span>₴</span>
              </div>
              <div className="price-section-old-price">
                <span className="old-price-value"> 35 999 ₴</span>
                <span className="old-price-discount">-17%</span>
              </div>
            </div>
            <div className="action-section">
              <button className="action-section-buy-btn">
                <Icon id="cart" className="card-btn-icon" />
              </button>
              <button className="action-section-buy-credit-btn">
                <span>Купити в кредит</span>
              </button>
            </div>
            <div className="control-section">
              <div className="control-compare control-item">
                <Icon id="compare" className="card-icon" />
              </div>
              <div className="control-wishlist control-item" >
                <Icon id="wishlist" className="card-icon" />
              </div>
            </div>
            <div className="bonus-section">
              <span className="bonus-section-price">+300 ₴</span>
              <span className="bonus-section-text"> на бонусний рахунок</span>
            </div>
          </div>

          <div className="">

          </div>
          <div className="product-page-info-delivery-section">
            <div className="product-page-info-delivery-section-top">
              <div className="delivery-section-top-city">
                <div>Доставка:</div>
                <div className="delivery-section-top-city-icon">
                  <Icon id="city-icon" className="card-icon" />
                  <span>Одеса</span>
                </div>
              </div>
              <div>Наявність в магазині</div>
            </div>
            <div className="product-page-info-delivery-section-bottom">
              <div className="delivery-section-bottom-variation">
                <div className="delivery-section-bottom-variation-name">
                  {/* <Icon/> */}
                  <span>Самовивіз з магазину</span>
                </div>
                <div className="delivery-section-bottom-variation-info">
                  Забери завтра
                </div>
                <div className="delivery-section-bottom-variation-price">
                  <span>Безкоштовно</span>
                  <Icon id="header-arrow" className="top-header-arrow-icon" />
                </div>
              </div>
              <div className="delivery-section-bottom-variation">
                <div className="delivery-section-bottom-variation-name">
                  {/* <Icon/> */}
                  <span>Доставка у квартиру</span>
                </div>
                <div className="delivery-section-bottom-variation-info">
                  Доставимо 5 травня
                </div>
                <div className="delivery-section-bottom-variation-price">
                  <span>від 1₴</span>
                  <Icon id="header-arrow" className="top-header-arrow-icon" />
                </div>
              </div>
              <div className="delivery-section-bottom-variation">
                <div className="delivery-section-bottom-variation-name">
                  {/* <Icon/> */}
                  <span>Самовивіз з відділення</span>
                </div>
                <div className="delivery-section-bottom-variation-info">
                  Доставимо 5 травня
                </div>
                <div className="delivery-section-bottom-variation-price">
                  <span>від 69₴</span>
                  <Icon id="header-arrow" className="top-header-arrow-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="product-page-info-guarantee-section">
            <div className="product-page-info-guarantee-section-info">
              {/* <Icon/> */}
              <span>Оплачуйте покупку готівкою, карткою або перерахунком на банківські реквізити (безготівкою)</span>
            </div>
            <div className="product-page-info-guarantee-section-info">
              {/* <Icon/> */}
              <span>Вся техніка має сертифікати та гарантї від виробника. Повернути її можна протягом 14 днів після покупки</span>
            </div>
          </div>
          <div className="">
            {/* <CarouselWithCards/> */}
          </div>
          <div className="">
            {/* <CarouselWithCards/> */}
          </div>
        </div>
      </div>
      <div className="product-page-bottom">
        <div className="product-page-bottom-characteristics-section">
          <div className="characteristics-section">
            <div className="characteristics-section-name">
              {/* {product.name} */}
            </div>
            <div className="characteristics-section-table">
              <div className="characteristics-table-row">
                <div className="characteristics-table-name">
                  Діагональ екрану
                </div>
                <div className="characteristics-table-value">
                  15,6
                </div>
              </div>
              <div className="characteristics-table-row">
                <div className="characteristics-table-name">
                  Роздільна здатність екрану
                </div>
                <div className="characteristics-table-value">
                  1920х1080 Full HD
                </div>
              </div>
              <div className="characteristics-table-row">
                <div className="characteristics-table-name">
                  Тип матриці
                </div>
                <div className="characteristics-table-value">
                  IPS
                </div>
              </div>
              <div className="characteristics-table-row">
                <div className="characteristics-table-name">
                  Частота оновлення екрану
                </div>
                <div className="characteristics-table-value">
                  120Гц
                </div>
              </div>
            </div>
            <div className="more-btn">
              {/* <Link to={`/${id}/characteristics`}>
                    Показати більше
                  </Link> */}
              <Icon id='more-plus' />
            </div>
          </div>
        </div>
        <div className="product-page-bottom-description-section">
          <div className="description-section">
            <div className="description-section-name">
              Опис Ноутбук ігровий Lenovo IdeaPad Gaming 3 15ACH6 (82K201B9RA) Shadow Black
            </div>
          </div>
        </div>
        <div className="product-page-bottom-reviews-section">
          <div className="reviews-section">
            <div className="reviews-section-name">
              Відгуки
            </div>
            <div className="more-btn">
              {/* <Link to={`/${id}/reviews`}>
                      Показати більше
                    </Link> */}
              <Icon id='more-plus' />
            </div>
          </div>
        </div>
        <div className="product-page-bottom-reviews-section">
          <div className="reviews-section">
            <div className="reviews-section-name">
              Фото
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;