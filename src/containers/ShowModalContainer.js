import ShowModal from "../components/ShowModal";
import {connect} from "react-redux";
import {setIsLoading} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        setIsLoading: function(value) {
            dispatch(setIsLoading(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(ShowModal);