import React, { useEffect, useState } from "react";

import './header.scss'
import Logo from './../../../assets/Logo.png'
import Icon from "../../icon/icon";
import {CSSTransition} from 'react-transition-group'
import { useInView } from 'react-intersection-observer'

function HeaderTOP(){

    //Header cities
    const [ showCities, setShowCities] = useState(false)

    //Header more stocks
    const [ headerStocksLinks, setStocksLinks] = useState(false)
    
    //Header more links
    const [ headerMoreLinks, setHeaderMoreLinks] = useState(false)
    
    //Header feedback links
    const [ headerFeedbackLinks, setHeaderFeedbackLinks] = useState(false)

    return(
        <>
        {showCities &&         
            <div className="block-city-selector"> 
                <div className="block-city-selector-top">
                    <div className="selector-top-search">
                        <input type="text" placeholder="Пошук міста" className="selector-search-input"/>
                            <button className="selector-search-btn" >
                                <Icon id="search"/>
                            </button>
                    </div>
                    <div className="selector-top-close">
                        <button onClick={()=> setShowCities(false)} >
                           <span>x</span> 
                        </button>
                    </div>
                </div>
                <div className="block-city-selector-content">
                    <div className="selector-items">
                        
                    </div>
                </div>
            </div>}
    
            <div className="header-top">
                <div className="header-top-content">
                    <div className="header-top-left">
                        <div className="header-top-logo">
                            {/* <img src={Logo}/> */}
                            <h1>LOFFY</h1>
                        </div>
                        <div className="header-top-city-selector" onClick={()=> setShowCities(!showCities)}>
                            <span>Одеса</span>
                            <Icon id="header-arrow" className="top-header-arrow-icon"/>
                        </div>
                    </div>
                    <nav className="header-top-nav">
                        <div className="header-nav-stock" onMouseEnter={()=>setStocksLinks(true)} onMouseLeave={()=> setStocksLinks(false)}>
                            Акції
                            {headerStocksLinks &&
                                <div className="header-nav-stock-list" onMouseEnter={()=>setStocksLinks(true)} onMouseLeave={()=> setStocksLinks(false)}>
                                    <a href="" className="header-stock-link"><span>Знижки до -40%</span></a>
                                    <a href="" className="header-more-stock-link">
                                        Всі акції
                                        <Icon id="body-arrow" className="header-arrow"/>
                                    </a>
                                </div>
                            }
                        </div>
                        <a href="" className="header-link">Подарункові картки</a>
                        <a href="" className="header-link">Магазини</a>
                        <a href="" className="header-link">Замовлення</a>
                        <div className="header-nav-more header-link" onMouseEnter={()=>setHeaderMoreLinks(true)} onMouseLeave={()=> setHeaderMoreLinks(false)}>
                            <span>Ще</span>
                            <Icon id="header-arrow" className="top-header-arrow-icon" />
                            {headerMoreLinks &&
                                <div className="header-nav-more-list" onMouseEnter={()=>setHeaderMoreLinks(true)} onMouseLeave={()=> setHeaderMoreLinks(false)}>
                                    <a href="" className="header-more-link">Доставка</a>
                                    <a href="" className="header-more-link">Повернення</a>
                                    <a href="" className="header-more-link">Блог</a>
                                </div>
                            }
                        </div>
                        <div className="header-nav-feedback" onMouseEnter={()=>setHeaderFeedbackLinks(true)} onMouseLeave={()=> setHeaderFeedbackLinks(false)}>
                            <span>Зв’язатися</span>
                            {headerFeedbackLinks &&
                                <div className="header-nav-feedback-list" onMouseEnter={()=>setHeaderFeedbackLinks(true)} onMouseLeave={()=> setHeaderFeedbackLinks(false)}>
                                    <a href="" className="header-feedback-link">Messenger</a>
                                    <a href="" className="header-feedback-link">Viber</a>
                                    <a href="" className="header-feedback-link">Telegram</a>
                                </div>
                            }
                        </div>
                    </nav>
                </div> 
            </div>
        </>
    );
}




