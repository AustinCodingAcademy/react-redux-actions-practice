import {connect} from 'react-redux';
import currentCount from "../components/currentCount";

function mapStateToProps(state){
  return{

  }
}

const CurrentCountContainer = connect(mapStateToProps)(currentCount);
export default CurrentCountContainer
