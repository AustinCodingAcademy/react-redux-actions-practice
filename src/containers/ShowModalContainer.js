import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import ShowModal from "../components/ShowModal";


function mapDispatchToProps(dispatch){
  return {
   set:function(e){
     let action = setIsLoading(e);
     dispatch(action);
   }
  }
}

const ShowModalContainer = connect(null,mapDispatchToProps)(ShowModal);

export default ShowModalContainer