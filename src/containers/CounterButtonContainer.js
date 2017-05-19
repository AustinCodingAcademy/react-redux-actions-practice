import { connect } from "react-redux";
import CounterButton from "../components/CounterButton";
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (val) => dispatch(increaseCounter(val)),
        decrease: (val) => dispatch(decreaseCounter(val))

    }
}


const CounterButtonContainer = connect(null, mapDispatchToProps)(CounterButton);
export default CounterButtonContainer;