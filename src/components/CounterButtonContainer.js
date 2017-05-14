import {connect} from "react-redux";
import CounterButton  from "./CounterButton";
import {
  increaseCounter
} from "../actions";

const  mapStateToProps = state => {
  return {
    countValue: state.currentCount
  };
}

const mapDispatchToProps = dispatch => {
  //dispatch(increaseCounter());
  return {
    increase: () => {
      dispatch(increaseCounter());
    },
    decrease: () => {
      console.log("decrease counter eventually");
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterButton);
