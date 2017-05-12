import { connect } from 'react-redux';
import CityDropDown from '../components/CityDropDown';
import {setCurrentCity} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    set:function(city){
      let action = setCurrentCity(city);
      dispatch(action);
    }
  }
}

const CityDropDownContainer = connect(null,mapDispatchToProps)(CityDropDown);

export default CityDropDownContainer