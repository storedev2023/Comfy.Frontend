import React from "react";
import { upPage } from "../../../scripts";
import  Icon from "../../../components/icon/icon";


import './AboutCompany.scss'


function AboutCompany() {
  upPage()
  return (
      <div className="about-company-page">
            <div className="about-company-block">
              <p className="about-company-title">Про компанію Loffy: для вашої зручності та задоволення</p>
              <div className="about-company-first-paragraph">
                <p className="first-paragraph">Ласкаво просимо на сторінку "Про компанію" Loffy! Ми раді представити вам наш унікальний інтернет-маркетплейс, створений з метою забезпечити вам зручність та задоволення при онлайн-шопінгу.
                В Loffy ми прагнемо надати нашим клієнтам винятковий досвід покупок, об'єднуючи в одному місці широкий асортимент товарів і послуг від різних продавців. Наш маркетплейс пропонує багато категорій товарів, включаючи моду, електроніку, косметику, спортивні товари, товари для дому та багато іншого. Ми намагаємося зробити вашу подорож по нашому маркетплейсу непринагідливою та зручною. За допомогою інтуїтивно зрозумілого інтерфейсу та зручних функцій пошуку ви зможете легко знайти потрібне вам товар і оформити замовлення всього за кілька кліків. Ми також забезпечуємо безпечні та надійні способи оплати, щоб ви могли здійснювати покупки з впевненістю.
                В Loffy ми цінуємо наших клієнтів та продавців. Ми намагаємося підтримувати прозорість та відкритість у всьому, що ми робимо. Наша команда працює над тим, щоб надати вам найкращий сервіс та оперативну підтримку, відповідаючи на ваші запитання та вирішуючи виникаючі проблеми.</p>
                <div className="first-paragraph-img">
                </div>
              </div>
              <div className="about-company-second-paragraph">
                <div className="second-paragraph-img">
                </div>
                <p className="second-paragraph">Ми також постійно прагнемо розширити наш асортимент та привернути нових продавців, щоб запропонувати вам ще більше варіантів вибору. Якщо ви зацікавлені в продажу своїх товарів на нашому маркетплейсі, не соромтеся зв'язатися з нами. Ми залюбки розглянемо можливість партнерства та допоможемо вам досягти успіху.
                Дякуємо, що обрали Loffy. Ми сподіваємося, що ваш досвід покупок на нашому маркетплейсі буде приємним та корисним. Якщо у вас є які-небудь питання або коментарі, не соромтеся зв'язатися з нами. Ми завжди готові допомогти.
                З повагою,
                Команда Loffy</p>
                </div>
            </div>
      </div>
        
  );
}

export default AboutCompany;