import { connect } from 'react-redux';
import {setVideoScale} from "../actions";
import ScaleVideo from "../components/ScaleVideo";


function mapDispatchToProps(dispatch){
    return {
        set:function(videoScale){
            let action = setVideoScale(videoScale);
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(ScaleVideo);
