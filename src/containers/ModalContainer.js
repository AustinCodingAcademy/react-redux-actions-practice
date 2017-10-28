//Import connect from react-redux
//import appropriate component: Modal
import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import Modal from "../components/Modal";

//map a prop called isLoading to the state
function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}
// Call connect function
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
