import { connect } from 'react-redux';
import {setIsLoading} from "../actions"
import Modal from "../components/Modal.js";

function mapStateToProps(state){
  return {
    setIsLoading: state.setIsLoading
  }
}

const mapDispatchToProps = {
  setIsLoading:setIsLoading
 }


export default connect(mapStateToProps,mapDispatchToProps)(Modal);

