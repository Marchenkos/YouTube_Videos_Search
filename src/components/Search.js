import React from "react";

export default function Search() {
    return (
        <div className="search-container">
            <input className="search-container__searching-line" type="text" placeholder="Search" />
            <span className="icon-search search-container__search-button" />
        </div>
    );
}
