import React from "react";
import Video from "./Video";

export default class Content extends React.Component {
    render() {
        const videoList = this.props.listOfVideo.map((video, index) => <Video key={index} value={video} />);
        return (
            <main>
                <ul>
                    {videoList}
                </ul>
            </main>
        );
    }
}
