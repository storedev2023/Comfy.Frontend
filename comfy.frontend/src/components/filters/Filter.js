import React, { useState } from "react"
import { setItemInCart } from "../../redux/reducers/cart-reducer"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

//components

//style
import './Filter.scss'

const Filter = ({
    title,
    isPrice,
    characteristics,
    maxView,
}) => {

    const [isMaxView, setIsMaxView] = useState(false)

    const fullCharacteristics = (e) => {
        setIsMaxView(!isMaxView)
        if (isMaxView) {
            e.target.className.add("open")
        } else {
            e.target.className.remove("open")
        }
    }

    return (
        <div className="product-filter">
            <div className="filter-header">
                <div className="filter-header-name">
                    {characteristics.name}
                </div>
                <div className="filter-header-hide-btn">

                </div>
            </div>
            {isPrice
                ? <>
                    <div className="filter-action">
                        <div className="filter-price-title">
                            Ціна
                        </div>
                        <div className="filter-price-inputs">
                            <div className="filter-price-input-label">
                                від
                            </div>
                            <div className="filter-price-input">
                                <input type="text" defaultValue="0" onChange={changeMoneyFormat} />
                            </div>
                            <div className="filter-price-input-label">
                                до
                            </div>
                            <div className="filter-price-input">
                                <input type="text" defaultValue="0" onChange={changeMoneyFormat} />
                            </div>
                            <div className="filter-price-input-label">
                                ₴
                            </div>
                        </div>
                        <div className="filter-price-btn">
                            <button>
                                Застосувати
                            </button>
                        </div>
                    </div>
                    <div className="filter-submit-btn">

                    </div>
                </>
                : <div className="filter-action">
                    <div className="filter-action-checkboxes">

                    </div>
                </div>
            }
            {characteristics > maxView &&
                <div className="filter-hide-btn" onClick={fullCharacteristics}>
                    {isMaxView ? <>ПОКАЗАТИ ЩЕ</> : <>ПРИХОВАТИ</>}
                </div>
            }

        </div>
    );
}

export default Filter;
