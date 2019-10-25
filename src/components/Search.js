import React, { useCallback, useRef } from "react";
import debounce from "lodash.debounce";
import "../style/search-container.less";

export default function Search({ onClear, handleSubmit }) {
    const inputEl = useRef(null);

    const submitVideoWithDelay = debounce(e => {
        onClear();
        handleSubmit(e, inputEl.current.value);
    }, 1500);

    const submitVideo = useCallback(e => {
        onClear();
        handleSubmit(e, inputEl.current.value);
    }, []);

    return (
        <div className="search-container">
            <input className="search-container__searching-line" type="text" ref={inputEl} onChange={submitVideoWithDelay} placeholder="Search..." />
            <button type="submit" className="icon-search search-container__search-button" onClick={submitVideo} />
        </div>
    );
}
