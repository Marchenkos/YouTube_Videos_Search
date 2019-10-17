import React from "react";
import Search from "./Search";
import "../style/header-container.less";
import "../style/logo.less";
import logoPng from "../img/icon_youTube.png";
import loadClient from "../Api/getData";

export default class Header extends React.Component {
    onSubmitVideoName = (e, videoName) => {
        e.preventDefault();
        this.props.onSubmitVideo(videoName);
        loadClient(videoName);
    };

    render() {
        return (
            <div className="header-container">
                <div className="logo">
                    <img src={logoPng} className="logo__picture" alt="YouTube" />
                    <span className="logo__caption">
                        <p className="item__mini-title">Mini</p>
                        YouTube
                    </span>
                </div>
                <Search handleSubmit={this.onSubmitVideoName} />
            </div>
        );
    }
}
