import React from "react";
import "../style/rating-information.less";

export default function VideoRating({ value: { viewCount, commentCount, likeCount } }) {
    const numbFormat = numb => {
        if (numb > 1000000) {
            return `${(numb / 1000000).toFixed(1)} ml`;
        } else if (numb > 1000) {
            return `${Math.floor(numb / 1000)} th`;
        }

        return numb;
    };

    return (
        <div className="rating-information">
            <div className="rating-information__block">
                <span className="icon-heart item__icon" />
                <p className="item__count">
                    {numbFormat(likeCount)}
                </p>
            </div>
            <div className="rating-information__block">
                <span className="icon-eye item__icon" />
                <p className="item__count">
                    {numbFormat(viewCount)}
                </p>
            </div>
            <div className="rating-information__block">
                <span className="icon-bubbles2 item__icon" />
                <p className="item__count">
                    {numbFormat(commentCount)}
                </p>
            </div>
        </div>
    );
}
