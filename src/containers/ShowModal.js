import { connect } from 'react-redux';
import {isLoading} from "../actions";
import ShowModal from "../components/ShowModal";

function mapDispatchToProps(dispatch){
  return {
   isLoading:function(){
     let action = isLoading();
     dispatch(action);
   }
  }
}
//removing (txt) in setIsLoading function here also

export default connect(null,mapDispatchToProps)(ShowModal);
