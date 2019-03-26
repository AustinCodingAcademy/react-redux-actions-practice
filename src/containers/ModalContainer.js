import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import Modal from "../components/Modal";


const mapDispatchToProps = {
  setIsLoading:setIsLoading,
}

function mapStateToProps(state){
  return {
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);