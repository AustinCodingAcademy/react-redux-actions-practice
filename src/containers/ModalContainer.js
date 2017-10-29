import {connect} from "react-redux";
import Modal from "../components/Modal";
import {setIsLoading} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    setIsLoading: function(setIsLoading){
      let action = setIsLoading(setIsLoading);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(Modal);
