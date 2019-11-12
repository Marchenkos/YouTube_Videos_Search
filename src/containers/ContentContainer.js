import { connect } from "react-redux";
import { getVideoAsync, loadVideo } from "../actions/getVideoElementActions";
import Content from "../components/Content";

const mapStateToProps = state => {
    return {
        videoName: state.video.videoName,
        listOfVideo: state.video.listOfVideo,
        totalResult: state.metadata.totalResult,
        nextPageToken: state.metadata.nextPageToken,
        isLoadingVideoList: state.video.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadMore: (videoName, nextPageToken) => dispatch(getVideoAsync(videoName, nextPageToken)),
        onShowSpinner: () => dispatch(loadVideo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
