import {connect} from "react-redux";
import Counter from "../components/Counter";

function mapStateToProps(state){
  return{
    count: state.currentCount
  }
}

//this is the shorter way to export:
//export default connect(mapStateToProps)(Counter)

let otherFunction = connect(mapStateToProps);
let CounterContainer = otherFunction(Counter);
export default CounterContainer;
