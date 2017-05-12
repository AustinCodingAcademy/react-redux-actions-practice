import {connect} from 'react-redux';
import ScaleVideo from '../components/ScaleVideo';
import {setVideoScale} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        setVideoScale:function(scale) {
            let action = setVideoScale(scale);
            dispatch(action);
        }
    }
}

const ScaleVideoContainer = connect(mapDispatchToProps, ScaleVideo);
export default ScaleVideoContainer;