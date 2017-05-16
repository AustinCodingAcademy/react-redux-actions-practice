import SpecialTextBox from "../components/SpecialTextBox";
import {connect} from "react-redux";
import {setSpecialText} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    set: function(txt) {
      let action = setSpecialText(txt)
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(SpecialTextBox);