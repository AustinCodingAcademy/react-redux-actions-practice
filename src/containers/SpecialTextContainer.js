import { connect } from 'react-redux';
import { setCurrentUser } from '../actions';
import SpecialText from '../components/SpecialText';

function mapStateToProps(state) {
  return {
    text: state.specialText
  };
}

const SpecialTextContainer = connect(mapStateToProps)(SpecialText);
export default SpecialTextContainer;
