import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import state from "../state";
import LoadingModal from "../components/Modal";


function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}

const mapStateToProps = () => {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal);
