import { connect } from 'react-redux';
import {modalToggle} from "../actions";
import ShowModal from "../components/ShowModal";


const mapDispatchToProps = {
    setIsLoading:modalToggle
}


export default connect(null, mapDispatchToProps)(ShowModal);


