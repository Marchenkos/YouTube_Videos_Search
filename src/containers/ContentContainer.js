import { connect } from "react-redux";
import { getVideoAsync, showSpinner } from "../actions/getVideoElementActions";
import Content from "../components/Content";

const mapStateToProps = state => {
    return {
        videoName: state.video.videoName,
        listOfVideo: state.video.listOfVideo,
        totalResult: state.metadata.totalResult,
        nextPageToken: state.metadata.nextPageToken,
        isLoadingVideoList: state.video.isLoadingVideoList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadMore: (videoName, nextPageToken) => dispatch(getVideoAsync(videoName, nextPageToken)),
        onShowSpinner: value => dispatch(showSpinner(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
