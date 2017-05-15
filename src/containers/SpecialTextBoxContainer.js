import {connect} from 'react-redux';
import SpecialTextBox from "../components/SpecialTextBox";

function mapDispatchToProps(dispatch){
  return{
    set:dispatch.setSpecialText
  }
}

const SpecialTextBoxContainer = connect(null, mapDispatchToProps)(SpecialTextBox);
export default SpecialTextBoxContainer
