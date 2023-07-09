import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Components
import  Card from "../../../components/card/Card";
import  Icon from "../../../components/icon/icon";
//styles
import './UserReviews.scss'

import Preloader  from "../../../components/preloader/Preloader";
import StarRating from "../../../components/star-rating/StarRating";
import { editDateFormat } from "../../../scripts";
function Reviews() {

  const user = useSelector(state => state.user.user_access_data)
  const user_reviews = useSelector(state => state.user.user_reviews)



  if(user_reviews.userId === "")
  {
    return( <Preloader/>)
  }
  else{
    return (
        <div className="reviews-block">
          <div className="reviews-title">
              Ваші відгуки
          </div>
          <div className="reviews-list">
            {user_reviews?.reviews.length !== 0 ? 
              <>{user_reviews?.reviews?.map(review => (  
                <div className="reviews-list-review" key={review.id}>
                  <div className="reviews-list-review-title">
                    <div className="reviews-list-review-title-text">   
                      <Link to={`/product/${review.productUrl}`} reloadDocument={true}>{review.productName}</Link>
                    </div>
                    <div className="reviews-list-review-title-rating">
                    <StarRating defaultState={review.productRating} listClass={"star-rating-profile-reviews-page"}  width={23} height={23} />
                    </div>
                    <div className="reviews-list-review-title-likes-dislikes">
                      <div className="reviews-list-review-title-like">
                        <Icon id="like"/>
                        <span>{review.dislikes}</span>
                      </div>
                      <div className="reviews-list-review-title-dislikes">
                        <Icon id="dislike"/>
                        <span>{review.dislikes}</span>
                      </div>
                    </div>
                   </div>
                  <div className="reviews-list-review-text">
                    {review.text}
                  </div>
                  <div className="reviews-list-review-advantages">
                    <div className="advantages-title">
                      Плюси:
                    </div>
                    <div className="advantages-text">
                    {review.advantages}
                    </div>
                  </div>
                  <div className="reviews-list-review-disadvantages">
                    <div className="disadvantages-title">
                      Мінуси:
                    </div>
                    <div className="disadvantages-text">
                    {review.disadvantages}
                    </div>
                  </div>
                  <div className="reviews-list-bottom">
                    <div className="reviews-list-review-data">
                      <span>Дата створення:</span> {editDateFormat(review.createdAt)}
                    </div>
                    <div className="reviews-list-review-btn">
                      <div className="reviews-list-review-btn-edit">
                        <button>Редагувати</button>
                      </div>
                      <div className="reviews-list-review-btn-delete">
                        <button>Видалити</button>
                      </div>
                    </div>
                  </div>
  
                </div>
              ))}</>
              :<div className="empty-list">
                Ви не залишали відгуків
              </div>
            }

          </div>           
        </div>
  );
  }

}

export default Reviews;