import React from "react";
import { upPage } from "../../../scripts";
import  Icon from "../../../components/icon/icon";


import './Questions.scss'


function Questions() {
  upPage()
  return (
      <div className="questions-page">

        <div className="questions-page-block">
          <div className="product-name-title">
          Ноутбук Apple MacBook Pro 14'' M2 Pro 1TB MPHF3 Space Gray
          </div>
          <div className="product-code-title">
            Код:100010
          </div>
          <div className="question-block">
            <div className="user-name">
              Стасік
            </div>
            <div className="question-data-title">
              5.9.2023
            </div>
            <div className="question-text-block">
              Клавіатура є?
            </div>
            <div className="assessment-question-text-block">
              <div className="dislike-button">
               &#128078;
              </div>
              <div className="like-button">
              &#128077;
              </div>
            </div>
            <div className="question-buttons">
              <div className="create-answer-button">
                Відповісти
              </div>
              <div className="answer-button">
                Показати відповіді
              </div>
            </div>
            <div className="answer-block">
              <div className="answer">
                <div className="answer-user-name">
                  Сашко
                </div>
                <div className="answer-text">
                  Стасік, ти дурак?
                </div>
              </div>
              <div className="answer">
                <div className="answer-user-name">
                  Відповідь Loffy
                </div>
                <div className="answer-text">
                  Стасік, ви заблоковані
                </div>
              </div>
            </div>
          </div>

          <div className="question-block">
            <div className="user-name">
              Віатлік
            </div>
            <div className="question-data-title">
              5.9.2023
            </div>
            <div className="question-text-block">
              Клавіатура є?
            </div>
            <div className="assessment-question-text-block">
              <div className="dislike-button">
               &#128078;
              </div>
              <div className="like-button">
              &#128077;
              </div>
            </div>
            <div className="question-buttons">
              <div className="create-answer-button">
                Відповісти
              </div>
              <div className="answer-button">
                Показати відповіді
              </div>
            </div>
            <div className="create-answer-block">
            <textarea className="answer-input" rows="4" cols="50"></textarea>
            <div className="submit-answer-button">
                Відповісти
              </div>
            </div>
          </div>


        </div>


        <div className="product-page-block">
          <div className="product-question-image">
          </div>
          <div className="product-information-block">
            <div className="product-price-title">
             12 00000
            </div>
            <div className="product-old-price-title">
             100 000
            </div>
            <div className="product-price-discount">
             100%
            </div>
           <div className="product-wishlist-buttobs-block">
            <Icon id="compare" className="icon-svg-question-page"/>
            <Icon id="wishlist" className="icon-svg-question-page"/>
           </div>
           <div className="product-buy-button">
           <Icon id="cart" className="icon-cart-svg-question-page"/>
              Купити
           </div>
           
          </div>
        </div>

      </div>
        
  );
}

export default Questions;