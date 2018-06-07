import { connect } from 'react-redux'
import { setVideoURL } from '../actions'
import VideoTextBox from '../components/VideoTextBox'

const mdp = (dispatch) =>{
  return{
    set:function(video){
      dispatch(setVideoURL(video))
    }
  }
}

export default connect(null, mdp)(VideoTextBox);