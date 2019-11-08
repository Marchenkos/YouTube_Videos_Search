import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import Video from "./Video";
import ErrorBoundary from "./ErrorBoundary";
import "../style/video-list.less";
import "../style/nothing-found-block.less";
import "../style/infinite-scroll-message.less";
import nothingFound from "../img/nothingFound.png";
import getSpinner from "../additionalFunctions/getSpinner";

export default function Content({ videoName, totalResult, listOfVideo }) {
    const initialVideoCount = 6;
    const additionalVideo = 3;
    const delayBeforeShowVideo = 2000;
    const [listItems, setListItems] = useState([]);
    const [show, setShow] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = () => {
        if (window.innerHeight + window.pageYOffset !== document.documentElement.offsetHeight) {
            return;
        }

        setIsFetching(true);
    };

    const initialRender = (name) => {
        if (name) {
            return <img className="nothing-found-block" src={nothingFound} alt="error" />;
        } else {
            return null;
        }
    };

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
        } else if (isLoad) {
            setShow(true);
        }
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
        setTimeout(() => {
            setShow(true);
        }, 6000);
    }, []);

    useEffect(() => {
        if (totalResult > listItems.length && isFetching) {
            fetchMoreListItems();
        }
    }, [isFetching]);

    return (
        <ErrorBoundary>
            <main id="main-container">
                <ul className="video-list">
                    {show && ((listItems && listItems.length > 0)
                        ? listItems.map((video, index) => <Video className="video-list__video" key={index} value={video} />)
                        : initialRender(videoName))}
                </ul>
                {(isFetching && listItems.length !== listOfVideo.length) ? getSpinner() : null}
            </main>
        </ErrorBoundary>
    );
}

Content.propTypes = {
    listOfVideo: PropTypes.array.isRequired
};
