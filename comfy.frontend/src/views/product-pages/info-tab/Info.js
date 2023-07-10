import React, {useEffect} from "react";
import { Link, useParams, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"


import Icon from "../../../components/icon/icon";
import { setItemInCart } from "../../../redux/reducers/cart-reducer"
import { priceFormat, calcDiscount} from "../../../scripts";
import StarRating from "../../../components/star-rating/StarRating";
import CarouselProductImages from "../../../components/carousel/product-imgs/Carousel-product-imgs";
import CarouselProductViewed from "../../../components/carousel/product-viewed/Carousel-product-viewed";
import './Info.scss'
import WishlistBtn from "../../../components/wishlist/Wishlist-btn";
import Preloader from "../../../components/preloader/Preloader";



function Info() {

  const { id } = useParams()
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.cart.itemsInCart)
  const product = useSelector((state) => state.product.currentProduct)

  useEffect(()=>{
    if(product === (null || undefined || ""))
    {
      return <Navigate to="/404" replace />
    }
  }, [product])

  const viewedProducts = useSelector((state) => state.v_product.itemsInViewedProductsSlider)
  const isItemInCart = items.some(item => item.id === product?.id)
  

  const addToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product))
  }


  if(product === null){
    return(<Preloader/>)
  }
  else{
    return (
      <div className="product-page-content">
        <div className="product-page-top">
          <div className="product-page-top-gallery-section">
            <div className="gallery-section">
              <CarouselProductImages isDot={true} dotClass={"product-page-slider-dot"} items={product?.images} slideClass={"product-page-slider-slide"} sliderClass={"product-page-slider"} />
            </div>
          </div>
          <div className="product-page-top-info-section">
            <div className="product-page-info-name">
              <h3>{product?.name}</h3>
            </div>
            <div className="product-page-info-price-section">
              <div className="price-section" >
                <div className="price-section-current-price">
                  {product?.discountAmount > 0
                    ? <>{priceFormat(calcDiscount(product?.price, product?.discountAmount))}</>
                    : <>{priceFormat(product?.price)}</>
                  }
                  <span>₴</span>
                </div>
                {product?.discountAmount > 0 &&
                  <div className="price-section-old-price">
                    <span className="old-price-value">
                      {priceFormat(product?.price)} ₴
                    </span>
                    <span className="old-price-discount">-{product?.discountAmount}%</span>
                  </div>
                }
  
              </div>
              <div className="action-section">
                <div className="action-section-star-rating">
                  { product?.rating !== undefined && 
                    <StarRating defaultState={product?.rating} listClass={"star-rating-product-page"}  width={23} height={23} />
                  }
                  <div className="code-section">
                    
                  </div>
                </div>
                <div className="action-section-btn-control">
                  <div className="action-section-btn">
                    {!isItemInCart
                      ? <button className="action-section-buy-btn" onClick={addToCart}>
                        <Icon id="cart" className="card-btn-icon" />
                        Купити
                      </button>
                      : <Link reloadDocument={true} className="action-section-buy-btn_link" to="/order">
                        <Icon id="cart-full" className="card-btn-icon-full" />
                        Купити
                      </Link>
                    }
                    <button className="action-section-buy-credit-btn">
                      <Icon id="cart" className="card-btn-icon" />
                      У кредит
                    </button>
                  </div>
                  <div className="control-section">
                    <div className="control-compare control-item">
                      <Icon id="compare" className="card-icon" />
                    </div>
                    <div className="control-wishlist control-item" >
                      <WishlistBtn product_id={product.id}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-page-info-delivery-section">
              <div className="product-page-info-delivery-section-top">
                <div className="delivery-section-top-city">
                  <div>Доставка:</div>
                  <div className="delivery-section-top-city">
                    <div className="city-selector-dropdown">
                      <span>Одеса</span>
                      <i className="city-selector-dropdown-icon" />
                    </div>
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
          </div>
        </div>
        <div className="product-page-bottom">
          <div className="product-page-bottom-characteristics-section">
            <div className="section">
              <div className="section-name">
                Технічні характеристики
              </div>
              <div className="characteristics-section-table">
                {product?.characteristicGroups.length !== 0 
                  ? product?.characteristicGroups[0].characteristics.map(characteristic => (
                    <div className="characteristics-table-row" key={characteristic.name}>
                      <div className="characteristics-table-name">
                        {characteristic.name}
                      </div>
                      <div className="characteristics-table-value">
                        {characteristic.value}
                      </div>
                    </div>
                  )) 
                  : <></>
                }
              </div>
              <div className="more-btn">
                <Link to={`/product/${id}/characteristics`}>
                  Показати більше
                </Link>
                <Icon id='more-plus' />
              </div>
            </div>
          </div>
          <div className="product-page-bottom-description-section">
            <div className="section">
              <div className="section-name">
                Опис
              </div>
              <div className="description-section-info">
                {product?.description}
              </div>
            </div>
          </div>
          <div className="product-page-bottom-reviews-section">
            <div className="section">
              <div className="section-name">
                Відгуки
              </div>
              <div className="more-btn">
                <Link to={`/product/${id}/reviews`}>
                  Показати більше
                </Link>
                <Icon id='more-plus' />
              </div>
            </div>
          </div>
          {viewedProducts.length !== 0 &&
              <div className="product-page-bottom-images-section">
              <div className="section">
                <div className="section-name">
                  Переглянуті товари
                </div>
                <div className="slider-section-info">
                  <CarouselProductViewed/>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }


}

export default Info;