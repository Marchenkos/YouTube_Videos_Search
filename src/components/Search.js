import React, { useCallback, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import "../style/search-container.less";
import getSpinner from "../additionalFunctions/getSpinner";
import mobileVersion from "../additionalFunctions/mobileVersion";


export default function Search({ onClear, handleSubmit }) {
    const delayBeforeSubmit = 3000;
    const minDesktopWidth = 600;
    const pressedKey = "Enter";
    const [isDisplaySearchLine, setDisplaySearchLine] = useState(true);
    const [isLoad, setIsLoad] = useState(false);
    const inputEl = useRef(null);

    const showSearchLine = () => {
        setDisplaySearchLine(!isDisplaySearchLine);
    };

    const showSearchElements = () => {
        setDisplaySearchLine(window.innerWidth > minDesktopWidth);
    };

    useEffect(() => {
        mobileVersion(showSearchElements);
    }, []);

    const submitVideoWithDelay2 = debounce((e) => {
        onClear();
        handleSubmit(e, inputEl.current.value);
        setIsLoad(false);
    }, delayBeforeSubmit);

    const submitVideoWithDelay = (e) => {
        setIsLoad(true);
        submitVideoWithDelay2(e);
    };

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
                    <input
                        className="search-container__searching-line"
                        type="text"
                        ref={inputEl}
                        onKeyPress={submitVideo}
                        onChange={submitVideoWithDelay}
                        placeholder="Search..."
                    />
                    <button type="submit" className="icon-search search-container__search-button" onClick={showSearchLine} />
                </>
            ) : (
                <button type="submit" className="icon-search search-container__search-button" onClick={showSearchLine} />
            )}

            {isLoad ? getSpinner() : null}

        </div>
    );
}

Search.propTypes = {
    onClear: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};
