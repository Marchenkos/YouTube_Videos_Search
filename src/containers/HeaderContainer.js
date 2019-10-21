import { connect } from "react-redux";
import { enterVideoName } from "../actions/enterVideoNameActions";
import { addVideo } from "../actions/addVideoElementActions";
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
                loadClient(videoName, nextPage, (video, result) => dispatch(addVideo(video, result)));
            };

            getVideo();
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
