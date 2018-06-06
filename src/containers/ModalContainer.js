import {connect} from 'react-redux';
import {setIsLoading} from "../actions";
import LoadingModal from '../components/Modal';

const mapStateToProps = state => ({isLoading: state.isLoading})

function mapDispatchToProps(dispatch){
    return {
     setIsLoading:function(isLoading){
       let action = setIsLoading(isLoading);
       dispatch(action);
     }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal);