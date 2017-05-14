import {connect} from "react-redux";
import CurrentCity from "./CurrentCity";


const mapStateToProps = sate => {
  return {};
};


const CurrentCityContainer = connect(
  mapStateToProps,
)(CurrentCity);

export default CurrentCityContainer;
