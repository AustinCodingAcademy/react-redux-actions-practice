import {setIsLoading} from "../actions";
import {connect} from "react-redux";
import ShowModal from "../components/ShowModal";

function mapDispatchToProps(dispatch){
  return{
    setIsLoading: function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

// This is the shorter way to export.
export default connect(null,mapDispatchToProps)(ShowModal)
