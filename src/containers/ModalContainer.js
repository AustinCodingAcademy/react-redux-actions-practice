import { connect } from "react-redux";
import Modal from "../components/Modal";
import { setIsLoading } from "../actions";

// map a prop isLoading to state isLoading
function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading:function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
