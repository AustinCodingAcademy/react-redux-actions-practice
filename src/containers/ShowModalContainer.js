import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import ShowModal from "../components/ShowModal";

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: (isLoading) => {
      const action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

var otherFunction = connect(null, mapDispatchToProps);
var ShowModalContainer = otherFunction(ShowModal);
export default ShowModalContainer;