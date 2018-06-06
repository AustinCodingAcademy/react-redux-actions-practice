import {connect} from 'react-redux';
import VideoPlayer from "../components/VideoPlayer"

const mapStateToProps = (state) => ({URL: state.videoURL,scale: state.videoScale});

export default connect(mapStateToProps)(VideoPlayer);