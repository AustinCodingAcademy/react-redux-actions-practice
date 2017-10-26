import { connect } from 'react-redux';
import {setCurrentCity} from '.../actions';
import CurrentCity from '.../components/CurrentCity';

function mapDispatchToProps(dispatch){
  return {
   set:function(text){
     let action = setCurrentCity(text);
     dispatch(action);
   }
  };
}

export default connect(null,mapDispatchToProps)(CurrentCity);
