import {connect} from "react-redux";
import {setVideoURL} from "../actions";
import VideoTextBox from "./VideoTextBox";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    set: (videoURL) => {
      const action = setVideoURL(videoURL);
      dispatch(action);
    }
  };
};

const VideoTextBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoTextBox);

export default VideoTextBoxContainer;
