import React from "react";
import { upPage } from "../../../scripts";


import './ShopPage.scss'


function ShopPage() {
  upPage()
  return (
    <div className="shops-page">
           <div className="adress-block">
            <div className="adress-title">Адреса магазинів</div>
            <div className="shop-address">
                <div className="shop-address-title">
                    ТЦ "Сити Центр", пр. Небесной Cотни, 2 (Маршала Жукова, 2)
                </div>
                <div className="shop-address-timming">
                    Работает с 10:00 до 21:00
                </div>
            </div>
            <div className="shop-address">
                <div className="shop-address-title">
                ТЦ "Среднефонтанский", пер. Семафорный, 4
                </div>
                <div className="shop-address-timming">
                    Работает с 10:00 до 21:00
                </div>
            </div> 
            <div className="shop-address">
                <div className="shop-address-title">
                ТРЦ "Ривьера", пгт. Фонтанка, Ривьера
                </div>
                <div className="shop-address-timming">
                    Работает с 10:00 до 21:00
                </div>
            </div>
            <div className="shop-address">
                <div className="shop-address-title">
                ТРЦ "CityCenter", ул. Давида Ойстраха, 32 (Затонского, 32)
                </div>
                <div className="shop-address-timming">
                    Работает с 10:00 до 21:00
                </div>
            </div>
           </div>
           <div className="map-block">
           <iframe title="shops-map" className="shop-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5494.342342747365!2d30.734186642496752!3d46.48492293407719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631965dfc29b9%3A0xcb38625fe2099a1e!2z0JrQvtC80L8n0Y7RgtC10YDQvdCwINCQ0LrQsNC00LXQvNGW0Y8g0KjQkNCT!5e0!3m2!1suk!2sua!4v1688947911069!5m2!1suk!2sua"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
    </div>
        
  );
}

export default ShopPage;