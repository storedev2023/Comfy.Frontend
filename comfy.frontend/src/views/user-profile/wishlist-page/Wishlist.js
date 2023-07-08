import React, { useEffect, useState } from "react";
//Components
import Card from "../../../components/card/Card";
import Icon from "../../../components/icon/icon";
//styles
import { useDispatch, useSelector } from "react-redux";
import './Wishlist.scss'
import { userService } from "../../../service/UserService";
import { setUserWishlist } from "../../../redux/reducers/user-reducer";

// this is the profile page


function Wishlist() {
  
const dispatch = useDispatch()
const user = useSelector(state => state.user.user_access_data)
const [wishList, setWishList] = useState([])


useEffect(() => {
  const fetchData = async () => {
    const response = await userService.user_wishlist(user?.userId, user?.accessToken)
    setWishList(response)
    dispatch(setUserWishlist(response))
  }
  fetchData()
}, [user])



console.log(wishList)

  return (
    <div className="wishlist-block">
      <div className="wishlist-title">
          Лист бажань
      </div>
      <div className="wishlist">
        {wishList.length !== 0 
        ?  <></>
        :  <div className="empty-wishlist">
            У вас немає обраних товарів
          </div>
        }
      </div>
    </div>
  );
}

export default Wishlist;