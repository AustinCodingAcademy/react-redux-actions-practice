import {connect} from 'react-redux';
import ScaleVideo from '../components/ScaleVideo';
import {setVideoScale} from '../actions/index';

const mapDispatchToProps = {
    set: setVideoScale
}

export default connect(null, mapDispatchToProps)(ScaleVideo);