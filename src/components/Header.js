import React from "react";
import Search from "./Search";
import "../style/header-container.less";
import "../style/logo.less";
import logoPng from "../img/icon_youTube.png";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="logo">
                    <img src={logoPng} className="logo__picture" alt="YouTube" />
                    <span className="logo__caption">
                        <span className="item__mini-title">Mini</span>
                        YouTube
                    </span>
                </div>
                <Search />
            </div>
        );
    }
}
