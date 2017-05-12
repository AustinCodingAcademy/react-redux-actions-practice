import {connect} from 'react-redux';
import ChangeTemperature from '../components/ChangeTemperature';
import {setTemp} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        setTemp:function(temp) {
            let action = setTemp(temp);
            dispatch(action);
        }
    }
}

const ChangeTemperatureContainer = connect(mapDispatchToProps, ChangeTemperature);
export default ChangeTemperatureContainer;