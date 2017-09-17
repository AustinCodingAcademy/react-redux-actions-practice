import {increaseCounter,decreaseCounter} from "../actions";
import {connect} from "react-redux";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch) {
    return {
        increase:function(){
            let action = increaseCounter();
            dispatch(action);
            // this part updates the state
        },
        decrease:function(){
            let action = decreaseCounter();
            dispatch(action);
        }
    }
}
// expanded version
// var createContainer = connect(null,mapDispatchToProps);
// var CounterButtonContainer = createContainer(CounterButton);
// export default CounterButtonContainer;

// condensed version
export default connect(null,mapDispatchToProps)(CounterButton);