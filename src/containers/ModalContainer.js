import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import Modal from "../components/Modal";

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
   set: function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
