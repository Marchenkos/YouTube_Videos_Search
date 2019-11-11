import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import logoPng from "../img/icon_youTube.png";
import "../style/header-container.less";
import "../style/logo.less";

export default function Header({ nextPageToken, onGetData, onSubmitVideo, onClearVideoList }) {
    const onSubmitVideoName = (e, videoName) => {
        e.preventDefault();
        onSubmitVideo(videoName);
        onGetData(videoName, nextPageToken);
    };

    return (
        <div className="header-container">
            <div className="logo">
                <img src={logoPng} className="logo__picture" alt="YouTube" />
                <span className="logo__caption">
                    <p className="item__mini-title">Mini</p>
                    YouTube
                </span>
            </div>
            <Search handleSubmit={onSubmitVideoName} onClear={onClearVideoList} />
        </div>
    );
}

Header.propTypes = {
    nextPageToken: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onGetData: PropTypes.func.isRequired,
    onSubmitVideo: PropTypes.func.isRequired,
    onClearVideoList: PropTypes.func.isRequired
};
