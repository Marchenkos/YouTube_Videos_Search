import React from "react";
import PropTypes from "prop-types";
import "../style/rating-information.less";

export default function VideoRating({ value: { viewCount, commentCount, likeCount } }) {
    const numberConvertToString = number => {
        if (number >= 1000000) {
            if (number % 1000000) {
                return `${(number / 1000000).toFixed(1)}M`;
            }

            return `${Math.floor(number / 1000000)}M`;
        } else if (number >= 1000) {
            return `${Math.floor(number / 1000)}K`;
        } else if (!number) {
            return 0;
        }

        return number;
    };

    return (
        <div className="rating-information">
            <div className="rating-information__block">
                <span className="icon-heart item__icon" />
                <p className="item__count item__count--likes">
                    {numberConvertToString(likeCount)}
                </p>
            </div>
            <div className="rating-information__block">
                <span className="icon-eye item__icon" />
                <p className="item__count item__count--views">
                    {numberConvertToString(viewCount)}
                </p>
            </div>
            <div className="rating-information__block">
                <span className="icon-bubbles2 item__icon" />
                <p className="item__count item__count--comments">
                    {numberConvertToString(commentCount)}
                </p>
            </div>
        </div>
    );
}

VideoRating.propTypes = {
    value: PropTypes.shape({
        viewCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        commentCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
};

VideoRating.defaultProps = {
    value: {
        viewCount: 0,
        likeCount: 0,
        commentCount: 0
    }
};
