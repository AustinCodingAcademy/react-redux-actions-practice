import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";


function mapDispatchToProps(dispatch){
    return {
        increase:function(counter){
            let action = increaseCounter(counter);
            dispatch(action);
        },
        decrease:function(counter){
            let action = decreaseCounter(counter);
            dispatch(action);
        }
    }
}


export default connect(null,mapDispatchToProps)(CounterButton);
