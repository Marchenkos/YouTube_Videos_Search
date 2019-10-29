import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Video from "./Video";
import ErrorBoundary from "./ErrorBoundary";
import "../style/video-list.less";
import "../style/infinite-scroll-message.less";

export default function Content({ listOfVideo }) {
    const [listItems, setListItems] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    };

    useEffect(() => {
        if (listOfVideo.length > 8 && isLoad === false) {
            setIsLoad(true);
        }
    }, [listOfVideo]);

    useEffect(() => {
        setListItems(listOfVideo.slice(0, 9));
    }, [isLoad]);

    const fetchMoreListItems = () => {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...listOfVideo.slice(listItems.length, listItems.length + 9)]));
            setIsFetching(false);
        }, 2000);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    return (
        <ErrorBoundary>
            <main>
                <ul className="video-list">
                    {listItems && listItems.map(
                        (video, index) => <Video className="video-list__video" key={index} value={video} />
                    )}
                </ul>
                {(isFetching && listItems.length !== listOfVideo.length) && <div className="infinite-scroll-message">Fetching more video...</div>}
            </main>
        </ErrorBoundary>
    );
}

Content.propTypes = {
    listOfVideo: PropTypes.array.isRequired
};
