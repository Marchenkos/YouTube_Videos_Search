import { connect } from "react-redux";
import { enterVideoName, asyncGetData } from "../actions/enterVideoNameActions";
import Header from "../components/Header";
import loadClient from "../Api/getData";

const mapStateToProps = state => {
    return {
        videoName: state.videoName,
        listOfVideo: state.listOfVideo,
        totalResult: state.totalResult,
        nextPage: state.nextPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitVideo: name => dispatch(enterVideoName(name)),
        onGetData: (videoName, nextPage) => {
            const getVideo = () => {
                loadClient(videoName, nextPage, result => dispatch(asyncGetData(result.videoList, result.totalResult, result.nextPage)));
            };

            getVideo();
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
