import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";

function mapDispatchToProps(dispatch) {
  return {
    set: function(txt){
    var action = setSpecialText(txt);
    dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(SpecialTextBox);
