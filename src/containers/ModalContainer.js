import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import Modal from "../components/Modal";
import ShowModal from "../components/ShowModal";


function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal, ShowModal);