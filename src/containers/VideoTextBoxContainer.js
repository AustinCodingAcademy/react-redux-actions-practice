import {connect} from 'react-redux';
import VideoTextBox from '../components/VideoTextBox';
import {setVideoURL} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        setVideoURL:function(URL) {
            let action = setVideoURL(URL);
            dispatch(action);
        }
    }
}

const VideoTextBoxContainer = connect(mapDispatchToProps, VideoTextBox);
export default VideoTextBoxContainer;