function HeaderBOTTOM(){
    // Header icon hover
    const [ showWishlist, setShowWishlist] = useState(true)
    const [ showCompare, setShowCompare] = useState(true)
    const [ showCart, setShowCart] = useState(true)

    // Header overlay
    const [ showOverlayProfile, setShowOverlayProfile] = useState(false)
    const [ showOverlaySearch, setShowOverlaySearch] = useState(false)
    const [ showOverlayCatalog, setShowOverlayCatalog] = useState(false)  

    useEffect(()=>{
        var header_bottom = document.getElementById("header-bottom")
        var categories_menu = document.getElementById("categories-menu-block")
        
        //if not home page
        if(!document.getElementById("home-page")){
            if(!document.getElementById("product-page")){
                header_bottom.classList.add('sticky');
            }
            
            if(showOverlayCatalog){
                categories_menu.classList.remove('display-none');
            }
            else{
                categories_menu.classList.add('display-none');
            }
        }

        //if sticky
        if(header_bottom.classList.contains("sticky")){
            if(showOverlayCatalog){
                categories_menu.classList.remove('display-none');
            }
            else{
                categories_menu.classList.add('display-none');
            }     
        }
        
    })

    //Header categories
    const [ showSubCatalog, setShowSubCatalog] = useState(false)


  return (
        <>
            <div className="header-bottom" id="header-bottom">
                <div className="header-bottom-content">
                    <div className="header-bottom-categories"  onMouseEnter={()=>setShowOverlayCatalog(true)} onMouseLeave={()=> setShowOverlayCatalog(false)}>
                        <div className="header-bottom-categories-menu">
                            <Icon id="categories" className="categories-main-icon"/>
                            <span className="categories-label">Каталог товарів</span>
                            <Icon id="header-arrow" className="categories-arrow-icon"/>
                        </div>
                        <div className="header-bottom-categories-menu-block" id="categories-menu-block" >
                            <div className="header-bottom-categories-menu-items">
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-phone" className="categories-icon"/>
                                    <a>Смартфони та телефони</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-laptop" className="categories-icon"/>
                                    <a>Ноутбуки, планшети та комп'ютерна техніка</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-cooker" className="categories-icon"/>
                                    <a>Техніка для кухні</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-laundry" className="categories-icon"/>
                                    <a>Техніка для дому</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-desktop" className="categories-icon"/>
                                    <a>Телевізори та мультимедіа</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-watch" className="categories-icon"/>
                                    <a>Смарт-годинники та гаджети</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-headphones" className="categories-icon"/>
                                    <a>Аудіо</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-controller" className="categories-icon"/>
                                    <a>Ігрові консолі та геймінг</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-camera" className="categories-icon"/>
                                    <a>Фото та відео</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-barcode" className="categories-icon"/>
                                    <a>Краса і здоров'я</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-soup" className="categories-icon"/>
                                    <a>Посуд</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-freshener" className="categories-icon"/>
                                    <a>Побутова хімія</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-chair" className="categories-icon"/>
                                    <a>Дім та відпочинок</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-child" className="categories-icon"/>
                                    <a>Comfy KIDS</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-tools" className="categories-icon"/>
                                    <a>Інструменти і автотовари</a>
                                </div>
                                <div className="categories-menu-items menu-items" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-sell" className="categories-icon"/>
                                    <a>Уцінені товари</a>
                                </div>
                                <div className="categories-menu-items menu-items"onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    <Icon id="categories-confirmation" className="categories-icon"/>
                                    <a>Сервіси, підписки та софт</a>
                                </div>
                            </div>
                            {showSubCatalog &&
                                <div className="sub-categories-block" onMouseEnter={()=>setShowSubCatalog(true)} onMouseLeave={()=> setShowSubCatalog(false)}>
                                    
                                </ div>
                            }
                        </div>
                    </div>
                    <div className="header-bottom-search" id="header-bottom-search">
                    <form>
                        <input type="text" placeholder="Пошук товарів" className="header-search-input" onMouseDown={()=> setShowOverlaySearch(true)}/>
                        <button className="header-search-btn">
                            <Icon id="search"/>
                        </button>
                    </form>
                    </div>
                    <div className="header-bottom-controls ">
                        <div className="header-bottom-profile controls-items" onClick={()=> setShowOverlayProfile(!showOverlayProfile)}>
                            <a className="header-bottom-profile-link">
                                <span>Увійти</span>
                            </a>
                        </div>
                        <div className="header-bottom-wishlist controls-items" onMouseLeave={()=> setShowWishlist(true)} onMouseEnter={()=>setShowWishlist(false)}  >
                            {showWishlist && <Icon id="wishlist" className="header-icon" />}
                            {!showWishlist && <Icon id="wishlist-full" className="header-icon-full" />}
                        </div>
                        <div className="header-bottom-compare controls-items" onMouseEnter={()=>setShowCompare(false)} onMouseLeave={()=> setShowCompare(true)}>
                            {showCompare && <Icon id="compare" className="header-icon" />}
                            {!showCompare && <Icon id="compare-full" className="header-icon-full" />}
                        </div>
                        <div className="header-bottom-cart controls-items" onMouseEnter={()=>setShowCart(false)} onMouseLeave={()=> setShowCart(true)}>
                            {showCart && <Icon id="cart" className="header-icon" />}
                            {!showCart && <Icon id="cart-full" className="header-icon-full" />}
                        </div>
                    </div>
                    { showOverlaySearch &&
                        <div className="search-overlay" onClick={()=> setShowOverlaySearch(false)}></div>         
                    }
                </div>
            </div>
        { showOverlayCatalog &&
            <div className="catalog-overlay"></div>
        }
            <CSSTransition in={showOverlayProfile} classNames="overlay" timeout={300} unmountOnExit>
            <div className="auth-modal">
                <div className="auth-modal-overlay" onClick={()=> setShowOverlayProfile(!showOverlayProfile)}>
                </div>
            </div>
            </CSSTransition>                    
            <CSSTransition in={showOverlayProfile} classNames="auth" timeout={300} unmountOnExit>
            <div className="auth-modal">
                <div className="auth-modal-dialog" >
                    <div className="auth-block" >
                        <div class="auth-title-block">
                            <p class="auth-title-text">Увійти</p>
                        </div>
                        <div class="auth-inputs-block">
                        
                                <p class="auth-input-title-text">Номер телефону</p>
                                <input class="auth-input" type="number" placeholder="+380(099)999999"/>
                         
                                <p class="auth-input-title-text">Поштова адресса</p>
                                <input  class="auth-input" type="email"/>

                                <p class="auth-input-title-text">Пароль</p>
                                <input  class="auth-input" type="password"/>

                                <input  class="auth-input-button" type="button" value="Увійти"/>
                        </div>
                        <div class="auth-text-block">
                            <p class="auth-title-text">Увійти через</p>
                            <div class="auth-social-button-block">
                                <input  class="auth-facebook-button" type="button" value="Facebook"/>
                                <input  class="auth-google-button" type="button" value="Google"/>
                            </div>
                                <p class="forgor-password-text">Забули пароль? Натисніть <a href="">cюди</a></p>
                                <p class="registration-text">Якщо у вас все ще нема профелю, будь-ласка <br/><a href="">Зареєструватися</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </CSSTransition>
    </>

  );
}

function Header() {

    return(
        <>
        <HeaderTOP/>
        <HeaderBOTTOM/>
        </>
    );

}

export default Header;
