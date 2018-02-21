import { connect } from "react-redux";
import Counter from "../components/Counter";

// mapping a prop called count to state.currentCount
function mapStateToProps(state){
  return {
    count:state.currentCount
  }
}

// calling connect, passing mapStateToProps and Component(Counter) and exporting
export default connect(mapStateToProps)(Counter);
