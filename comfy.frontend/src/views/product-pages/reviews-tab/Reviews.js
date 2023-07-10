import React from "react";
import Icon from "../../../components/icon/icon";
import { upPage } from "../../../scripts/index";
import { Link } from "react-router-dom";
import { setItemInCart } from "../../../redux/reducers/cart-reducer"
import './Reviews.scss'
import { useSelector, useDispatch } from "react-redux";
import StarRating from "../../../components/star-rating/StarRating";
import { onlyDateFormat, priceFormat, calcDiscount } from "../../../scripts/index";
import Preloader from "../../../components/preloader/Preloader"
import WishlistBtn from "../../../components/wishlist/Wishlist-btn";
function Reviews() {
  upPage()

  const dispatch = useDispatch()

  //const _access_data = useSelector(state => state.user.user_access_data)
  //const user = useSelector(state => state.user.user_data)
  const product = useSelector(state => state.product.currentProduct)
  const product_reviews = useSelector(state => state.product.product_reviews)
  const items = useSelector((state) => state?.cart.itemsInCart)
  const isItemInCart = items?.some(item => item.id === product?.id)

  const addToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(product))
  }


  return (
    <div className="product-reviews-page">
      {product?.id === undefined || product_reviews === undefined ?
        <div className="product-reviews-page-preloader">
          <Preloader />
        </div>

        : <>
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
              { product_reviews?.reviews?.length === 0 
              ? <div className="empty-list">Цей товар не має відгуків</div>
              : <>
              {product_reviews?.reviews?.map(review => (
                <div className="reviews-body-review" key={review.id}>
                  <div className="reviews-body-review-user">
                    <div className="review-user-name">
                      {review.username}
                    </div>
                    <div className="review-user-rating-data">
                      <StarRating defaultState={review.productRating} listClass={"star-rating-product-reviews-page"} width={23} height={23} />
                      <div className="rating-data">
                        {onlyDateFormat(review.createdAt)}
                      </div>
                    </div>
                  </div>
                  <div className="reviews-body-review-text">
                    <div className="review-text">
                      {review.text}
                    </div>
                    <div className="review-advantages">
                      <div className="advantages-title">
                        Плюси:
                      </div>
                      <div className="advantages-text">
                        {review.advantages}
                      </div>
                    </div>
                    <div className="review-disadvantages">
                      <div className="disadvantages-title">
                        Мінуси:
                      </div>
                      <div className="disadvantages-text">
                        {review.disadvantages}
                      </div>
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

export default Reviews;