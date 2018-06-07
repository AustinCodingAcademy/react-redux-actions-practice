import { connect } from 'react-redux';
import {setTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


function mapDispatchToProps(dispatch){
    return {
        set:function(currentTemp){
            let action = setTemp(currentTemp);
            dispatch(action);
        }
    }
}


export default connect(null,mapDispatchToProps)(ChangeTemperature);
