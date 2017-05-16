import {connect} from "react-redux";
import SpecialText  from "../components/SpecialText";

const mapStateToProps = function (state) {
  return {
    text: state.specialText
  };
};
const SpecialTextContainer = connect(mapStateToProps)(SpecialText);

export default SpecialTextContainer;
