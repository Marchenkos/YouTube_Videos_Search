import React from "react";

export default function VideoRating({ value: { viewCount, commentCount, likeCount } }) {
    return (
        <div className="rating-information">
            <div className="rating-information__likes">
                <span className="item__icon">
                    лайки
                </span>
                <span className="item__count">
                    {likeCount}
                </span>
            </div>
            <div className="rating-information__views">
                <span className="item__icon">
                    просмотры
                </span>
                <span className="item__count">
                    {viewCount}
                </span>
            </div>
            <div className="rating-information__comments">
                <span className="item__icon">
                    комменты
                </span>
                <span className="item__count">
                    {commentCount}
                </span>
            </div>
        </div>
    );
}
