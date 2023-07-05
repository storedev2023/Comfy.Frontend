import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//components
import { parseLocaleNumber, priceFormat } from "../../scripts";
import { ProductService } from "../../service/ProductService";
//style
import './Filter.scss'
import { addFilterCheckBox, addFilterPrice, deleteFilterCheckBox } from "../../redux/reducers/filter-reducer";

const Filter = ({
    isActive,
    filter_id,
    title,
    hideFilterBtn,
    isPrice,
    isBrand,
    maxPrice,
    minPrice,
    characteristics,
    maxView,
}) => {

    const [isMaxView, setIsMaxView] = useState(false)
    const dispatch = useDispatch()

    const fullCharacteristics = (event) => {
        setIsMaxView(!isMaxView)
        if (isMaxView) {
            event.target.className.add("open")
        } else {
            event.target.className.remove("open")
        }
    }

    const changeMoneyFormat = (event) => {
        let regexp = /\d/g;
        if(event.target.value.match(regexp) === null){
            event.target.value = "" 
            return
        }
        event.target.value = priceFormat(event.target.value.match(regexp).join(''))
    }

    const setDefaultMoney = (event) => { 
        if (event.target.value === ""){
            event.target.value = event.target.defaultValue
        }   
    }

    const submitBtn = () => {
        let inputs = document.querySelectorAll(".price-input")

        let priceFrom = parseLocaleNumber(inputs[0].value)
        let priceTo = parseLocaleNumber(inputs[1].value)

        let prices = [priceFrom,priceTo]

        dispatch(addFilterPrice(prices))
        isActive(inputs[0].value +" - "+ inputs[1].value)
    }

    const checkboxCheck = (e) =>{
        const filter = `${isBrand? "brand" : filter_id}=${e.target.value}` 
       if(e.target.checked){
        dispatch(addFilterCheckBox(filter))
        isActive(filter + "true") 
       }
       else{
        dispatch(deleteFilterCheckBox(filter))
        isActive(filter + "false")
       }
    

    }


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
                            <input id={`${brand.name}_${brand.id}`} value={brand.id} type="checkbox" defaultChecked={false} onChange={checkboxCheck} />
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
                        <input type="text" className="price-input" defaultValue={priceFormat(minPrice)} onChange={changeMoneyFormat} onBlur={setDefaultMoney}/>
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
            { isPrice === false && isBrand === false &&
              <div className="filter-action">
                    <div className="filter-action-checkboxes">
                    {characteristics.map(characteristic => (  
                            <div className="action-checkbox" key={characteristic.id} >               
                            <input id={`${filter_id}_${characteristic.id}`} value={characteristic.id} type="checkbox" defaultChecked={false} onChange={checkboxCheck} />
                                <label htmlFor={`${filter_id}_${characteristic.id}`}>{characteristic.value}</label>
                            </div> 
                        ))}
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

Filter.propTypes = {
    isActive: PropTypes.func,
    filter_id: PropTypes.number,
    title: PropTypes.string,
    hideFilterBtn: PropTypes.bool,
    isPrice: PropTypes.bool,
    isBrand: PropTypes.bool,
    maxPrice: PropTypes.number,
    minPrice: PropTypes.number,
    characteristics: PropTypes.array,
    maxView: PropTypes.number,

};

Filter.defaultProps = {
    isActive: () => {},
    filter_id: 0,
    title: "",
    isPrice: false,
    isBrand: false,
    maxPrice: 0,
    minPrice: 0,
    hideFilterBtn: false,
    characteristics: [],
    maxView: 10,
};

export default Filter;
