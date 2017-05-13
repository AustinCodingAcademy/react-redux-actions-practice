import { connect } from "react-redux";
import VideoTextBox from "../components/SearchTextBox";
import setVideoURL from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        set: (val) => dispatch(setVideoURL(val))
    }
}

const VideoTextBoxContainer = connect(null, mapDispatchToProps)(VideoTextBox);
export default VideoTextBoxContainer;