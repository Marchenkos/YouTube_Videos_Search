import React, { useCallback, useRef } from "react";
import "../style/search-container.less";

export default function Search(props) {
    const context = props;
    const inputEl = useRef(null);
    const submitVideoName = useCallback((e) => {
        context.handleSubmit(e, inputEl.current.value);
    }, [props.value]);

    return (
        <div className="search-container">
            <input className="search-container__searching-line" type="text" ref={inputEl} placeholder="Search..." />
            <button type="submit" className="icon-search search-container__search-button" onClick={submitVideoName} />
        </div>
    );
}
