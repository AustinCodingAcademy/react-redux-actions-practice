import {connect} from "react-redux";
import SpecialTextBox from "./SpecialTextBox";
import {setSpecialText} from "../actions";

const mapStateToProps = (state) => {
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
