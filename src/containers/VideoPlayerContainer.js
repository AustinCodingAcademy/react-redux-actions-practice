import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";
import { setVideoScale, setVideoURL } from "../actions";

function mapStateToProps(state){
    return {
        URL: state.videoURL,
        scale: state.videoScale
    }
}

export default connect(mapStateToProps)(VideoPlayer)
