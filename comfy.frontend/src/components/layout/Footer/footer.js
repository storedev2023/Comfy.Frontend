import React from "react";
import "./footer.scss"


function Footer() {
  return (
    <div className="footer">
       <div className="footer-info-block">
          <ul className="info-footer-ul">
            <li className="info-footer-li">
                <div>
                    <span>Доставка</span>
                    <p>Самовивіз із магазину "Comfy", доставка за адресою або у відділення"Нова Пошта" і "Meest"</p>
                </div>
            </li>
            <li className="info-footer-li">
                <div>
                    <span>Гарантія</span>
                    <p>Сертифікована техніка з офіційною гарантією від виробника</p>
                </div>
            </li> 
            <li className="info-footer-li">
                <div>
                    <span>Опалата</span>
                    <p>Оплатити покупку можливо готівкою, картою чи безготівковим розрахунком.</p>
                </div>
            </li> 
            <li className="info-footer-li">
                <div>
                    <span>Повернення</span>
                    <p>Повернення товару відбувається протягом 14 днів після покупки, у відповідності із діючим законом.</p>
                </div>
            </li>
          </ul>
       </div>

        <div className="footer-subscribe-block">
            <div className="footer-subscribe">
                <div className="subscribe-text-block">
                    <span className="subscribe-text">Підписуйтесь на знижки та рекомендації!</span> 
                    <p>Не турбуйтесь, ми не спамимо</p>
                </div>
                <div className="subscribe-button-block">
                    <p className="subscribe-email-text">Ваш email</p>
                    <input className="subscribe-email-input" type="email" placeholder="email@email.com"/>
                    <div className="subscb-button">
                        <button className="subscribe-email-button" type="submit">Відправити</button>
                    </div>
                </div>
            </div>             
        </div>

        <div className="footer-links-block">
            <div className="footer-nav-join">
                <div className="footer-nav-social">
                    <p>Приєднуйтесь</p>
                </div> 
                <a href="">
                <span>Знайти магазин</span> </a>
                <div>
                    <span>Допомога і консультація</span>
                    <div>
                        <a> <span>Чат на сайті</span></a> 
                        <a><span>Messenger</span> </a> 
                        <a><span>Viber</span> </a> 
                        <a><span>Telegram</span> </a> 
                        <a><span>Apple Messages</span> </a> 
                        <a>
                            <span>0-800-303-505</span>
                            <div>
                                з 08:00 до 21:00 (пн-нд)<br/> 
                                Безкоштовно по Україні
                            </div>
                        </a> 
                        <a>
                            <span>0-44-39-39-505</span>
                            <div>
                                Безкоштовно по Києву<br/> 
                                зі стаціонарного
                            </div>
                        </a>
                    </div>
                </div>
            </div>

                <div className="footer-nav-loffy">
                    <p> Loffy </p>
                    <ul>
                        <li><a href="">Про компанію</a></li>
                        <li><a href="">Магазини</a></li>
                        <li><a href="">Контакти</a></li>
                        <li><a href="">Прес-центр</a></li>
                        <li><a href="">Робота в LOFFY</a></li>
                        <li><a href="">Безпека та застереження</a> </li>
                        <li><a href="">Тендер</a></li>
                        <li><a href="">Партнерам</a></li>
                        <li><a href="">Каталог товарів</a></li>
                        <li><a href="">LOFFY допомагає</a></li>
                    </ul>
                </div>
                <div className="footer-nav-services"> 
                    <p> Послуги і сервіси </p>
                    <ul>
                    <li><a href="">Бонусна програма</a></li>
                    <li><a href="">Подарункові картки</a></li>
                    <li><a href="">LOFFY книги</a></li>
                    <li><a href="">Кредит і оплата частинами</a> </li>
                    <li><a href="">Сервісні договори</a> </li>
                    <li><a href="">Безготівковий рахунок</a> </li>
                    <li><a href="">Оплата</a></li>
                    </ul>
                </div>

                <div className="footer-nav-help">  
                    <p> Допомога покупцеві</p>
                    <ul>
                    <li><a href="">Знайти замовлення</a></li>
                    <li><a href="">Умови доставки</a> </li>
                    <li><a href="">Обмін і повернення товару</a> </li>
                    <li><a href="">Гарантія</a></li>
                    <li><a href="">Статус товару в ремонті</a> </li>
                    <li><a href="">Часто задавані питання</a> </li>
                    <li><a href="">Правила користування сайтом</a> </li>
                    <li><a href=""> Правила участі в акціях </a> </li>
                    </ul>
                </div>

        </div>
    </div>
  );
}

export default Footer;
