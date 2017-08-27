import {connect} from "react-redux";
import Modal from "../components/Modal";

function mapStateToProps(state){
  return{
    isLoading: state.isLoading
  }
  return state;
}

//This is the shorter way to export:
//export default connect(mapStateToProps)(Modal)

let otherFunction = connect(mapStateToProps);
let ModalContainer = otherFunction(Modal);
export default ModalContainer;
