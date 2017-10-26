import { connect } from 'react-redux';
import {setIsLoading} from '.../actions';
import customStyles from '.../components/ChangeTemperature';

function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(text){
     let action = setIsLoading(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(customStyles);
