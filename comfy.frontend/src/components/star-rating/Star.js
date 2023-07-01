import React, { useContext } from "react";

import { StarRatingContext } from './StarRating';

function Star({ value }) {
    const {
        emptyColor,
        fillColor,
        height,
        hover,
        rating,
        setHover,
        setRating,
        width,
        listClass,
    } = useContext(StarRatingContext);
    console.log()
    return (
        <div
            className="star"
            data-star={value}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(null)}
        >
            <svg width={width} height={height} viewBox="0 0 38 37" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6022 1.70485C15.2093 -0.120084 17.7907 -0.120085 18.3978 1.70485L20.8717 9.14194C21.1436 9.95922 21.9082 10.5106 22.7695 10.5106H30.6736C32.6224 10.5106 33.4203 13.0138 31.831 14.1417L25.5181 18.6216C24.8006 19.1308 24.5001 20.0491 24.7778 20.884L27.2081 28.1898C27.8183 30.0242 25.7295 31.571 24.1529 30.4522L17.6575 25.8427C16.9642 25.3507 16.0358 25.3507 15.3425 25.8427L8.84708 30.4522C7.27051 31.571 5.18165 30.0242 5.79187 28.1898L8.2222 20.884C8.49992 20.0491 8.19943 19.1308 7.48191 18.6216L1.16897 14.1417C-0.420333 13.0138 0.377607 10.5106 2.32643 10.5106H10.2305C11.0918 10.5106 11.8564 9.95922 12.1283 9.14194L14.6022 1.70485Z" fill={value <= (hover || rating) ? fillColor : emptyColor} />
            </svg>
        </div>
    );
}

export default Star;