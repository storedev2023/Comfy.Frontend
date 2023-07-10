import React, { useState } from "react";
//Components
import Icon from "../icon/icon";
//styles
import { useDispatch, useSelector } from "react-redux";
import './Wishlist-btn.scss'
import { userService } from "../../service/UserService";
import { setUserWishlist } from "../../redux/reducers/user-reducer";

// this is the component


const WishlistBtn = ({ product_id}) => {


    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user_access_data)
    const wishlist = useSelector(state => state.user.user_wishlist)

    const [inWishlist, setInWishlist] = useState(
        wishlist === undefined ? false
        : (Array.from(wishlist)?.findIndex(item => item.id === product_id) !== -1)
        )

    const updateFilter = async () => {
        const response = await userService.user_wishlist(user.userId, user.accessToken)
        dispatch(setUserWishlist(response))
    }

    const addProductToWishlist = async (event) => {
        if (user.userId === "") {
            return
        }
        await userService.user_add_wishlist(user.userId, product_id, user.accessToken)
        updateFilter()
        setInWishlist(true)
    }

    const deleteProductInWishlist = async () => {
        if (user.userId === "") {
            return
        }
        await userService.user_delete_wishlist(user.userId, product_id, user.accessToken,user.refreshToken)
        updateFilter()
        setInWishlist(false)
    }

    return (
        <>
            <div onClick={!inWishlist ? addProductToWishlist : deleteProductInWishlist} className="div">
                <Icon id="wishlist-full" className={!inWishlist ? "card-icon-control-wishlist" :"card-icon-control-wishlist-full" } />
            </div>
        </>
    );
}

export default WishlistBtn;