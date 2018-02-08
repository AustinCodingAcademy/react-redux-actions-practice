import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import Modal from "../components/Modal";


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
    isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
