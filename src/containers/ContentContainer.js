import { connect } from "react-redux";
import Content from "../components/Content";

const mapStateToProps = state => {
    return {
        listOfVideo: state.video.listOfVideo,
    };
};

export default connect(mapStateToProps)(Content);
