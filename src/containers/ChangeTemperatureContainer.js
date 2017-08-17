import { connect } from 'react-redux';
import { setTemp } from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


function mapDispatchToProps(dispatch) {
    return {
        set: function (temp) {
            let action = setTemp(temp);
            dispatch(action);
        }
    }
}


var otherFunction = connect(null, mapDispatchToProps);
var ChangeTemperatureContainer = otherFunction(ChangeTemperature);
export default ChangeTemperatureContainer;
