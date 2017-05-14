import {connect} from "react-redux";
import CounterButton  from "./CounterButton";
import {
  increaseCounter,
  decreaseCounter
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
      dispatch(decreaseCounter());
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterButton);
