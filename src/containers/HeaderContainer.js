import { connect } from "react-redux";
import { enterVideoName } from "../actions/enterVideoNameActions";
import Header from "../components/Header";

const mapStateToProps = state => {
    return {
        videoName: state.videoName,
        listOfVideo: state.listOfVideo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitVideo: name => dispatch(enterVideoName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
