import {connect} from "react-redux";
import SpecialTextBox from "./SpecialTextBox";
import {setSpecialText} from "../actions";

const mapStateToProps = (state) => {
  console.log(state.specialText, " from SpBxCont");
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => {
      dispatch(setSpecialText(txt));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialTextBox);
