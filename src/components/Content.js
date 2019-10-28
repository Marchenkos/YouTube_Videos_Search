import React from "react";
import PropTypes from "prop-types";
import Video from "./Video";
import ErrorBoundary from "./ErrorBoundary";
import "../style/video-list.less";

export default function Content({ listOfVideo }) {
    return (
        <ErrorBoundary>
            <main>
                <ul className="video-list">
                    {listOfVideo && listOfVideo.map(
                        (video, index) => <Video className="video-list__video" key={index} value={video} />
                    )}
                </ul>
            </main>
        </ErrorBoundary>
    );
}

Content.propTypes = {
    listOfVideo: PropTypes.array.isRequired
};
