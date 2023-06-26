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
                <path d="M18.5245 0.463526C18.6741 0.00287084 19.3259 0.00287008 19.4755 0.463525L23.6025 13.1652C23.6695 13.3712 23.8615 13.5106 24.0781 13.5106H37.4333C37.9177 13.5106 38.1191 14.1305 37.7272 14.4152L26.9226 22.2652C26.7473 22.3925 26.674 22.6182 26.741 22.8242L30.868 35.5258C31.0176 35.9865 30.4904 36.3695 30.0985 36.0848L19.2939 28.2348C19.1186 28.1075 18.8814 28.1075 18.7061 28.2348L7.90146 36.0848C7.5096 36.3695 6.98236 35.9865 7.13204 35.5258L11.259 22.8242C11.326 22.6182 11.2527 22.3925 11.0774 22.2652L0.272763 14.4152C-0.119094 14.1305 0.082293 13.5106 0.566655 13.5106H13.9219C14.1385 13.5106 14.3305 13.3712 14.3975 13.1652L18.5245 0.463526Z" fill={value <= (hover || rating) ? fillColor : emptyColor} />
            </svg>
        </div>
    );
}

export default Star;