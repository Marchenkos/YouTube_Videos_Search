import React from "react";

export default function VideoRating(props) {
    return (
        <div className="rating-information">
            <div className="rating-information__likes">
                <span className="item__icon">
                    лайки
                </span>
                <span className="item__count">
                    {props.value.likeCount}
                </span>
            </div>
            <div className="rating-information__views">
                <span className="item__icon">
                    просмотры
                </span>
                <span className="item__count">
                    {props.value.viewCount}
                </span>
            </div>
            <div className="rating-information__comments">
                <span className="item__icon">
                    комменты
                </span>
                <span className="item__count">
                    {props.value.commentCount}
                </span>
            </div>
        </div>
    );
}
