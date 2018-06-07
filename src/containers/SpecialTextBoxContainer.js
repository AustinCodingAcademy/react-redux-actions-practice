import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";


const mapDispatchToProps = (dispatch) => {
  return {
   set:function(text){
     let action = setSpecialText(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(SpecialTextBox);
