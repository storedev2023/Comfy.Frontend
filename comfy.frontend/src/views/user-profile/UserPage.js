import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, useNavigate, NavNavLink } from "react-router-dom";
//Components
import Icon from "../../components/icon/icon";
//styles
import './UserPage.scss'
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, setUserAuth, setUserData, setUserOrders, setUserQuestions, setUserReviews, setUserWishlist } from "../../redux/reducers/user-reducer";
import { userService } from "../../service/UserService";
import { upPage } from "../../scripts";




function UserPage() {
  upPage()
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [accessToken, setAccessToken] = useState('')

  const user = useSelector(state => state.user.user_access_data)

  const checkAccessToken = async (response) =>{
    if(response.hasOwnProperty('newAccessToken'))
    {
      dispatch(setUserAuth({userId:user.userId, accessToken:response.newAccessToken, refreshToken:user.refreshToken}))
      setAccessToken(response.newAccessToken)
    }
  }

  useEffect(() => {
    if(user.userId === ''){
      navigate("/")
    }

    const fetchData = async () => {
      

      const user_data = await userService.user_data(user?.userId, user?.accessToken, user?.refreshToken)
      checkAccessToken(user_data)
      dispatch(setUserData(user_data))

      const user_orders = await userService.user_orders(user?.userId, user?.accessToken, user?.refreshToken)
      dispatch(setUserOrders(user_orders))

      const user_wishlist =  await userService.user_wishlist(user?.userId, user?.accessToken, user?.refreshToken)
      dispatch(setUserWishlist(user_wishlist))

      const user_questions =  await userService.user_questions(user?.userId)
      dispatch(setUserQuestions(user_questions))

      const user_reviews =  await userService.user_reviews(user?.userId)
      dispatch(setUserReviews(user_reviews))

    }

    fetchData()
  }, [user])

  const btnLogOutUser = () => {
    dispatch(logOutUser())
    navigate("/")
  }

  return (
    <main>
      <div className="user-page-block">
        <div className="buttons-block">
          <NavLink to='/profile/' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="cabinet" className="icon-svg" />
            <span className="link-title">Мій кабінет</span>
          </NavLink>
          <NavLink to='orders' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="cart" className="icon-svg-cart" />
            <span className="link-title">Мої замовлення</span>
          </NavLink>
          <NavLink to='wishlist' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="wishlist" className="icon-svg-wishlist" />
            <span className="link-title">Лист бажань</span>
          </NavLink>
          <NavLink to='reviews' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="reviews" className="icon-svg" />
            <span className="link-title">Відгуки</span>
          </NavLink>
          <NavLink to='questions' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="question" className="icon-svg" />
            <span className="link-title">Питання</span>
          </NavLink>
          {/* <NavLink to='twoFactor' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="wishlist" className="icon-svg" />
            Двофакторний захист
          </NavLink> */}
          <div className="buttons-exit-text" onClick={btnLogOutUser} >
            <Icon id="exit-cabinet" className="icon-svg" />
            <span className="link-title">Вийти</span>
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default UserPage;