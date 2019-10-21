import React from "react";

export default function ChannelInformation(props) {
    return (
        <div className="channel-information">
            <img src={props.value.channelIcon} alt="uderIcon" className="channel-information__icon" />
            <h2 className="channel-information__channel-name">{props.value.channelName}</h2>
        </div>
    );
}
