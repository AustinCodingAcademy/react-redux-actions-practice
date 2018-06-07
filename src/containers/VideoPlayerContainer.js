import { connect } from 'react-redux'
import VideoPlayer from '../components/VideoPlayer'

const msp = (state) =>{
  return{
    scale:state.videoScale,
    URL:state.videoURL
  }
}

const VideoPlayerContainer = connect(msp)(VideoPlayer)

export default VideoPlayerContainer;