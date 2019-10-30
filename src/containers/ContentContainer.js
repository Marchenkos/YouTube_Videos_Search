import { connect } from "react-redux";
import Content from "../components/Content";

const mapStateToProps = state => {
    return {
        videoName: state.video.videoName,
        listOfVideo: state.video.listOfVideo,
        totalResult: state.metadata.totalResult,
        nextPageToken: state.metadata.nextPageToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadMore: (videoName, nextPageToken) => dispatch(getVideoAsync(videoName, nextPageToken, false))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
