import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";


const mapDispatchToProps = {
   increase: increaseCounter,
   decrease: decreaseCounter
  }


export default connect(null,mapDispatchToProps)(CounterButton);
