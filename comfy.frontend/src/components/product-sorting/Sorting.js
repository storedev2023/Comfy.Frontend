import React, { useState } from "react"
import { useDispatch} from "react-redux"
import PropTypes from "prop-types";

//components
//style
import './Sorting.scss'
import { addFilterSort } from "../../redux/reducers/filter-reducer";



const Sorting = ({
    isActive,
    sort_name,
    sort_key,
    sort_ordering, 
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const openingSelect = (event) =>{
        setIsOpen(!isOpen)
    }

    const choseOption = (event) =>{
        openingSelect(false)
        const sort_id = event.target.dataset.id
        isActive(event.target.dataset.id)
        dispatch(addFilterSort({sort_tag:sort_key[sort_id], sorting_order:sort_ordering[sort_id]}))
        document.querySelector(".select-options-current-name").innerHTML = event.target.innerHTML
    }

    return (
        <div className="custom-select">
                 <div className="custom-select-close" data-id={true} onClick={openingSelect}>
                    <div className="select-options-current">
                        <div className="select-options-current-name">
                            За рейтингом
                        </div>
                        <span className="select-arrow-down"/>
                    </div>
                </div>
            {isOpen &&
                <div className="custom-select-open" data-open={false} onClick={openingSelect}>
                    <div className="select-options">
                    {sort_name.map(filter=>(
                        <div key={sort_name.indexOf(filter)} className="select-options-item" data-id={sort_name.indexOf(filter)} onClick={choseOption}>
                            {filter}
                        </div>
                    ))}
                    </div>
                </div>
            }

        </div>
    );
}

Sorting.propTypes = {
    isActive: PropTypes.func,
    sort_name : PropTypes.array,
    sort_key: PropTypes.array,
    sort_ordering : PropTypes.array,
};

Sorting.defaultProps = {
    isActive: () => { },
    sort_name : ['За рейтингом','Від дешевих до дорогих','Від дорогих до дешевих'],
    sort_key: ['rating','price','price'],
    sort_ordering :['desc','','desc'],
};

export default Sorting;
