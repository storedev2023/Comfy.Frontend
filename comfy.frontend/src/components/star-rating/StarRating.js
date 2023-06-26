import React, {useState, createContext} from "react";
import PropTypes from "prop-types";

import StarRatingLabel from "./StarRatingLabel";
import StarsList from "./StarsList";
import './StarRating.scss'
export const StarRatingContext = createContext();

export default function StarRating({
  defaultState,
  emptyColor,
  fillColor,
  height,
  labelText,
  maxValue,
  onChangeHover,
  onChangeValue,
  readOnly,
  width,
  listClass,
}) {
  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState(null);

  const setRatingFn = (e) => {
    if (readOnly) return;

    const value = e.currentTarget.dataset.star;

    setRating(value);
    onChangeValue(value);
  }

  const setHoverFn = (e) => {
    if (readOnly) return;

    const value = e.type === 'mouseleave' ? null : e.currentTarget.dataset.star;

    setHover(value);
    onChangeHover(value);
  }

  return (
    <>
      <StarRatingContext.Provider
        value={{
          emptyColor,
          fillColor,
          height,
          hover,
          labelText,
          rating,
          setHover: setHoverFn,
          setRating: setRatingFn,
          width,
          maxValue,
          listClass,
        }}
      >
        <>
          <StarRatingLabel />
          <StarsList />
        </>
      </StarRatingContext.Provider>
    </>
  );
}

StarRating.propTypes = {
  defaultState: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  labelText: PropTypes.func,
  maxValue: PropTypes.number,
  onChangeHover: PropTypes.func,
  onChangeValue: PropTypes.func,
  readOnly: PropTypes.bool,
  width: PropTypes.number,
  listClass: PropTypes.string,
};

StarRating.defaultProps = {
  defaultState: 0,
  emptyColor: "#B1B7BA",
  fillColor: "#9ACD6A",
  height: 40,
  labelText: (value) => ``,
  maxValue: 5,
  onChangeHover: () => {},
  onChangeValue: () => {},
  readOnly: true,
  width: 40,
  listClass: "star-rating",
};