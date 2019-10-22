import React from "react";
import ChannelInformation from "./ChannelInformation";
import VideoRating from "./VideoRating";

export default function Video({ value: { preview, title, description, datePublication, channelInformation, videoStatistic } }) {
    return (
        <div className="video-container">
            <img src={preview} alt="videoPreview" className="video-container__preview" />
            <div className="video-container__description-container">
                <h1 className="video-description__title">{title}</h1>
                <div className="video-description__description">{description}</div>
                <div className="video-description__category">{datePublication}</div>
            </div>
            <ChannelInformation value={channelInformation} />
            <VideoRating value={videoStatistic} />
        </div>
    );
}
