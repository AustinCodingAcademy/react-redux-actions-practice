import {connect} from "react-redux";
import SpecialText  from "../components/SpecialText";

const mapStateToProps = function (state) {
  return {
    text: state.text
  };
};
const SpecialTextContainer = connect(mapStateToProps)(SpecialText);

export default SpecialTextContainer;
