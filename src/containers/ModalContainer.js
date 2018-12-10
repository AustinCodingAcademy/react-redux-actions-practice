import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import LoadingModal from "../components/Modal";





function mapDispatchToProps(dispatch){
  return {
   set:function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}
const ModalContainer = connect(null,mapDispatchToProps)(LoadingModal);
export default ModalContainer;