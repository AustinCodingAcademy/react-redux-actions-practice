import { connect } from 'react-redux';
import {modalToggle} from "../actions";
import Modal from "../components/Modal";


const mapDispatchToProps = {
    setIsLoading:modalToggle
}

function mapStateToProps(state){
    return {
        isLoading: state.isLoading
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Modal);


