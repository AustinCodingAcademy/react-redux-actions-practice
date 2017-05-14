import {connect} from "react-redux";
import SpecialText from "./SpecialText";

const mapStateToProps = state => {
  return {
    text: state.SpecialText
  };
};

const SpecialTextContainer = connect(
  mapStateToProps
)(SpecialText);

export default SpecialTextContainer
