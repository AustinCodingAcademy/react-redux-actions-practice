import CurrentCity from "../components/CurrentCity";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        text: state.currentCity
    }
}

export default connect(mapStateToProps, null)(CurrentCity);