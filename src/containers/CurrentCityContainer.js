import {connect} from "react-redux";
import Counter from "../components/CurrentCity";

function mapStateToProps(state) {
    return {
        text: state.currentCity
        }
}

export default connect(mapStateToProps)(CurrentCity);