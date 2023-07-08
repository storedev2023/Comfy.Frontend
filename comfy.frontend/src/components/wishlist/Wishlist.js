import React, { useEffect, useState } from "react";
//Components
import Icon from "../../components/icon/icon";
//styles
import { useDispatch, useSelector } from "react-redux";
import './Wishlist.scss'
import { userService } from "../../service/UserService";
import { setUserWishlist } from "../../redux/reducers/user-reducer";
import { useNavigate } from "react-router-dom";
import Authorization from "../auth/authorization";

// this is the component


const Wishlist = ({ product_id, className }) => {

    const [inWishlist, setInWishlist] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user_access_data)


    useEffect(() => {
        if (user.userId !== "") {
        const fetchData = async () => {
            const response = await userService.user_wishlist(user?.userId, user?.accessToken)
            dispatch(setUserWishlist(response))
            const isActiveWishlist = response?.findIndex(item => item.id === product_id) !== -1
            setInWishlist(isActiveWishlist)
        }
        fetchData()
        }   
    }, [user])

    //console.log("inWishlist",inWishlist )

    const updateFilter = async () => {

        const response = await userService.user_wishlist(user.userId, user.accessToken)
        console.log(response)
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
            {!inWishlist
                ?
                <div onClick={addProductToWishlist} className="div">
                    <Icon id="wishlist" className={className} />
                </div>
                : <div onClick={deleteProductInWishlist} className="div">
                    <Icon id="wishlist-full" className={className} />
                </div>

            }
        </>
    );
}

export default Wishlist;