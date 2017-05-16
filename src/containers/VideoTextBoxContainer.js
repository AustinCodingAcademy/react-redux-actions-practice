import VideoTextBox from "../components/VideoTextBox";
import {connect} from "react-redux";
import {setVideoURL} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        set: function(txt) {
            dispatch(setVideoURL(txt));
        }
    }
}

export default connect(null, mapDispatchToProps)(VideoTextBox);