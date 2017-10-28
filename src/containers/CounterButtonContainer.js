import { connect } from "react-redux";
import CounterButton from "../components/CounterButton";
import { increaseCounter} from "../actions";
import { decreaseCounter} from "../actions";


function mapDispatchToProps(dispatch){
    return {
        increase:function(){
            let action = increaseCounter();
            dispatch(action);
        },
        decrease:function() {
            let action = decreaseCounter();
            dispatch(action);
        }
    }
}


export default connect(null, mapDispatchToProps)(CounterButton);