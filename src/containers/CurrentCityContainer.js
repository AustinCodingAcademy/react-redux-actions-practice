import CurrentCity from '../components/CurrentCity';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        text: state.currentCity
    }
}

export default connect(mapStateToProps)(CurrentCity)
