import { increaseCounter } from "../actions";
import { decreaseCounter } from "../actions";
import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import CounterButton from "../components/CityDropDown";


function mapDispatchToProps(dispatch){
  return {
    increase: function (){
     let action = increaseCounter();
     dispatch(action);
   },
   decrease: function () {
       let action = decreaseCounter();
       dispatch(action);
   }
  }
}

var label = connect(null, mapDispatchToProps);
var CounterButtonContainer = label(CounterButton);
export default CounterButtonContainer;
