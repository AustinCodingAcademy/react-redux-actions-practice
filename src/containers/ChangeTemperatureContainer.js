import {connect} from 'react-redux';
import ChangeTemperature from '../components/ChangeTemperature';
import {setTemp} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        set:function(temp) {
            let action = setTemp(temp);
            dispatch(action);
        }
    }
}

const ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature);
export default ChangeTemperatureContainer;