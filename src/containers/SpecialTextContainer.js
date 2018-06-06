import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";


const mapStateToProps = state => ({ text: state.specialText })
  

export default connect(mapStateToProps)(SpecialText);
