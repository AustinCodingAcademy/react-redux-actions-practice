import { connect } from 'react-redux'
import VideoPlayer from '../components/VideoPlayer'

const mapStatetoProps = (state) => {
  return{
    scale:state.videoScale,
    URL:state.videoURL
  }
}

const VideoPlayerContainer = connect(mapStatetoProps)(VideoPlayer)

export default VideoPlayerContainer;