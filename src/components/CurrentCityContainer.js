import {connect} from "react-redux";
import CurrentCity from "./CurrentCity";

const mapStateToProps = state => {
  return {
    text: state.currentCity
  };
};

const CurrentCityContainer = connect(
  mapStateToProps
)(CurrentCity);

export default CurrentCityContainer;
