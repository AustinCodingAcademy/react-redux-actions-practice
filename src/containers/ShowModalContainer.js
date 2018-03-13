import ShowModal from "../components/ShowModal";
import { connect } from "react-redux";
import { setIsLoading } from "../actions";

function mapDispatchToProps(dispatch){
  return {
    setIsLoading: function(loading){
      let action = setIsLoading(loading);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ShowModal);
