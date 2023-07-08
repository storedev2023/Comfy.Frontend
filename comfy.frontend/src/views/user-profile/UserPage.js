import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, useNavigate, NavNavLink } from "react-router-dom";
//Components
import Icon from "../../components/icon/icon";
//styles
import './UserPage.scss'
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, setUserData } from "../../redux/reducers/user-reducer";
import { userService } from "../../service/UserService";
import { upPage } from "../../scripts";


function UserPage() {
  upPage()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.user.user_access_data)
  useEffect(() => {

    if(user.userId === ''){
      navigate("/")
    }

    const fetchData = async () => {
      const response = await userService.user_data(user?.userId, user?.accessToken)
      dispatch(setUserData(response))
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
            <Icon id="wishlist" className="icon-svg" />
            Мій кабінет
          </NavLink>
          <NavLink to='orders' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="cart" className="icon-svg" />
            Мої замовлення
          </NavLink>
          <NavLink to='wishlist' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="wishlist" className="icon-svg" />
            Список бажань
          </NavLink>
          <NavLink to='reviews' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="wishlist" className="icon-svg" />
            Відгуки
          </NavLink>
          <NavLink to='questions' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="wishlist" className="icon-svg" />
            Питання
          </NavLink>
          <NavLink to='twoFactor' className={({ isActive }) => isActive ? "link-active" : "link-pending"} >
            <Icon id="wishlist" className="icon-svg" />
            Двофакторний захист
          </NavLink>
          <div className="buttons-exit-text" onClick={btnLogOutUser} >
            <span>Вийти</span>
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default UserPage;