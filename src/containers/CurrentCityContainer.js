import { connect } from "react-redux";
import CurrentCity from "../components/CurrentCity";

// map prop called text to the state currentCity

function mapStateToProps(state) {
  return {
    text: state.currentCity
  }
}

// call connect export MSTP and CurrentCity
export default connect(mapStateToProps)(CurrentCity);
