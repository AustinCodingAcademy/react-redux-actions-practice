import { connect } from "react-redux";
import { setIsLoading } from "../actions";
import Modal from "../components/Modal";

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading:function(loading){
      let action = setIsLoading(loading);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(Modal);
