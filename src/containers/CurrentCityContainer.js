import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";

const mapStateToProps = (state) => {
  return {
      text: state.currentCity
    }
}

export default connect(mapStateToProps)(CurrentCity);