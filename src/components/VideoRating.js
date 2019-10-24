import React from "react";
import "../style/rating-information.less";

export default function VideoRating({ value: { viewCount, commentCount, likeCount } }) {
    return (
        <div className="rating-information">
            <div className="rating-information__likes">
                <span className="icon-heart item__icon" />
                <p className="item__count">
                    {likeCount}
                </p>
            </div>
            <div className="rating-information__views">
                <span className="icon-eye item__icon" />
                <p className="item__count">
                    {viewCount}
                </p>
            </div>
            <div className="rating-information__comments">
                <span className="icon-bubbles2 item__icon" />
                <p className="item__count">
                    {commentCount}
                </p>
            </div>
        </div>
    );
}
