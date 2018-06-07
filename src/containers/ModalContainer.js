import { connect } from 'react-redux'
import { setIsLoading } from '../actions'
import Modal from '../components/Modal'

const mdp =(dispatch)=>{
  return{
    setIsLoading:function(load){
      dispatch(setIsLoading(load))
    }
  }
}

const msp=(state)=>{return{isLoading:state.isLoading}}

const LoadingModalContainer = connect(msp,mdp)(Modal)

export default LoadingModalContainer;