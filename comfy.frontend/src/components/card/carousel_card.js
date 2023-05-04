import React from "react"
//components
import Icon     from "../icon/icon";
//style
import './carousel_card.scss'
import I1 from '../../assets/images/TestProduct/w_600.jpg'



const CarouselCard = (props) => {

  return (
    <div className="carousel-simple-item">
        <div className="list-item-header">
        </div>
        <div className="carousel-simple-img">
            <a  className="img-link">
                <img src={I1}/>
            </a>
        </div>
        <div className="carousel-simple-item-info">
            <a href="#" >Ноутбук ігровий Lenovo IdeaPad Gaming 3 15ACH6 (82K201B9RA) Shadow Black</a>
            <div className="carousel-simple-info-content">
                <div className="content-feedback-labels">
                    <div className="content-feedback">
                        <div className="content-rating">

                        </div>
                        <div className="content-comments">

                        </div>
                    </div>
                    <div className="content-labels">

                    </div>
                </div>
                <div className="content-price-actions">
                    <div className="content-price-actions-content"> 
                        <div className="actions-content-price">
                            <div className="actions-content-price-old">
                                35 999 ₴
                                <span className="actions-content-price-discount">
                                    -17%
                                </span>
                            </div>
                            <div className="actions-content-price-current">
                                29 999 
                                <span className="actions-content-price-currency">
                                    ₴
                                </span>
                            </div>
                        </div>
                        <div className="actions-content-btn">
                            <button className="list-item-btn">
                                <Icon id="cart" className="card-btn-icon"/>  
                            </button>
                        </div>
                    </div>
                    <div className="content-price-actions-annotations">
                </div>
               </div>
            </div>
        </div>
    </div>
  );
}

export default CarouselCard;
