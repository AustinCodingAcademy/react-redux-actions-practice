import { connect } from 'react-redux';
import { setVideoURL } from "../actions";
import { setVideoScale } from "../actions";
import VideoPlayer from "../components/VideoPlayer";


function mapStateToProps(state){
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     setVideoURL:function(URL){
//       let action = setVideoURL(URL);
//       dispatch(action);
//     },
//     setVideoScale: function(scale){
//       let action = setVideoScale(scale);
//       dispatch(action);
//     }
//   };
// }

const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
export default VideoPlayerContainer;
