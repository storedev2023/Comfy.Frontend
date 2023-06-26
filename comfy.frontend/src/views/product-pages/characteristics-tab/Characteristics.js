import React from "react";
import { useDispatch, useSelector } from "react-redux"

import { upPage } from "../../../scripts/index";
import { setItemInCart } from "../../../redux/reducers/cart-reducer"

import "./Characteristics.scss"

function Characteristics() {
 
  upPage()
  const product = useSelector(state => state.product.currentProduct)


  return (
    <div className="product-page-content">
      <div className="product-page-characteristics-section">
        <div className="characteristics-section">
          <div className="characteristics-section-title">
            Характеристики {product?.name}
          </div>
          {product?.characteristicGroups.map(characteristicGroup => (
            <div className="characteristics-section-content" key={characteristicGroup.name}>
              <div className="characteristics-section-content-title" >
                  {product?.characteristicGroups.indexOf(characteristicGroup) === 0 ?<></> : characteristicGroup.name }
              </div>
              {characteristicGroup.characteristics.map(characteristic => (
              <div className="product-page-characteristics">
                  <div className="product-page-characteristics-name">
                    {characteristic.name}
                  </div>
                  <div className="product-page-characteristics-value">
                    {characteristic.value}
                  </div>
              </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Characteristics;