import ChangeTemparature from '../components/ChangeTemperature'
import {connect} from 'react-redux'
import state from '../state';

const mapStateToProps = () => {
    return {
        text: state.specialText
    }
}

export default connect(mapStateToProps)(ChangeTemparture)