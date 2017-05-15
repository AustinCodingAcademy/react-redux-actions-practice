import {connect} from 'react-redux';
import SpecialText from "../components/SpecialText";

function mapStateToProps(state){
  return{
    text:state.text
  }
}

const SpecialTextContainer = connect(mapStateToProps)(SpecialText);
export default SpecialTextContainer
