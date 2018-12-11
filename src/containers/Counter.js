//moving all redux specific component info to here
import {connect} from "react-redux";
import Counter from "../components/Counter"

function mapDispatchToProps(state) {
    return {
      count:state.currentCount
    }
  }
  
  let CounterCountainer=connect(mapDispatchToProps)(Counter);
  export default CounterCountainer;