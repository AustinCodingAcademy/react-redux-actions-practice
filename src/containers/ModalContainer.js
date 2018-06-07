import { connect } from 'react-redux';
import Modal from "../components/Modal";
import {setIsLoading} from "../actions";

const mapStateToProps = (state) => {
  return {
      isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
   setIsLoading:function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);