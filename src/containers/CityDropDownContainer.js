import CityDropDown from '../components/CityDropDown';
import {connect} from 'react-redux';
import {setCurrentCity} from '../actions';


function mapDispatchToProps(dispatch) {
  return {
    set: function(city) {
      dispatch(setCurrentCity(city))
    }
  }
}

export default connect(null, mapDispatchToProps)(CityDropDown);
