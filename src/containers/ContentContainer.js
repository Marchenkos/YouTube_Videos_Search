import { connect } from "react-redux";
import Content from "../components/Content";

const mapStateToProps = state => {
    return {
        listOfVideo: state.listOfVideo,
    };
};

export default connect(mapStateToProps)(Content);
