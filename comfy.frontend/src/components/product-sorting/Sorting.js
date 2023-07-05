import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//components
import { parseLocaleNumber, priceFormat } from "../../scripts";
import { ProductService } from "../../service/ProductService";
//style
import './Sorting.scss'
import { addFilterCheckBox, addFilterPrice, deleteFilterCheckBox } from "../../redux/reducers/filter-reducer";

const Sorting = ({
    isActive
}) => {

    return (
        <div className="product-sorting">

        </div>
    );
}

Sorting.propTypes = {
    isActive: PropTypes.func,

};

Sorting.defaultProps = {
    isActive: () => {},
};

export default Sorting;
