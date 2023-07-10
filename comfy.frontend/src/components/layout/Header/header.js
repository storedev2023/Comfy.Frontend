import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './header.scss'
import Icon from "../../icon/icon";
import { CategoriesService } from "../../../service/CategoriesService";
import Cart from "../../cart/Cart";
import { searchService } from "../../../service/SearchService";
import { setCategoriesList } from "../../../redux/reducers/categories-reducer";
import { setHistoryToSearchList, deleteHistoryInSearchList } from "../../../redux/reducers/search-reducer";
import { priceFormat, calcDiscount } from "../../../scripts";
import { addFilterCheckBox, deleteAllFilters } from "../../../redux/reducers/filter-reducer";
import Authorization from "../../auth/authorization";

function HeaderTOP() {

    //Header cities
    const [showCities, setShowCities] = useState(false)
    const [headerFeedbackLinks, setHeaderFeedbackLinks] = useState(false)

    return (
        <>
            {showCities &&
                <div className="block-city-selector">
                    <div className="block-city-selector-top">
                        <div className="section-selector-top">
                            <div className="selector-top-search">
                                <input type="text" placeholder="Пошук міста" className="selector-search-input" />
                                <button className="selector-search-btn" >
                                    <Icon id="search" />
                                </button>
                            </div>
                            <div className="selector-top-close">
                                <button onClick={() => setShowCities(false)}>
                                    <Icon id="close" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="block-city-selector-content">
                        <div className="section-selector-content">
                            <div className="selector-items">
                                <div className="cities-list">
                                    <div className="city-names">
                                        <div className="city-name-dropdown-menu">
                                            Бахмут
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                            Біла церква
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                            Бориспіль
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                            Бровари
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                            Буча
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                            Васильків
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                            Вінниця
                                        </div>
                                    </div>
                                    <div className="city-names"><div className="city-name-dropdown-menu">
                                        Горішні Плавні
                                        </div>
                                        <div className="bigger-city-name-dropdown-menu">
                                        Дніпро
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Житомир
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Жовті Води
                                        </div>
                                        <div className="bigger-city-name-dropdown-menu">
                                        Запоріжжя
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Івано-Франківськ
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Ізмаїл
                                        </div></div>
                                    <div className="city-names">
                                        <div className="city-name-dropdown-menu">
                                        Ірпінь
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Калуш
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Кам’янське 
                                        </div>
                                        <div className="bigger-city-name-dropdown-menu">
                                        Київ
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Коростень
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Коростишів
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Краматорськ
                                        </div>
                                        </div>
                                    <div className="city-names">
                                        <div className="city-name-dropdown-menu">
                                        Кременчук
                                        </div>
                                        <div className="bigger-city-name-dropdown-menu">
                                        Кривий Ріг
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Кропивницький
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Лисичанськ
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Луцьк
                                        </div>
                                        <div className="bigger-city-name-dropdown-menu">
                                        Львів
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Маріуполь
                                        </div>
                                    </div>
                                    <div className="city-names">
                                        <div className="city-name-dropdown-menu">
                                        Мелітополь
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Миколаїв
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Новомовськ
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Обухів
                                        </div>
                                        <div className="selected-city-name-dropdown-menu">
                                        Одеса
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Охтирка
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Павлоград
                                        </div>
                                    </div>
                                    <div className="city-names">
                                        <div className="city-name-dropdown-menu">
                                        Переяслав
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Покровськ
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Полтава
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Рівне
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Сєвєродонецьк
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Слов’янськ
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Сміла
                                        </div>
                                        </div>
                                    <div className="city-names"><div className="city-name-dropdown-menu">
                                        Суми
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Ужород
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Умань
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Фастів
                                        </div>
                                        <div className="bigger-city-name-dropdown-menu">
                                        Харків
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Херсон
                                        </div>
                                        <div className="city-name-dropdown-menu">
                                        Хмельницький
                                        </div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

            <div className="header-top">
                <div className="header-top-content">
                    <div className="header-top-left">
                        <div className="header-top-logo">
                            <Link to="/" className="header-link-logo" reloadDocument={true}>
                                <Icon id="LOGO" className="header-logo" />
                            </Link>
                        </div>
                        <div className="header-top-city-selector" onClick={() => setShowCities(!showCities)}>
                            <span>Одеса</span>
                            <Icon id="header-arrow" className="top-header-arrow-icon" />
                        </div>
                    </div>
                    <nav className="header-top-nav">
                        <Link src="" className="header-link">Подарункові картки</Link>
                        <Link src="" className="header-link">Магазини</Link>
                        <Link src="" className="header-link">Замовлення</Link>
                        <div className="header-nav-feedback" onMouseEnter={() => setHeaderFeedbackLinks(true)} onMouseLeave={() => setHeaderFeedbackLinks(false)}>
                            <span>Зв’язатися</span>
                            {headerFeedbackLinks &&
                                <div className="header-nav-feedback-list" onMouseEnter={() => setHeaderFeedbackLinks(true)} onMouseLeave={() => setHeaderFeedbackLinks(false)}>
                                    <Link href="" className="header-feedback-link">Messenger</Link>
                                    <Link href="" className="header-feedback-link">Viber</Link>
                                    <Link href="" className="header-feedback-link">Telegram</Link>
                                </div>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}


function HeaderBOTTOM() {

    // Header cart
    const [isShowCart, setIsShowCart] = useState(false)
    const [isCartOverlay, setIsCartOverlay] = useState(false)

    // Header overlay
    const [showOverlaySearch, setShowOverlaySearch] = useState(false)
    const [showOverlayCatalog, setShowOverlayCatalog] = useState(false)

    useEffect(() => {
        var header_bottom = document.getElementById("header-bottom")
        var categories_menu = document.getElementById("categories-menu-block")

        //if not home page
        if (document.getElementById("home-page")) {
            header_bottom.classList.add('sticky');
        }
        else {
            if (document.getElementById("product-page")) {
                header_bottom.classList.remove('sticky');
            }

            if (showOverlayCatalog) {
                categories_menu.classList.remove('display-none');
            }
            else {
                categories_menu.classList.add('display-none');
            }
        }

        if (showOverlayCatalog) {
            categories_menu.classList.remove('display-none');
        }
        else {
            categories_menu.classList.add('display-none');
        }


    })

    //Header categories
    const [showSubCatalog, setShowSubCatalog] = useState(false)
    const [categoriesMenu, setCategoriesMenu] = useState([])

    // Getting data in the categories menu
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            const response = await CategoriesService.getCategoriesMenu()
            dispatch(setCategoriesList(response))   
            setCategoriesMenu(response)
        }
        fetchData()
    }, [dispatch])

    let mainCategory
    const showSubCatalogs = (event, action) => {
        setShowSubCatalog(action)

        let mainId = event.target.dataset.id !== undefined ? event.target.dataset.id : event.target.dataset.main_id
        mainCategory = document.querySelector('div[data-id="' + mainId + '"]')
        let subCategory = document.querySelector('div[data-main_id="' + mainId + '"]')

        try {
            if (action) {
                subCategory.classList.remove('display-none')
                mainCategory.classList.add('menu-items-active')
            }
            else {
                subCategory.classList.add('display-none')
                mainCategory.classList.remove('menu-items-active')
            }
        }
        catch (ex) {
            // не стандартно
        }

    }

    // Search
    const [searchPreviewProducts, setSearchPreviewProducts] = useState([])
    const historyList = useSelector(state => state.search_history.searchHistory)
    const showPreviewSearch = async (event) =>{
        if(event.target.value === ""){
            setSearchPreviewProducts(null)
            return
        }
    
        const response = await searchService.getPreviewSearch(event.target.value)
        setSearchPreviewProducts(response)
        console.log(response)
    }

    const navigate = useNavigate();

    const searchProducts = (event) =>{ 
        if (event.key === 'Enter' || event.target.type === "submit") { 
            updateDataHistory(document.querySelector(".header-search-input").value)
        }
    }

    const clickToHistoryItem = (event) =>{
        document.querySelector(".header-search-input").value = event.target.innerHTML
        updateDataHistory(event.target.innerHTML)
    }

    const updateDataHistory = (value) =>{
        if(value.trim() !== "")
        {
            dispatch(setHistoryToSearchList(value.trim()))
            setShowOverlaySearch(false)
            return navigate(`/search/${value}`)
        }
    }

    const deleteHistoryInList = (history) => {
        console.log(history)
        dispatch(deleteHistoryInSearchList(history))
    }

    const addFiltersPage = (filterQuery) =>{
        dispatch(deleteAllFilters())
        dispatch(addFilterCheckBox(filterQuery))
        setShowOverlayCatalog(false)
        try{
            mainCategory.classList.remove('menu-items-active')
        }
        catch{}
    }

    return (
        <>
            <div className="header-bottom sticky" id="header-bottom">
                <div className="header-bottom-content">
                    <div className="header-bottom-categories" onMouseEnter={() => setShowOverlayCatalog(true)} onMouseLeave={() => setShowOverlayCatalog(false)}>
                        <div className="header-bottom-categories-menu">
                            <Icon id="categories" className="categories-main-icon" />
                            <span className="categories-label">Каталог товарів</span>
                            <Icon id="header-arrow" className="categories-arrow-icon" />
                        </div>
                        <div className="header-bottom-categories-menu-block" id="categories-menu-block" >
                            <div className="header-bottom-categories-menu-items">
                                {categoriesMenu.map(category => (
                                    <div key={category.id} className="categories-menu-items" onMouseEnter={(event) => showSubCatalogs(event, true)} onMouseLeave={(event) => showSubCatalogs(event, false)}>
                                        <Link className="menu-item-link" to={`categories/${category.url}`} reloadDocument={true}>
                                        <div className="menu-item" data-id={category.id} >
                                            <Icon id={category.id} className="categories-icon" />
                                            <div className="categories-menu-item-and-icon">
                                                <span>{category.name}</span>
                                                <Icon id="categories-arrow" className="categories-arrow" />
                                            </div>
                                        </div>
                                        </Link>
                                        <div className="sub-categories-block display-none" data-main_id={category.id} >
                                            {category.categories.map(subCategory => (
                                                <div key={subCategory.id} className="sub-categories">
                                                    <div className="sub-categories-title">
                                                        <Link to={`categories/${category.url}/${subCategory.url}`} reloadDocument={true} >{subCategory.name}</Link>
                                                    </div>
                                                    <div className="sub-categories-filters">
                                                        { subCategory.filters.map(filter=>(
                                                            <Link key={filter.filterQuery} to={`categories/${category.url}/${subCategory.url}`}>
                                                                <div  className="categories-filters-name" onClick={() => addFiltersPage(filter.filterQuery)}>
                                                                    {filter.name}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </ div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom-search" >
                            <input type="text" placeholder="Пошук товарів" className="header-search-input" onChange={showPreviewSearch} onKeyDown={searchProducts} onMouseDown={() => setShowOverlaySearch(true)} />
                            <button className="header-search-btn" onClick={searchProducts}>
                                <Icon id="search" />
                            </button>
                        {showOverlaySearch &&                        
                        <div className="header-bottom-search-result">
                            <div className="header-bottom-searcher">
                                <div className="header-bottom-searcher-history">
                                    <div className="header-bottom-searcher-history-title">
                                        Історія пошуку
                                    </div>
                                    <div className="header-bottom-searcher-history-list">
                                    {historyList?.map(history=>(
                                        <div className="history-list-item" key={history} >
                                            <p onClick={clickToHistoryItem}>{history}</p>
                                            <div onClick={() => deleteHistoryInList(history)}>
                                                <Icon id="delete-item-cart"/>
                                            </div>    
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                { searchPreviewProducts !== null &&
                                <div className="header-bottom-searcher-products">
                                    {searchPreviewProducts.map(product =>(
                                        <Link to={`/product/${product.url}`} reloadDocument={true} className="product-link">
                                    <div className="header-bottom-searcher-history-product" key={product.name}>
                                        <div className="header-bottom-searcher-history-product-img">
                                            <img src={product.imageUrl}/>
                                        </div>
                                        <div className="header-bottom-searcher-history-product-info">
                                            <div className="header-bottom-searcher-history-product-info-name">
                                                {product.name}
                                            </div>
                                            <div className="header-bottom-searcher-history-product-info-prise">
                                                {product?.discountAmount > 0 &&
                                                    <div className="price-section-old-price">
                                                    <span className="old-price-value">
                                                        {priceFormat(product?.price)} ₴
                                                    </span>
                                                    </div>
                                                }
                                                <div className="price-section-current-price">
                                                    {product?.discountAmount > 0
                                                    ? <>{priceFormat(calcDiscount(product?.price, product?.discountAmount))}</>
                                                    : <>{priceFormat(product?.price)}</>
                                                    }
                                                    <span> ₴</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    ))}
                                </div>
                                }
                            </div>
                        </div>}

                    </div>
                    <div className="header-bottom-controls">
                        <Authorization btn_className={"header-bottom-profile controls-items"} isBtnActive={true}/>
                        <div className="header-bottom-wishlist controls-items"  >
                            <Icon id="wishlist" className="header-icon-wishlist" />
                        </div>
                        <div className="header-bottom-compare controls-items">
                            <Icon id="compare" className="header-icon" />
                        </div>
                        <div className="header-bottom-cart controls-items" onMouseEnter={() => setIsShowCart(true)} onMouseLeave={() => {setIsShowCart(false); setIsCartOverlay(false)}}>
                            <Cart isShow={isShowCart} setIsShow={setIsShowCart} setIsCartOverlay={setIsCartOverlay}/>
                        </div>
                    </div>

                    {showOverlaySearch &&
                        <div className="search-overlay" onClick={() => setShowOverlaySearch(false)}></div>
                    }
                </div>
            </div>
            {(showOverlayCatalog || isCartOverlay) &&
                <div className="catalog-overlay"></div>
            }
        </>

    );
}

function Header() {

    return (
        <>
            <HeaderTOP />
            <HeaderBOTTOM />
        </>
    );

}

export default Header;
