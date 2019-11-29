import React, { useCallback, useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import mobileVersionHelper from "../additionalFunctions/mobileVersionHelper";
import "../style/search-container.less";

export default function Search({ onClear, handleSubmit }) {
    const minDesktopWidth = 600;
    const delayBeforeSubmit = 1500;
    const pressedKey = "Enter";
    const [isDisplaySearchLine, setDisplaySearchLine] = useState(true);

    const inputElement = useRef(null);

    const showSearchLine = () => {
        setDisplaySearchLine(!isDisplaySearchLine);
    };

    const showSearchElements = () => {
        setDisplaySearchLine(window.innerWidth > minDesktopWidth);
    };

    const submitRequestWithDelay = debounce(e => {
        onClear();
        handleSubmit(e, inputElement.current.value);
    }, delayBeforeSubmit);

    const submitRequest = useCallback(e => {
        if (e.key === pressedKey) {
            onClear();
            handleSubmit(e, inputElement.current.value);
        }
    }, []);

    useEffect(() => {
        mobileVersionHelper(showSearchElements);
    }, []);

    return (
        <div className="search-container">
            {isDisplaySearchLine ? (
                <>
                    <input
                        className="search-container__searching-line"
                        type="text"
                        ref={inputElement}
                        onKeyPress={submitRequest}
                        onChange={submitRequestWithDelay}
                        placeholder="Search..."
                    />
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
