import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import StarRating from "../../../components/star-rating/StarRating";
import { userService } from "../../../service/UserService";
import { setUserWishlist } from "../../../redux/reducers/user-reducer";
import { priceFormat,calcDiscount } from "../../../scripts";
import WishlistBtn from "../../../components/wishlist/Wishlist-btn";
import Icon from "../../../components/icon/icon";
import Preloader from "../../../components/preloader/Preloader";
//styles
import './Wishlist.scss'
import { setItemInCart } from "../../../redux/reducers/cart-reducer";


// this is the profile page


function Wishlist() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.user.user_access_data)

  useEffect(() => {
    if(user.userId === ''){
      navigate("/")
    }
  }, [user])

  const user_wishList = useSelector(state => state.user.user_wishlist)
  const items = useSelector((state) => state?.cart.itemsInCart)


  const addToCart = (event,product) => {
    event.stopPropagation();
    dispatch(setItemInCart((product)))
  }


if(user.userId === '')
{
  return(<Preloader/>)
}
else{
  return (
    <div className="wishlist-block">
      <div className="wishlist-title">
        Лист бажань
      </div>
      <div className="wishlist">
        {user_wishList.length !== 0
          ? <div className="wishlist__">
            {user_wishList.map(item => (
              <div key={item.id} className="wishlist-product">
                <div className="wishlist-product-img">
                  <Link to={`/product/${item.url}`} reloadDocument={true}><img src={item.imageUrl} /></Link>
                </div>
                <div className="wishlist-product-body">
                  <div className="wishlist-product-body-title">
                    <Link to={`/product/${item.url}`} reloadDocument={true}>{item.name}</Link>
                  </div>
                  <div className="wishlist-product-body-info">
                    <div className="wishlist-product-body-rating-price">
                      <div className="wishlist-product-body-rating">
                        <StarRating defaultState={item.rating} height={25} width={25} />
                      </div>
                      <div className="wishlist-product-body-price">
                        {item.discountAmount > 0 &&
                          <div className="wishlist-product-body-old">
                            <span>
                              {priceFormat(item.price)} ₴
                            </span>
                            <span className="wishlist-product-body-discount">
                              -{priceFormat(item.discountAmount)}%
                            </span>
                          </div>
                        }
                        <div className="wishlist-product-body-current">
                          {item.discountAmount > 0
                            ? <>{priceFormat(calcDiscount(item.price, item.discountAmount))}</>
                            : <>{priceFormat(item.price)}</>
                          }
                          <span>
                            ₴
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="wishlist-product-body-actions">
                      <div className="wishlist-product-body-actions-wishlist-btn">
                          <WishlistBtn product_id={item.id}/>
                      </div>
                        <div className="wishlist-product-buy-btn">
                        {!items.some(in_cart => in_cart.id === item?.id)
                            ? <button className="wishlist-product-btn" onClick={(event) => {addToCart(event,item)}}>
                              <Icon id="cart" className="card-btn-icon" />
                              Купити
                            </button>
                            : <Link reloadDocument={true} className="action-section-buy-btn_link" to="/order">
                              <Icon id="cart-full" className="card-btn-icon-full" />
                              Купити
                            </Link>
                          }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          : <div className="empty-wishlist">
            У вас немає обраних товарів
          </div>
        }
      </div>
    </div>
  );
}

}

export default Wishlist;