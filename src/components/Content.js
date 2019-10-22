import React from "react";
import Video from "./Video";

export default class Content extends React.Component {
    render() {
        const { listOfVideo } = this.props;
        return (
            <main>
                <ul>
                    {listOfVideo && listOfVideo.map((video, index) => <Video key={index} value={video} />)}
                </ul>
            </main>
        );
    }
}
