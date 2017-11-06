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

var label = connect(mapDispatchToProps);
var CityDropDownContainer = label(CityDropDown);
export default CityDropDownContainer;
