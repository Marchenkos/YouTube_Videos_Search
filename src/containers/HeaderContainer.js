import { connect } from "react-redux";
import { onSubmitVideo } from "../actions/onSubmitVideoActions";
import Header from "../components/Header";

const mapStateToProps = state => {
    return {
        videoName: state.videoName,
        listOfVideo: state.listOfVideo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitVideo: name => dispatch(onSubmitVideo(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
