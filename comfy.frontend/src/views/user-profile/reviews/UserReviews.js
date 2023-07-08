import React, { useEffect, useState } from "react";
//Components
import  Card                from "../../../components/card/Card";
import  Icon                from "../../../components/icon/icon";
//styles
import './UserReviews.scss'


function Reviews() {
  return (
            <div className="reviews-block">
              <div className="reviews-title">
                  Ваші відгуки
                </div>
                <div className="reviews">
                    <div className="review">
                      <div className="review-title">
                        Відгук про товар 
                      </div> 
                      <div className="review-product-name">
                        Ноутбук Apple MacBook Pro 14'' M2 Pro 1TB MPHF3 Space Gray
                      </div>
                      <div className="border"></div>
                      <div className="review-body">
                        <div className="rtitle">
                          Відгук
                        </div> 
                        <div className="text">
                        Дуже сподобався! Дякую консультантам магазина Comfy! Влаштовуємо з друзями гриль вечірки! Друзі приїжджають до мене та я з гриль приїжджаю до друзів! Для поверхонь гриль хотілося б спеціальний портфель з відділеннями, для безпечного переміщення!
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="review-body">
                        <div className="rtitle">
                          Плюси
                        </div> 
                        <div className="text">
                        Зручність та практичність
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="review-body">
                        <div className="rtitle">
                          Недоліки
                        </div> 
                        <div className="text">
                        Не має портфеля для переміщення поверхонь гриль
                        </div>
                      </div>
                      <div className="border"></div>
                      <div className="review-rating-data">
                        <div className="review-rating">
                          Оцінка відгука
                          <div className="rating">
                            
                          </div>
                        </div>
                        <div className="review-data">
                          23.06.2024
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
  );
}

export default Reviews;