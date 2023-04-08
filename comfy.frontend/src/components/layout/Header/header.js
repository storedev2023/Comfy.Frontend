import React, { useState } from "react";

import './header.scss'
import Logo from './../../../assets/Logo.png'
import Icon from "../../icon/icon";
import {CSSTransition} from 'react-transition-group'


function Header() {

    // Header icon hover
    const [ showWishlist, setShowWishlist] = useState(true)
    const [ showCompare, setShowCompare] = useState(true)
    const [ showCart, setShowCart] = useState(true)

    // Header overlay
    const [ showProfile, setShowProfile] = useState(false)
    const [ showSearch, setShowSearch] = useState(false)
    const [ showCatalog, setShowCatalog] = useState(false)

    //Header cities
    const [ showCities, setShowCities] = useState(false)

    //Header categories
    const [ showSubCatalog, setShowSubCatalog] = useState(false)

  return (

    <div>
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
                        <Icon id="header-arrow" className="city-arrow-icon"/>
                    </div>
                </div>
                <nav className="header-top-nav">
                    <div className="header-nav-stock header-link">
                    Акції
                    <div className="header-nav-stock-list header-link">
                        <a href="" className="header-list-link"></a>
                        <a href="" className="header-list-link"></a>
                    </div>
                    </div>
                    <a href="" className="header-link">Подарункові картки</a>
                    <a href="" className="header-link">Магазини</a>
                    <a href="" className="header-link">Замовлення</a>
                    <div className="header-nav-more header-link">
                    Ще
                    <div className="header-nav-more-list">
                        <a href="" className="header-list-link"></a>
                        <a href="" className="header-list-link"></a>
                        <a href="" className="header-list-link"></a>
                    </div>
                    </div>
                </nav>
            </div> 
        </div>
        <div className="header-bottom" id="header-bottom">
            <div className="header-bottom-content">
                <div className="header-bottom-categories"  onMouseEnter={()=>setShowCatalog(true)} onMouseLeave={()=> setShowCatalog(false)}>
                    <div className="header-bottom-categories-menu">
                        <Icon id="categories" className="categories-main-icon"/>
                        <span className="categories-label">Каталог товарів</span>
                        <Icon id="header-arrow" className="categories-arrow-icon"/>
                    </div>
                    <div className="header-bottom-categories-menu-block">
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
                    <input type="text" placeholder="Пошук товарів" className="header-search-input" onMouseDown={()=> setShowSearch(true)}/>
                    <button className="header-search-btn">
                        <Icon id="search"/>
                    </button>
                </form>
                </div>
                <div className="header-bottom-controls ">
                    <div className="header-bottom-profile controls-items" onClick={()=> setShowProfile(!showProfile)}>
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
                { showSearch &&
                    <div className="search-overlay" onClick={()=> setShowSearch(false)}></div>         
                }
            </div>

        </div>
        { showCatalog &&
            <div className="catalog-overlay" onClick={()=> setShowSearch(false)}></div>
        }
            <CSSTransition in={showProfile} classNames="overlay" timeout={300} unmountOnExit>
            <div className="auth-modal">
                <div className="auth-modal-overlay" onClick={()=> setShowProfile(!showProfile)}>
                </div>
            </div>
            </CSSTransition>                    
            <CSSTransition in={showProfile} classNames="auth" timeout={300} unmountOnExit>
            <div className="auth-modal">
                <div className="auth-modal-dialog" >
                    <div className="auth-block" >
                        <h1>Authorization</h1>
                    </div>
                </div>
            </div>
            </CSSTransition>
    </div>

  );
}

export default Header;
