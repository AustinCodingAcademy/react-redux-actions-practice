import CurrentCity from '../components/CurrentCity';
import {connect} from 'react-redux';
import state from '../state';

const mapStateToProps = (state) => {
    return {
        text: state.currentCity
    }
}

export default connect(mapStateToProps)(CurrentCity)
