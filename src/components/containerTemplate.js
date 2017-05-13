import {connect} from "react-redux";
import from "./";

// actions 
import {
  REDUCERfunction
} from "../actions";

const mapStateToProps = state => {
  return {
    NAME: state.NAME
  };
};

const mapDispatchToProps = dispatch => {
  return {
    propNAME: () => {
      dispatch(REDUCERfunction());
    }
  };
};

const NAMEContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NAME);

export default NAMEContainer;
