/* eslint-disable spaced-comment */
import React from "react";
import "../style/channel-information.less";
//react prop-types
export default function ChannelInformation({ value: { channelIcon, channelName }, date }) {
    return (
        <div className="channel-information">
            <img src={channelIcon} alt="uderIcon" className="channel-information__icon" />
            <div className="channel-information__description-box">
                <h2 className="description__channel-name">{channelName}</h2>
                <div className="description__date-publication">{date}</div>
            </div>
        </div>
    );
}
