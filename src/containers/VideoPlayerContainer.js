import VideoPlayer from '../components/VideoPlayer';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    URL: state.url,
    scale: state.scale
   }
}

export default connect(mapStateToProps)(VideoPlayer);

