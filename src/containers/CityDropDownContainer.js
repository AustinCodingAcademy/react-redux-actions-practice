import CityDropDown from "../components/CityDropDown";
import {connect} from "react-redux";
import {setCurrentCity} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        set: function(txt) {
            dispatch(setCurrentCity(txt));
        }
    }
}

export default connect(null,mapDispatchToProps)(CityDropDown);