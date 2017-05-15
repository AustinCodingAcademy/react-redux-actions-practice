import {connect} from "react-redux";
import {setIsLoading} from "../actions";
import ShowModal from "./ShowModal";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setIsLoading: (isLoading) => {
      const action = setIsLoading(isLoading);
      dispatch(action);
    }
  };
};

const ShowModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowModal);

export default ShowModalContainer;
