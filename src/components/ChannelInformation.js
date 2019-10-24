import React from "react";

export default function ChannelInformation({ value: { channelIcon, channelName } }) {
    return (
        <div className="channel-information">
            <img src={channelIcon} alt="uderIcon" className="channel-information__icon" />
            <h2 className="channel-information__channel-name">{channelName}</h2>
        </div>
    );
}
