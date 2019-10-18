import React from "react";
import ChannelInformation from "./ChannelInformation";
import VideoRating from "./VideoRating";

export default function Video(props) {
    const context = props;

    return (
        <div className="video-container">
            <img src="" className="video-container__preview" />
            <div className="video-container__description-container">
                <h1 className="video-description__title"></h1>
                <div className="video-description__description"></div>
                <div className="video-description__category"></div>
            </div>
            <ChannelInformation />
            <VideoRating />
        </div>
    );
}
