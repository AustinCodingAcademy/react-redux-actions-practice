import {connect} from 'react-redux';
import SpecialTextBox from "../components/SpecialTextBox";

function mapDispatchToProps(state){
  return{
    set:state.setSpecialText
  }
}

const SpecialTextBoxContainer = connect(mapDispatchToProps)(SpecialTextBox);
export default SpecialTextBoxContainer
