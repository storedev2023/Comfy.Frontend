import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
//Components
import  Card                from "../../components/card/Card";
import  Icon                from "../../components/icon/icon";
import CarouselProductViewed from "../../components/carousel/product-viewed/Carousel-product-viewed"
//styles
import './UserPage.scss'


function UserPage() {
  return (
        <main>
          <div className="user-page-block">
              <div className="buttons-block">
                <ul className="buttons-ul">
                  <li className="first-buttons-li">
                  <Link to='/profile/'>
                    <div className="buttons-text">
                      <Icon id="wishlist" className="icon-svg"/>
                      Мій кабінет
                    </div>
                    </Link>
                  </li>
                  <li className="buttons-li">
                  <Link to='orders'>
                    <div className="buttons-text">
                      <Icon id="cart" className="icon-svg"/>
                      Мої закази
                    </div>
                    </Link>
                  </li>
                  <li className="buttons-li">
                      <Link to='wishlist'>
                      <div className="buttons-text">
                        <Icon id="wishlist" className="icon-svg"/>
                        Список бажань
                      </div>
                     </Link>
                  </li>
                  <li className="buttons-li">
                  <Link to='reviews'>
                    <div className="buttons-text">
                      <Icon id="wishlist" className="icon-svg"/>
                      Відгуки
                    </div>
                  </Link>
                  </li>
                  <li className="buttons-li">
                  <Link to='questions'>
                    <div className="buttons-text">
                      <Icon id="wishlist" className="icon-svg"/>
                      Питання
                    </div>
                  </Link>
                  </li>
                  <li className="buttons-li">
                    <div className="buttons-exit-text">
                      Вийти
                    </div>
                  </li>
                </ul>
              </div>
            <Outlet />
            </div>
        </main>
  );
}

export default UserPage;