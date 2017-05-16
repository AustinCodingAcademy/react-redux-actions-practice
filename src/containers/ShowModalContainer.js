import { connect } from "react-redux";
import ShowModal from "../components/ShowModal";
import {setIsLoading} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLoading: (val) => dispatch(setIsLoading(val))
    }
}

const ShowModalContainer = connect(null, mapDispatchToProps)(ShowModal);
export default ShowModalContainer;