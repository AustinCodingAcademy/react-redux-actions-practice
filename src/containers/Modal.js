import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import Modal from "../components/Modal";

function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}
function mapDispatchToProps(dispatch){
  return {
   setIsLoading: () => dispatch(setIsLoading(false))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);
