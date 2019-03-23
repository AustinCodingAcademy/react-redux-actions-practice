import { connect } from 'react-redux';
import Counter from "../components/Counter";

//map a prop called text to the state specialText
function mapStateToProps(state){
  console.log("Counter: " + state.currentCount);

  return {
    count: state.currentCount
  }
}

export default connect(mapStateToProps)(Counter);
