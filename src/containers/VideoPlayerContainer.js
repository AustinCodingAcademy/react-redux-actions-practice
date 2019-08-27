import VideoPlayer from '../components/VideoPlayer';
import {connect} from 'react-redux';
import state from '../state';

const mapStateToProps = (state) => {
    return {
        URL: state.videoURL,
        scale: state.videoScale
    }
}

export default connect(mapStateToProps)(VideoPlayer)
