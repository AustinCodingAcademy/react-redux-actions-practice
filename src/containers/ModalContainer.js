import { connect } from 'react-redux';
import ModalContainer from "../components/ModalContainer";
import { setIsLoading } from "../actions";



function mapDispatchToProps(dispatch){
    return {
     setIsLoading:function(isLoading){
       let action = setIsLoading(isLoading);
       dispatch(action);
     }
    }
  }


var label = connect(mapDispatchToProps);
var ModalContainer = label(Modal);
export default ModalContainer;

