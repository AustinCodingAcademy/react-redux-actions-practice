import CounterButton from "../components/CounterButton";
import {connect} from "react-redux";
import {increaseCounter, decreaseCounter} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        increase: function() {
            dispatch(increaseCounter());
        },
        decrease: function() {
            dispatch(decreaseCounter());
        }
    }
}

export default connect(null,mapDispatchToProps)(CounterButton);