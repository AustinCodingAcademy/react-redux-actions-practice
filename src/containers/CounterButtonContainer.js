import {increaseCounter,decreaseCounter} from "../actions";
import {connect} from "react-redux";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch) {
    return {
        increase:function(){
            var action = increaseCounter();
            dispatch(action);
            // this part updates the state
        },
        decrease: function(){

        }
    }
}
// expanded version
// var createContainer = connect(null,mapDispatchToProps);
// var CounterButtonContainer = createContainer(CounterButton);
// export default CounterButtonContainer;

// condensed version
export default connect(null,mapDispatchToProps)(CounterButton);