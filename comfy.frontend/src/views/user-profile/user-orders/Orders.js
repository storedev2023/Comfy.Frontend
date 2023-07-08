import React, { useEffect, useState } from "react";
//Components
import Card from "../../../components/card/Card";
import Icon from "../../../components/icon/icon";
//styles
import './Orders.scss'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userService } from "../../../service/UserService";
import { setUserOrders } from "../../../redux/reducers/user-reducer";
import Order from "../../../components/order/Order";


function Orders() {

  const user = useSelector(state => state.user.user_access_data)
  const [orderList, setOrderList] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const response = await userService.user_orders(user?.userId, user?.accessToken)
      setOrderList(response)
      dispatch(setUserOrders(response))
    }
    fetchData()
  }, [user])







  return (
    <div className="orders-block">
      <div className="orders-block-title">
        Мої замовлення
      </div>
      <div className="orders-list">
        {orderList !== undefined  ?
          <>
            {Array.from(orderList).map(order => (
              <Order order={order} key={order.id}/>
            ))}
          </>
          : <div className="empty-list">
            У вас немає жодного замовлення
          </div>
        }

      </div>
    </div>
  );
}

export default Orders;