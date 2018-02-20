import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";

//map a prop called text to the state specialText
function mapStateToProps(state){
 return{
   URL:state.videoURL
 }
}

const VideoPlayerContainer= connect(
 mapStateToProps
)(VideoPlayer);
export default VideoPlayerContainer;
