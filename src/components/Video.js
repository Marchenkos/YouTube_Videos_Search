import React from "react";
import ChannelInformation from "./ChannelInformation";
import VideoRating from "./VideoRating";

export default function Video(props) {
    return (
        <div className="video-container">
            <img src={props.value.preview} alt="videoPreview" className="video-container__preview" />
            <div className="video-container__description-container">
                <h1 className="video-description__title">{props.value.title}</h1>
                <div className="video-description__description">{props.value.description}</div>
                <div className="video-description__category">{props.value.datePublication}</div>
            </div>
            <ChannelInformation value={props.value.channelInformation} />
            <VideoRating value={props.value.videoStatistic} />
        </div>
    );
}
