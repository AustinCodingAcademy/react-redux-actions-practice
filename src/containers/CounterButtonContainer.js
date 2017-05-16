import CounterButton from "../components/CounterButton";
import {connect} from 'react-redux';
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    increase: function() {
      //this is the action in index.js.  It calls the
       //function increaseCounter and passes it to the button.
       let action = increaseCounter();
       dispatch(action);
    },
    decrease: function() {
      let action = decreaseCounter();
      dispatch(action);
    }
  }
}

// dispatch changes the data
export default connect(null, mapDispatchToProps)(CounterButton);
