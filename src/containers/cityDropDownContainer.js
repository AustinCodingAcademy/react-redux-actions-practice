import {connect} from 'react-redux';
import CityDropDown from '../components/CityDropDown';
import {setCurrentCity} from '../actions/index';

const mapDispatchToProps = {
    set: setCurrentCity
}

export default connect(null, mapDispatchToProps)(CityDropDown);