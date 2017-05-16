import SpecialTextBox from "../components/SpecialTextBox";
import {connect} from 'react-redux';
import {setSpecialText} from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    set: function(text) {
      // the action:
      dispatch(setSpecialText(text));
    }
  }
}


export default connect(null, mapDispatchToProps)(SpecialTextBox);
