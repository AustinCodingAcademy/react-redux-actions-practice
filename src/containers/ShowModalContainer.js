import ShowModal from "../components/ShowModal";
import {connect} from 'react-redux';
import {setIsLoading} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    //this is the action in index.js.  It calls the
     //function Modal and passes it to the button.
    setIsLoading: function(isLoading) {
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

// using dispatch changes the data
const ShowModalContainer = connect(null, mapDispatchToProps)(ShowModal);
export default ShowModalContainer
