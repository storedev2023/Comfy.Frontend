import React from "react";
import Icon from "../../../components/icon/icon";
import { upPage } from "../../../scripts/index";
import { Link } from "react-router-dom";
import { setItemInCart } from "../../../redux/reducers/cart-reducer"
import './Questions.scss'
import { useSelector, useDispatch } from "react-redux";
import { onlyDateFormat, priceFormat, calcDiscount } from "../../../scripts/index";
import Preloader from "../../../components/preloader/Preloader"
import WishlistBtn from "../../../components/wishlist/Wishlist-btn";


import './Questions.scss'



function Questions() {
  upPage()

  const dispatch = useDispatch()

  const product = useSelector(state => state.product.currentProduct)
  const product_questions = useSelector(state => state.product.product_questions)
  const items = useSelector((state) => state?.cart.itemsInCart)
  const isItemInCart = items?.some(item => item.id === product?.id)
  
  const addToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product))
  }

  return (
      <div className="questions-page">
        {product?.id === undefined || product_questions === undefined ?
        <div className="product-reviews-page-preloader">
          <Preloader />
        </div>

        :<>
        <div className="product-reviews-page-list">
            <div className="product-reviews-header">
              <div className="product-reviews-header-title">
                {product?.name}
              </div>
              <div className="product-reviews-header-code">
                <span>Код: {product?.code}</span>
              </div>
            </div>
            <div className="product-reviews-body">
            { product_questions?.questions?.length === 0 
              ? <div className="empty-list">Цей товар не має питань</div>
              : <>
               {product_questions?.questions?.map(question => (
                <div className="reviews-body-review" key={question.id}>
                  <div className="reviews-body-review-user">
                    <div className="review-user-name">
                      {question.username}
                    </div>
                    <div className="review-user-rating-data">
            
                      <div className="rating-data">
                        {onlyDateFormat(question.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="reviews-body-review-text">
                    <div className="review-text">
                      {question.text}
                    </div>
                  </div>
                </div>
              ))}
              </>
            }

            </div>
          </div>

          
        <div className="product-sub-page">

            <div className="sub-page-img">
              <img src={product?.images[0].url} alt="" />
            </div>
            <div className="sub-page-price-action">
              <div className="sub-page-price">
                <div className="sub-page-price-current">
                  {product.discountAmount > 0
                    ? <>{priceFormat(calcDiscount(product?.price, product?.discountAmount))}</>
                    : <>{priceFormat(product?.price)}</>
                  }
                  <span className="sub-page-price-currency">
                    ₴
                  </span>
                </div>
                {product.discountAmount > 0 &&
                  <div className="sub-page-price-price-old">
                    <span>
                      {priceFormat(product?.price)} ₴
                    </span>
                    <span className="sub-page-price-discount">
                      -{priceFormat(product?.discountAmount)}%
                    </span>
                  </div>
                }
              </div>
              <div className="sub-page-action">
                <WishlistBtn product_id={product?.id} />
              </div>
            </div>
            <div className="sub-page-btn">
              {!isItemInCart
                ? <button className="sub-page-buy-btn" onClick={addToCart}>
                  <Icon id="cart" className="card-btn-icon" />
                  Купити
                </button>
                : <Link reloadDocument={true} className="sub-page-buy-btn_link" to="/order">
                  <Icon id="cart-full" className="card-btn-icon-full" />
                  Купити
                </Link>
              }
              <button className="sub-page-buy-credit-btn">
                <Icon id="cart" className="card-btn-icon" />
                У кредит
              </button>
            </div>
        </div>
        </>
        }

      </div>
        
  );
}

export default Questions;