import React from "react";

export default function ChannelInformation(props) {
    const context = props;

    return (
        <div className="channel-information">
            <img src="" className="channel-information__icon" />
            <h2 className="channel-information__channel-name"></h2>
            <span className="channel-informarion__date"></span>
        </div>
    );
}
