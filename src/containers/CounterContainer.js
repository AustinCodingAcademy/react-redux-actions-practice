// import {increaseCounter} from "../actions";
import {connect} from "react-redux";
import Counter from "../components/Counter";

function mapStateToProps(state){
  return {
    count:state.currentCount
  }
}

// var otherFunction = connect(null, mapDispatchToProps);
// var CounterButtonContainer = otherFunction(CounterButton);

export default connect (mapStateToProps,null)(Counter);
