import { connect } from 'react-redux';
import { setIsLoading } from "../../actions"
import Modal from ".../";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    setIsLoading: setIsLoading
  }
}

export default connect(mapStateToProps)(Modal);
