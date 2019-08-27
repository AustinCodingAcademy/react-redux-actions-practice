import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";


onst mapStateToProps = () => {
  return {
      text: state.specialText
  }
}

const mapDispatchToProps = {
   set:setSpecialText
  }


export default connect(mapStateToProps,mapDispatchToProps)(SpecialTextBox);
