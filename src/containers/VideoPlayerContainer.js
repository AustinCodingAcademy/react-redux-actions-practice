import {connect} from 'react-redux'
import VideoPlayer from '../components/VideoPlayer';

const mapStateToProps = (state) => {
    return {
        url: state.videoURL,
        scale: state.videoScale
    }
}

export default connect(mapStateToProps, null)(VideoPlayer);