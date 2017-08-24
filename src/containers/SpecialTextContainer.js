import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";

function mapStateToProps(state){
  return {
    text: state.specialText
  }
}

export default connect(mapStateToProps)(SpecialText);
