import React from "react";
import Video from "./Video";
import "../style/video-list.less";

export default function Content(props) {
    const { listOfVideo } = props;

    return (
        <main>
            <ul className="video-list">
                {listOfVideo && listOfVideo.map((video, index) => <Video className="video-list__video" key={index} value={video} />)}
            </ul>
        </main>
    );
}
