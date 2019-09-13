import {connect} from 'react-redux';
import ShowModal from '../components/ShowModal';
import {setIsLoading} from '../actions/index';

const mapDispatchToProps = {
    setIsLoading
}

export default connect(null, mapDispatchToProps)(ShowModal);