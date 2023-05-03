import React from "react";
import "./footer.scss"


function Footer() {
  return (
    <div className="footer">

       <div class="footer-info-block">
          <ul class="info-footer-ul">
            <li class="info-footer-li">
                <div>
                    <span>Доставка</span>
                    <p>Самовивіз із магазину "Comfy", доставка за адресою або у відділення"Нова Пошта" і "Meest"</p>
                </div>
            </li>
            <li class="info-footer-li">
                <div>
                    <span>Гарантія</span>
                    <p>Сертифікована техніка з офіційною гарантією від виробника</p>
                </div>
            </li> 
            <li class="info-footer-li">
                <div>
                    <span>Опалата</span>
                    <p>Оплатити покупку можливо готівкою, картою чи безготівковим розрахунком.</p>
                </div>
            </li> 
            <li class="info-footer-li">
                <div>
                    <span>Повернення</span>
                    <p>Повернення товару відбувається протягом 14 днів після покупки, у відповідності із діючим законом.</p>
                </div>
            </li>
          </ul>
       </div>

        <div class="footer-subscribe-block">
        <div class="footer-subscribe">
            <div class="subscribe-text-block">
                <span class="subscribe-text">Підписуйтесь на знижки та рекомендації!</span> 
                <p>Не турбуйтесь, ми не спамимо</p>
            </div>
            <div class="subscribe-button-block">
                <p class="subscribe-email-text">Ваш email</p>
                <input class="subscribe-email-input" type="email" name=""/>
            <div class="subscb-button">
                <input class="subscribe-email-button" type="submit" name="" value="Відправити"/>
            </div>
           </div>
        </div>             
            
        </div>

       <div class="footer-links-block">
       <div class="footer-nav-join">
            <div class="footer-nav-social">
            <p class="">Приєднуйтесь</p>
            </div> 
            <a href="" class="">
            <div class=""><i class=""> </i></div>
            <span class="">Знайти магазин</span> </a>
            <div class="">
            <div class=""><i class=""> </i></div>
            <span class="">Допомога і консультація</span>
            <div class=""></div>
            <div class=""><a class="" >
            <div class=""><i class=""> </i></div>
            <span>Чат на сайті</span> </a> <a class=""  href="">
            <div class=""><i class=" "> </i></div>
            <span>Messenger</span> </a> <a class=""  href="">
            <div class=" "><i class=" "> </i></div>
            <span>Viber</span> </a> <a class=""  href="">
            <div class=" "><i class=" "> </i></div>
            <span>Telegram</span> </a> <a class=""  href="">
            <div class=" "><img src=""/></div>
            <span>Apple Messages</span> </a> <a class="" href="">
            <div class=" "><i class=""> </i></div>
            <span>0-800-303-505</span>
            <div class="">з 08:00 до 21:00 (пн-нд)<br/> Безкоштовно по Україні</div>
            </a> <a class="" href="">
            <div class=" "><i class=""> </i></div>
            <span>0-44-39-39-505</span>
            <div class="">Безкоштовно по Києву<br/> зі стаціонарного</div>
            </a></div>
            </div>
        </div>

        <div class="footer-nav-loffy">
            <p> Loffy </p>
            <ul class="">
                <li class=""><a href="">Про компанію</a></li>
                <li class=""><a href="">Магазини</a></li>
                <li class=""><a href="">Контакти</a></li>
                <li class=""><a href="">Прес-центр</a></li>
                <li class=""><a href="">Робота в LOFFY</a></li>
                <li class=""><a href="">Безпека та застереження</a> </li>
                <li class=""><a href="">Тендер</a></li>
                <li class=""><a href="">Партнерам</a></li>
                <li class=""><a href="">Каталог товарів</a></li>
                <li class=""><a href="">LOFFY допомагає</a></li>
            </ul>
        </div>
        <div class="footer-nav-services"> 
            <p> Послуги і сервіси </p>
            <ul class="">
            <li class=""><a href="">Бонусна програма</a></li>
            <li class=""><a href="">Подарункові картки</a></li>
            <li class=""><a href="">LOFFY книги</a></li>
            <li class=""><a href="">Кредит і оплата частинами</a> </li>
            <li class=""><a href="">Сервісні договори</a> </li>
            <li class=""><a href="">Безготівковий рахунок</a> </li>
            <li class=""><a href="">Оплата</a></li>
            </ul>
        </div>

        <div class="footer-nav-help">  
            <p> Допомога покупцеві</p>
            <ul>
            <li class=""><a href="">Знайти замовлення</a></li>
            <li class=""><a href="">Умови доставки</a> </li>
            <li class=""><a href="">Обмін і повернення товару</a> </li>
            <li class=""><a href="">Гарантія</a></li>
            <li class=""><a href="">Статус товару в ремонті</a> </li>
            <li class=""><a href="">Часто задавані питання</a> </li>
            <li class=""><a href="">Правила користування сайтом</a> </li>
            <li class=""><a href=""> Правила участі в акціях </a> </li>
            </ul>
        </div>

        </div>
    </div>
  );
}

export default Footer;
