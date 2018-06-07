import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CityDropDown from "../components/CityDropDown";


function mapDispatchToProps(dispatch){
    return {
        set:function(currentCity){
            let action = setCurrentCity(currentCity);
            dispatch(action);
        }
    }
}


export default connect(null,mapDispatchToProps)(CityDropDown);
