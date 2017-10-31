import {connect} from "react-redux";
import ShowModal from "../components/ShowModal";
import {setIsLoading} from "../actions"

function mapDispatchToProps(dispatch){
  return {
    setIsLoading:function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(ShowModal);
