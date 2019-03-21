import { connect } from 'react-redux';
import CounterButtons from "../components/CounterButton";
import {increaseCounter,decreaseCounter} from "../actions/index"

//map a prop called text to the state specialText
const mapDispatchToProps = {
    increase: increaseCounter,
    decrease: decreaseCounter
}

export default connect(null,mapDispatchToProps)(CounterButtons);
