import React from "react";
import { upPage } from "../../../scripts";
import  Icon from "../../../components/icon/icon";


import './Contacts.scss'


function Contacts() {
  upPage()
  return (
    <div className="contacts-page">
            <div className="contacts-block">
            <p className="contacts-title">Контакти</p>
            <div className="contacts-paragraphы">
              <p className="contacts-first-paragraph">Багатоканальний телефон гарячої лінії. Щодня 8:00-22:00</p>
              <p className="contacts-second-paragraph">Дзвінки з мобільних та стаціонарних телефонів у межах України безкоштовні.</p>
              <p className="contacts-third-paragraph">Email: info@loffy.ua</p>
              <p className="contacts-third-paragraph">Online чат</p>
              <p className="contacts-third-paragraph">Якщо у вас є скарги, пропозиції чи коментарі щодо роботи магазинів Loffy — обов'язково повідомте нам про це по телефону! Адреса прийняття письмових претензій: 49100, місто Дніпро, бульвар Слави, будинок 6 Б (служба підтримки споживачів ТОВ «ЛОФФИ ТРЕЙД») або за місцезнаходженням будь-якого з магазинів LOFFY. Адреса для прийняття претензій щодо обміну/повернення товарів: місцезнаходження будь-якого з магазинів LOFFY</p>

              
            </div>
            </div>
      </div>
        
  );
}

export default Contacts;