import {connect} from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

function mapStateToProps(state) {
    return {
        scale: state.videoScale,
        URL: state.videoURL
    }
}

export default connect (mapStateToProps)(VideoPlayer);