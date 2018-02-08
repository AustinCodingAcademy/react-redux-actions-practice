import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setIsLoading } from "../actions";
import Modal from "../components/Modal";

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
        setIsLoading: setIsLoading
      }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
