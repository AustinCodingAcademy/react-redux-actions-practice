import Modal from "../components/Modal";
import {connect} from 'react-redux';
import {setIsLoading} from "../actions";

function mapStateToProps(state) {
  return {isLoading: state.isLoading}
}

function mapDispatchToProps(dispatch) {
  return {
    //this is the action in index.js.  It calls the
     //function Modal and passes it to the button.
    setIsLoading: function(isLoading) {
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

// using dispatch changes the data
const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer
