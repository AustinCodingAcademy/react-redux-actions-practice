import {connect} from 'react-redux';
import VideoTextBox from '../components/VideoTextBox';
import {setVideoURL} from '../actions/index';

const mapDispatchToProps = {
    set: setVideoURL
}

export default connect(null, mapDispatchToProps)(VideoTextBox); 