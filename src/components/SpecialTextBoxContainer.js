import {connect} from "react-redux";
import SpecialTextBox from "./SpecialTextBox";
import {setSpecialText} from "../actions";

const mapStateToProps = sate => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    set: (txt) => {
      const action = setSpecialText(txt);
      dispatch(action);
    }
  };
};

const SpecialTextBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialTextBox);

export default SpecialTextBoxContainer;
