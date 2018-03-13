import Modal from "../components/Modal";
import { connect } from "react-redux";
import { setIsLoading } from "../actions";

// map isLoading to isLoading
function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  },
  function mapDispatchToProps(dispatch){
    return {
      setIsLoading: function(loading){
        let action = setIsLoading(loading);
        dispatch(action);
      }
    }
  }
}

// export connect MSTP and Modal
export default connect(mapStateToProps)(Modal);
