import { connect } from 'react-redux';
import { currentCount } from "../"
import Counter from "../components/Counter";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    count: currentCount
  }
}

export default connect(mapStateToProps)(Counter);
