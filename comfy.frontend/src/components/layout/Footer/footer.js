import React from "react";
import "./footer.scss"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
       <div className="footer-info-block">
          <ul className="info-footer-ul">
            <li className="info-footer-li-first">
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
                <div className="footer-nav-loffy">
                    <p> Loffy </p>
                    <ul>
                        <li> 
                        <Link to={`/aboutcompany`}>
                            Про компанію
                        </Link>
                        </li>
                      
                        <li>
                        <Link to={`/contacts`}>
                            Контакти
                        </Link>
                            </li>
                        <li>
                        <Link to={`/security`}>
                            Безпека та застереження
                        </Link>
                             </li>
                    </ul>
                </div>
                <div className="footer-nav-services"> 
                        <p> Послуги і сервіси </p>
                    <ul>
               
                    <li> <Link to={`/cashlesspayment`}>Безготівкова оплата</Link></li>
                    
                    <li><Link to={`/payment`}>Оплата</Link></li>
                    </ul>
                </div>

                <div className="footer-nav-help">  
                    <p> Допомога покупцеві</p>
                    <ul>
                    <li><Link to={`/guarantee`}>Гарантія</Link></li>
                    </ul>
                </div>
        </div>

        <div className="copywriter-block">
            <div className="copywriter">
                &copy; Всі права захищені, 2022-2023
            </div>
        </div>

    </div>
  );
}

export default Footer;
