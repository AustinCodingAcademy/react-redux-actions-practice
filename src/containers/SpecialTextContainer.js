import SpecialText from "../components/SpecialText";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        text: state.specialText
    }
}

export default connect(mapStateToProps)(SpecialText);