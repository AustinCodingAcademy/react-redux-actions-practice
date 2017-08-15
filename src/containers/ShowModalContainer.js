import {connect} from "react-redux";
import {setIsLoading} from "../actions";
import ShowModal from "../components/ShowModal";

function mapDispatchToProps(dispatch){
  return {
    setIsLoading: function (){
    var action = setIsLoading();
    dispatch(action);
  }
}
}
export default connect(null, mapDispatchToProps)(ShowModal);