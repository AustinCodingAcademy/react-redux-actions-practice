import { connect } from "react-redux";
import Counter from "../components/Counter";

// map a prop called count into the state currentCount
function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

export default connect(mapStateToProps)(Counter);
