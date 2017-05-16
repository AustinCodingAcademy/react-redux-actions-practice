import {connect} from "react-redux";
import {setSpecialText} from "../actions";
import SpecialText from "../components/SpecialText.js";



function mapDispatchToProps(dispatch){
   return {
     set:function(txt){
      let action = setSpecialText(txt)
      dispatch(action);
    }
   }
}
const SpecialTextBoxContainer = connect(null,mapDispatchToProps)(SpecialText);
export default SpecialTextBoxContainer
