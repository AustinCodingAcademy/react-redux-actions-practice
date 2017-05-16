import { connect } from "react-redux";
import SpecialText from "../components/SpecialText.js"


function mapStateToProps(state){
  return{
    text:state.specialText
  }
}
const SpecialTextContainer = connect(mapStateToProps)(SpecialText);
export default SpecialTextContainer
