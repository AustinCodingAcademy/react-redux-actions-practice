import {connect} from 'react-redux';
import ShowModal from "../components/ShowModal";

function mapDispatchToProps(state){
  return{
    setIsLoading:state.setIsLoading
  }
}

const ShowModalContainer = connect(mapDispatchToProps)(ShowModal);
export default ShowModalContainer
