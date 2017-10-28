//Import connect from react-redux
//import appropriate component: counter
import { connect } from 'react-redux';
import Counter from "../components/Counter";

//map a prop called count to the state
function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

// Call connect function
export default connect(mapStateToProps)(Counter);
