import { connect } from 'react-redux';
import { setSpecialText } from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";

function mapDispatchToProps(dispatch){
  return {
    set:function(text){
      let action = setSpecialText(text);
      dispatch(action);
    }
  };
}

const SpecialTextBoxContainer =
connect(null, mapDispatchToProps)(SpecialTextBox);
export default SpecialTextBoxContainer;
