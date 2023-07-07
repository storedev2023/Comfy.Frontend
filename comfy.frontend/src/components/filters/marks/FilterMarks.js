import React, { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types";

import Icon from "../../icon/icon";
import { deleteAllFilters, deleteFilterCheckBox, deleteFilterMark } from "../../../redux/reducers/filter-reducer";
import { parseLocaleNumber, priceFormat } from "../../../scripts";


import './FilterMarks.scss'

const FilterMarks = () => {

    const activeFilter = useSelector(state => state.filter_query.activeCharacteristicMarks)

    const dispatch = useDispatch()

    const btnDeleteFilterMark = (_name, _value, _filter) => {
        dispatch(deleteFilterMark({ name: _name, value: _value, filter: _filter }))
        dispatch(deleteFilterCheckBox(_filter))
    }

    const deleteAllFilterMarks = () => {
        dispatch(deleteAllFilters())
    }

    return (
        <div className="filter-marks-row">
            {activeFilter?.length !== 0  &&
                <div className="filter-marks">
                    {activeFilter.map(mark => (
                        <div className="filter-mark" key={mark.filter} onClick={() => btnDeleteFilterMark(mark.name, mark.value, mark.filter)}>
                            <div className="filter-mark-title">
                                <span>{mark.name}</span>: {mark.value}
                            </div>
                            <div className="filter-mark-delete">
                                <Icon id="close" />
                            </div>
                        </div>
                    ))}
                    <div className="filter-marks-delete-all" onClick={deleteAllFilterMarks}>
                        <div className="delete-btn">
                            Очистити всі
                            <Icon id="close" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}



export default FilterMarks;