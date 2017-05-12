import { connect } from 'react-redux';
import { setSpecialText } from "../actions";
import SpecialText from "../components/SpecialText";

function mapStateToProps(state){
  return {
    text: state.specialText
  }
}
//
// function mapDispatchToProps(dispatch){
//   return {
//     setSpecialText:function(text){
//       let action = setSpecialText(text);
//       dispatch(action);
//     }
//   };
// }

const SpecialTextContainer = connect(mapStateToProps)(SpecialText);
export default SpecialTextContainer;
