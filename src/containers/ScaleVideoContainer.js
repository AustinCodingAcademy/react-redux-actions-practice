import ScaleVideo from "../components/ScaleVideo";
import {connect} from "react-redux";
import {setVideoScale} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        set: function(value) {
            dispatch(setVideoScale(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);