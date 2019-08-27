import CurrentCity from '../components/CurrentCity';
import {connect} from 'react-redux';
import state from '../state';

const mapStateToProps = () => {
    return {
        text: state.currentCity
    }
}

export default connect(mapStateToProps)(CurrentCity)
