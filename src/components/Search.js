import React, { useCallback, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import "../style/search-container.less";

export default function Search({ onClear, handleSubmit }) {
    const delayBeforeSubmit = 1500;
    const minDesktopWidth = 600;
    const pressedKey = "Enter";
    const [isDisplaySearchLine, setDisplaySearchLine] = useState(true);
    const inputEl = useRef(null);

    const showSearchLine = () => {
        setDisplaySearchLine(!isDisplaySearchLine);
    };

    const showSearchElements = () => {
        setDisplaySearchLine(window.innerWidth > minDesktopWidth);
    };


    useEffect(() => {
        window.addEventListener("resize", showSearchElements);

        return () => window.removeEventListener("resize", showSearchElements);
    }, []);

    const submitVideoWithDelay = debounce(e => {
        onClear();
        handleSubmit(e, inputEl.current.value);
    }, delayBeforeSubmit);

    const submitVideo = useCallback(e => {
        if (e.key === pressedKey) {
            onClear();
            handleSubmit(e, inputEl.current.value);
        }
    }, []);

    return (
        <div className="search-container">
            {isDisplaySearchLine ? (
                <>
                    <input className="search-container__searching-line" type="text" ref={inputEl} onKeyPress={submitVideo} onChange={submitVideoWithDelay} placeholder="Search..." />
                    <button type="submit" className="icon-search search-container__search-button" onClick={showSearchLine} />
                </>
            ) : (
                <button type="submit" className="icon-search search-container__search-button" onClick={showSearchLine} />
            )}
        </div>
    );
}

Search.propTypes = {
    onClear: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};
