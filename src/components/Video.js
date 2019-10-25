import React from "react";
import ChannelInformation from "./ChannelInformation";
import VideoRating from "./VideoRating";
import "../style/video-container.less";
import "../style/additional-information.less";

export default function Video({ value: { preview, title, description, datePublication, channelInformation, videoStatistic } }) {
    const newDateFormat = date => {
        const newDate = new Date(date);

        return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
    };

    return (
        <div className="video-container">
            <img src={preview} alt="videoPreview" className="video-container__preview" />
            <div className="video-container__description-container">
                <h1 className="video-description__title">{title}</h1>
                <div className="video-description__description">{description}</div>
                <div className="additional-information">
                    <ChannelInformation value={channelInformation} date={newDateFormat(datePublication)} />
                    <VideoRating value={videoStatistic} />
                </div>
            </div>
        </div>
    );
}
