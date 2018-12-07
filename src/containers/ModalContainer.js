import { connect } from 'react-redux'
import { setIsLoading } from '../actions'
import Modal from '../components/Modal'

const mapDispatchToProps = (dispatch) => {
  return{
    setIsLoading:function(load){
      dispatch(setIsLoading(load))
    }
  }
}

const mapStatetoProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}

const LoadingModalContainer = connect(mapStatetoProps, mapDispatchToProps)(Modal)

export default LoadingModalContainer;