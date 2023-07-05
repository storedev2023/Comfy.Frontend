import React, { useEffect, useState } from "react";
//Components
import  Card                from "../../../components/card/Card";
import  Icon                from "../../../components/icon/icon";
//styles
import './UserPersonalData.scss'


function UserPersonalData() {
  return (
          <div className="personal-data-block">
              <div className="personal-data-title">
                Ваші персональні дані
              </div>
              <div className="personal-data-small-title">
                Особисті дані:
              </div>
              <div className="full-name-div">
                  <div className="title">
                  ПІБ
                </div>
                <div className="full-name-text">
                    Тіана Сідху
                </div>
              </div>
              <div className="mail-div">
                  <div className="title">
                  Пошта
                </div>
                <div className="mail-text">
                  tia.sidhu81@gmai.com
                </div>
              </div>
              <div className="phone-div">
                  <div className="title">
                  Номер телефону
                </div>
                <div className="phone-text">             
                  +38 (099) 222 - 22 - 22
                </div>
              </div>
              <div className="bday-div">
                  <div className="title">
                  Дата народження
                </div>
                <div className="bday-text">
                  18.11.2001
                </div>
              </div>
              <div className="delivery-div">
                  <div className="title">
                  Адреса доставки
                </div>
                <div className="delivery-text">
                  Одеса, Садова 3, 1234
                </div>
              </div>
          </div>
  );
}

export default UserPersonalData;