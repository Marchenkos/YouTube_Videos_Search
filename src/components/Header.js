import React from "react";
import Search from "./Search";

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <img src="" alt="YouTube" />
                <span>
                    <p>Mini</p>
                    YouTube
                </span>
                <Search />
            </div>
        );
    }
}
