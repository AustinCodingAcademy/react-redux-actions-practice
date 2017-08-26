import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";


function mapDispatchToProps(dispatch) {
  return {
   set: function(text){
     dispatch(setSpecialText(text));
   }
  }
}

export default connect(null,mapDispatchToProps)(SpecialTextBox);
