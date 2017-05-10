import {connect} from "react-redux";
import ShowModal from "../components/ShowModal";
import {setIsLoading} from "../actions"




function mapDispatchToProps(dispatch){
  return{
    setIsLoading:function(bool){
      let action = setIsLoading(bool);
      dispatch(action);
    }
  }
}


const ShowModalContainer = connect(mapDispatchToProps)(ShowModal);


export default ShowModalContainer
