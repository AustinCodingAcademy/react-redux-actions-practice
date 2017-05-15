import {connect} from "react-redux";
import {setVideoScale} from "../actions";
import ScaleVideo from "./ScaleVideo";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    set:  scale => {
      const action = setVideoScale(scale);
      dispatch(action);
    }
  };
};

const ScaleVideoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScaleVideo);

export default ScaleVideoContainer;
