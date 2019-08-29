import { connect } from 'react-redux';
import {setIsLoading} from '../actions/index'
import Modal from "../components/Modal";

 function mapStateToProps (state){
   return {
     isLoading: state.isLoading
   }
  }
  
  const mapDispatchToProps = {
    setIsLoading: setIsLoading
  }

 export default connect(mapStateToProps, mapDispatchToProps)(Modal);
