import React from "react";
import { upPage } from "../../../scripts";
import  Icon from "../../../components/icon/icon";


import './Contacts.scss'


function Contacts() {
  upPage()
  return (
    <div className="contacts-page">
            <div className="contacts-block">
            <p className="contacts-title">Контакти Loffy: Зв'яжіться з нами та залиште свої враження</p>
            <div className="contacts-first-paragraph">
              <p className="contacts-first-paragraph">Ласкаво просимо на сторінку "Контакти" Loffy! Ми цінуємо взаємодію з нашими клієнтами і завжди готові відповісти на ваші запитання, вирішити проблеми та прийняти ваші пропозиції.
Ми розуміємо, що ваші думки та зворотній зв'язок є надзвичайно важливими для поліпшення нашого сервісу. Тому, якщо у вас є будь-які питання, коментарі або пропозиції, будь ласка, зв'яжіться з нами. Наша команда експертів буде рада допомогти вам.
</p>

              <p className="contacts-second-paragraph">Ми дуже цінуємо ваш час і зробимо все можливе, щоб надати вам якісну підтримку та відповісти на всі ваші запитання. Наша мета - забезпечити вам найкращий досвід покупок на Loffy, тому не соромтеся звертатися до нас з будь-якими питаннями.

Дякуємо, що обрали Loffy. Ми чекаємо на ваші контакти та надаємо вам гарантію відмінного обслуговування.

З повагою,
Команда Loffy</p>
            </div>
            </div>
      </div>
        
  );
}

export default Contacts;