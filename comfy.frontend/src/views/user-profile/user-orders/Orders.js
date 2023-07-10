import React from "react";
import { useSelector} from "react-redux";

//Components
//styles
import './Orders.scss'
import Order from "../../../components/order/Order";


function Orders() {


  const orders = useSelector(state => state.user.user_orders)



  return (
    <div className="orders-block">
      <div className="orders-block-title">
        Мої замовлення
      </div>
      <div className="orders-list">
        {orders.length !== 0 ?
          <>
            {orders.map(order => (
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