import React, { useCallback } from "react";
import "../style/search-container.less";
import { loadClient, execute } from "../Api/getData";

export default function Search() {
    const searchChanelFirst = useCallback((e) => {
        e.preventDefault();
        loadClient();
    }, []);

    const searchChanelSecond = useCallback((e) => {
        e.preventDefault();
        execute();
    }, []);

    return (
        <div className="search-container">
            <input className="search-container__searching-line" type="text" placeholder="Search..." />
            <button type="submit" className="search-container__search-button" onClick={searchChanelFirst}>First</button>
            <button type="submit" className="search-container__search-button" onClick={searchChanelSecond}>Second</button>
        </div>
    );
}
