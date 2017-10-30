import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import Modal from "../components/Modal";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch){
  return {
      setIsLoading:function(txt){
          let action = setIsLoading(txt);
          dispatch(action);
      }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);