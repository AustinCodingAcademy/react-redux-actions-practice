import { connect } from 'react-redux';
import SpecialTextBox from '../components/SpecialTextBox';
import {setSpecialText} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    set:function(text){
      let action = setSpecialText(text);
      dispatch(action);
    }
  }
}

const SpecialTextBoxContainer = connect(mapDispatchToProps)(SpecialTextBoxContainer);

export default SpecialTextBoxContainer