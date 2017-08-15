import {connect} from "react-redux";
import {setIsLoading} from "./actions";
import ShowModal from "./components";
function mapDispatchToProps(dispatch){
  return {
    setIsLoading: function (){
    var action = setIsLoading();
    dispatch(action);
  }
}

export default(null, mapDispatchToProps)(ShowModal)