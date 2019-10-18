import React from "react";

export default function VideoRating(props) {
    const context = props;

    return (
        <div className="rating-information">
            <div className="rating-information__likes">
                <span className="item__icon"></span>
                <span className="item__count"></span>
            </div>
            <div className="rating-information__views">
                <span className="item__icon"></span>
                <span className="item__count"></span>
            </div>
            <div className="rating-information__comments">
                <span className="item__icon"></span>
                <span className="item__count"></span>
            </div>
        </div>
    );
}
