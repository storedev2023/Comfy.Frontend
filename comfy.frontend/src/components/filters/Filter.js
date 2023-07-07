import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types";

//components
import Icon from "../icon/icon";
import { addFilterCheckBox, addFilterMark, addFilterPrice, deleteFilterCheckBox, deleteFilterMark } from "../../redux/reducers/filter-reducer";
import { parseLocaleNumber, priceFormat } from "../../scripts";
//style
import './Filter.scss'

const Filter = ({
    filter_query,
    isActive,
    filter_id,
    title,
    hideFilterBtn,
    isPrice,
    isBrand,
    maxPrice,
    minPrice,
    characteristics,
}) => {
    
    const dispatch = useDispatch()

    const changeMoneyFormat = (event) => {
        let regexp = /\d/g;
        if (event.target.value.match(regexp) === null) {
            event.target.value = ""
            return
        }
        event.target.value = priceFormat(event.target.value.match(regexp).join(''))
    }

    const setDefaultMoney = (event) => {
        if (event.target.value === "") {
            event.target.value = event.target.defaultValue
        }
    }

    const submitBtn = () => {
        let inputs = document.querySelectorAll(".price-input")

        let priceFrom = parseLocaleNumber(inputs[0].value)
        let priceTo = parseLocaleNumber(inputs[1].value)
        dispatch(addFilterPrice({ price_from: priceFrom, price_to: priceTo },))
        
        isActive(inputs[0].value + " - " + inputs[1].value)
    }

    const checkboxCheck = (event) => {  
        const filter = `${isBrand ? "brand" : filter_id}=${event.target.value}`
        if (event.target.checked) {
            dispatch(addFilterMark({ name: title, value: event.target.name, filter:filter }))
            dispatch(addFilterCheckBox(filter))
        }
        else {
  
            dispatch(deleteFilterMark({ name: title, value: event.target.name, filter:filter }))
            dispatch(deleteFilterCheckBox(filter))
        }

    }

    const getActiveFiltersId = () => {
        if (filter_query === "") { return false }

        let arr = filter_query.split('&').join('=').split('=');

        const current_filter_id = arr.filter((_, index) => index % 2 !== 1);
        const current_characteristic_id = arr.filter((_, index) => index % 2 === 1);

        return {current_filter_id:current_filter_id, current_characteristic_id:current_characteristic_id}
        
    }

    const isActiveFilter = (id) => {
        const {current_filter_id, current_characteristic_id} = getActiveFiltersId()
        if (!current_filter_id) { return false }
        //console.log(filter_id)
        if(current_filter_id.indexOf(isBrand ? "brand" : String(filter_id)) != -1){
            if (current_characteristic_id.indexOf(String(id)) != -1) {
                return true
            }
            else {
                return false
            }
        }else{
            return false
        }

    }


    useEffect(() => {
        if(isBrand)
        {
            const inputs = document.querySelectorAll('input[class="action-checkbox-brand"]:checked')
            console.log(inputs)
            if(inputs.length > 0)
            {
                Array.from(inputs).map((input) => {
                console.log(input)
                    dispatch(addFilterMark({ name: title, value: input.name, filter: `brand=${input.value}` }))
                    return
                })
            } 
           
        }
        isActive(filter_query) 
    }, [isActiveFilter])


    return (
        <div className="product-filter">
            <div className="filter-header">
                <div className="filter-header-name">
                    {title}
                </div>
                {hideFilterBtn
                    ? <></>
                    : <div className="filter-header-hide-btn">
                    </div>
                }
            </div>
            {isBrand &&
                <div className="filter-action">
                    <div className="filter-action-checkboxes">

                        {characteristics.map(brand => (
                            <div className="action-checkbox" key={brand.id} >
                                <input className="action-checkbox-brand" id={`${brand.name}_${brand.id}`} value={brand.id} name={brand.name} type="checkbox" checked={isActiveFilter(brand.id)} onChange={checkboxCheck} />
                                <label htmlFor={`${brand.name}_${brand.id}`}>{brand.name}</label>
                            </div>

                        ))}
                    </div>
                </div>
            }
            {isPrice && <div className="filter-action">
                <div className="filter-price-inputs">
                    <div className="filter-price-input-label">
                        від
                    </div>
                    <div className="filter-price-input">
                        <input type="text" className="price-input" defaultValue={priceFormat(minPrice)} onChange={changeMoneyFormat} onBlur={setDefaultMoney} />
                    </div>
                    <div className="filter-price-input-label">
                        до
                    </div>
                    <div className="filter-price-input">
                        <input type="text" className="price-input" defaultValue={priceFormat(maxPrice)} onChange={changeMoneyFormat} onBlur={setDefaultMoney} />
                    </div>
                    <div className="filter-price-input-label">
                        ₴
                    </div>
                </div>
                <div className="filter-price-btn">
                    <button onClick={submitBtn}>
                        Застосувати
                    </button>
                </div>
            </div>
            }
            {isPrice === false && isBrand === false &&
                <div className="filter-action">
                    <div className="filter-action-checkboxes">
                        {characteristics.map(characteristic => (
                            <div className="action-checkbox" key={characteristic.id} >
                                <input id={`${filter_id}_${characteristic.id}`} value={characteristic.id} name={characteristic.value} type="checkbox" checked={isActiveFilter(characteristic.id)} onChange={checkboxCheck} />
                                <label htmlFor={`${filter_id}_${characteristic.id}`}>{characteristic.value}</label>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

Filter.propTypes = {
    filter_query: PropTypes.string,
    isActive: PropTypes.func,
    filter_id: PropTypes.number,
    title: PropTypes.string,
    hideFilterBtn: PropTypes.bool,
    isPrice: PropTypes.bool,
    isBrand: PropTypes.bool,
    maxPrice: PropTypes.number,
    minPrice: PropTypes.number,
    characteristics: PropTypes.array,
};

Filter.defaultProps = {
    filter_query: "",
    isActive: () => { },
    filter_id: 0,
    title: "",
    isPrice: false,
    isBrand: false,
    maxPrice: 0,
    minPrice: 0,
    hideFilterBtn: false,
    characteristics: [],
};



export default Filter;
