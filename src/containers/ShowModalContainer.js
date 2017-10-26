import { connect } from 'react-redux';
import {setIsLoading} from '../actions';
import ShowModal from '../components/ShowModal';

function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(text){
     let action = setIsLoading(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(ShowModal);
