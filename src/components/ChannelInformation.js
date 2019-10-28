import React from "react";
import PropTypes from "prop-types";
import "../style/channel-information.less";

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

ChannelInformation.propTypes = {
    value: PropTypes.shape({
        channelIcon: PropTypes.string,
        channelName: PropTypes.string
    }),
    date: PropTypes.string
};

ChannelInformation.defaultProps = {
    date: "00.00.00",
    value: {
        channelName: "anonim",
        channelIcon: "../img/no_photo.jpg"
    }
};
