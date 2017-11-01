import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import Modal from "../components/Modal";


function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(Modal);
