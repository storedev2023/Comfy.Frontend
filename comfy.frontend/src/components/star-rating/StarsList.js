import React, { useContext } from "react";

import Star from "./Star";

import { StarRatingContext } from "./StarRating";

function StarsList() {
  const { maxValue,listClass } = useContext(StarRatingContext);
  return (
    <div className={listClass}>
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;

        return (
          <Star
            key={index}
            value={value}
          />
        );
      })}
    </div>
  );
}

export default StarsList;