import SpecialText from "../components/SpecialText";
import {connect} from 'react-redux';
import {setSpecialText} from "../actions";


function mapStateToProps(state) {
  return {text: state.specialText
  }
}


export default connect(mapStateToProps)(SpecialText);
