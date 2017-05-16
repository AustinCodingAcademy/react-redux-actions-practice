import { connect } from "react-redux";
import ScaleVideo from "../components/ScaleVideo";
import {setVideoScale} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        set: (val) => dispatch(setVideoScale(val))
    }
}

const ScaleVideoContainer = connect(null, mapDispatchToProps)(ScaleVideo);
export default ScaleVideoContainer;