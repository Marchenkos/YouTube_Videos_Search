import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import Video from "./Video";
import Spinner from "./Spinner";
import ErrorBoundary from "./ErrorBoundary";
import nothingFound from "../img/nothingFound.png";
import "../style/video-list.less";
import "../style/nothing-found-block.less";
import "../style/infinite-scroll-message.less";

export default function Content({
    nextPageToken, videoName, totalResult, listOfVideo, isLoadingVideoList, onLoadMore, onShowSpinner }) {

    const initialVideoCount = 6;
    const additionalVideo = 3;
    const delayBeforeShowVideo = 4000;
    const [listItems, setListItems] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset !== document.documentElement.offsetHeight) {
            return;
        }

        setIsFetching(true);
    };

    const initialRender = useCallback((name) => {
        if (name && listOfVideo[0] === null) {
            return <img className="nothing-found-block" src={nothingFound} alt="nothing-found" />;
        } else return null;
    }, [listOfVideo]);

    const fetchMoreListItems = debounce(() => {
        if (listOfVideo.length >= listItems.length + additionalVideo) {
            setListItems(prevState => (
                [...prevState, ...listOfVideo.slice(listItems.length, listItems.length + additionalVideo)]
            ));
            setIsFetching(false);
        }
    }, delayBeforeShowVideo);

    useEffect(() => {
        if (listOfVideo.length > initialVideoCount && !isLoad) {
            setIsLoad(true);
        } else if (!listOfVideo.length && videoName) {
            onShowSpinner(true);
        } else onShowSpinner(false);
    }, [listOfVideo]);

    useEffect(() => {
        setIsLoad(false);
        setIsFetching(false);
    }, [videoName]);

    useEffect(() => {
        if (isLoad && listOfVideo.length >= initialVideoCount) {
            setListItems(listOfVideo.slice(0, initialVideoCount));
        } else if (!listOfVideo.length) {
            setListItems([]);
        }
    }, [isLoad]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (totalResult > listItems.length && isFetching) {
            onLoadMore(videoName, nextPageToken);
            fetchMoreListItems();
        }
    }, [isFetching]);

    return (
        <ErrorBoundary>
            <main id="main-container">
                <ul className="video-list">
                    {(listItems && listItems.length)
                        ? listItems.map((video, index) => <Video className="video-list__video" key={index} value={video} />)
                        : initialRender(videoName)}
                </ul>
                {(isFetching && listItems.length !== listOfVideo.length) ? <Spinner /> : null}
                {isLoadingVideoList ? <Spinner /> : null}
            </main>
        </ErrorBoundary>
    );
}

Content.propTypes = {
    listOfVideo: PropTypes.array.isRequired
};
