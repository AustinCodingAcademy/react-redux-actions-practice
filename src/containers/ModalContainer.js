// * ModalContainer.js
// * map a prop called `isLoading` to the state `isLoading`

// * Import connect from react-redux into all containers
// * Import the appropriate component into the container
// * Create mapStateToProps function 
// * Call the connect function

import { connect } from "react-redux";
import Modal from "../components/Modal";
import { setIsLoading } from "../actions";

function mapStateToProps(state){
    return{
        isLoading: state.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
      setIsLoading: function(isLoading) {
        let action = setIsLoading(isLoading);
        dispatch(action);
      },
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Modal)