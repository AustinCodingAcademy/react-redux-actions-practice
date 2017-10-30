import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch){
    return {
        increase:function(txt){
            let action = increaseCounter(txt);
            dispatch(action);
        },
        decrease:function(txt){
            let action = decreaseCounter(txt);
            dispatch(action);
        }
   }
}

export default connect(null,mapDispatchToProps)(CounterButton);