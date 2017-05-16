import { connect } from "react-redux";
import CurrentCity from "../components/CurrentCity";
import {setCurrentCity} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        set: (val) => dispatch(setCurrentCity(val))
    }
}

const CityDropDownContainer = connect(null, mapDispatchToProps)(CurrentCity);
export default CityDropDownContainer;