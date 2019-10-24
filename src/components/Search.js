import React, { useCallback, useRef } from "react";
import debounce from "lodash.debounce";
import "../style/search-container.less";

export default function Search(props) {
    const context = props;
    const inputEl = useRef(null);
    const submitVideoWithDelay = debounce(e => {
        console.log(context.value, inputEl.current.value);
        if (context.value !== inputEl.current.value) {
            context.onClearVideoList();
            context.handleSubmit(e, inputEl.current.value);
        }
    }, 2000);
    const submitVideo = useCallback(e => {
        context.onClearVideoList();
        context.handleSubmit(e, inputEl.current.value);
    }, []);

    return (
        <div className="search-container">
            <input className="search-container__searching-line" type="text" ref={inputEl} onChange={submitVideoWithDelay} placeholder="Search..." />
            <button type="submit" className="icon-search search-container__search-button" onClick={submitVideo} />
        </div>
    );
}
