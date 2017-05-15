import {connect} from 'react-redux';
import ShowModal from "../components/ShowModal";

function mapDispatchToProps(dispatch){
  return{
    setIsLoading:dispatch.setIsLoading
  }
}

const ShowModalContainer = connect(null, mapDispatchToProps)(ShowModal);
export default ShowModalContainer
