import { connect } from "react-redux";
import { enterVideoName, clearVideoList, initialGetVideo } from "../actions/getVideoElementActions";

import Header from "../components/Header";

const mapStateToProps = state => {
    return {
        videoName: state.video.videoName,
        listOfVideo: state.video.listOfVideo,
        totalResult: state.metadata.totalResult,
        nextPageToken: state.metadata.nextPageToken,
        errorMessage: state.error.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitVideo: name => dispatch(enterVideoName(name)),
        onGetData: (videoName, nextPageToken) => dispatch(initialGetVideo(videoName, nextPageToken)),
        onClearVideoList: () => dispatch(clearVideoList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
