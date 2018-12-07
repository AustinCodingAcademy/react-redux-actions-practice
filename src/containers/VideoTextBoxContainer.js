import { connect } from 'react-redux'
import { setVideoURL } from '../actions'
import VideoTextBox from '../components/VideoTextBox'

const mapDispatchToProps = (dispatch) => {
  return{
    set:function(video){
      dispatch(setVideoURL(video))
    }
  }
}

export default connect(null, mapDispatchToProps)(VideoTextBox);