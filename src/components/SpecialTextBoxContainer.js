import {connect} from "react-redux";
import SpecialTextBox from "./SpecialTextBox";


// actions 
import {
  setSpecialText
} from "../actions";

const mapStateToProps = state => {
  return {
    specialText: state.specialText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set: (txt) => {
      dispatch(setSpecialText(txt));
    }
  };
};

const SpecialTextBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialTextBox);

export default SpecialTextBoxContainer;
