import {connect} from 'react-redux';
import {setVideoURL} from '../actions';
import VideoTextBox from '../components/VideoTextBox';

const mapDispatchToProps = {
    set: setVideoURL
}

export default connect(null, mapDispatchToProps)(VideoTextBox);
