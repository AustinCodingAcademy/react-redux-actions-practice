import { connect } from 'react-redux';
import UserButton from "../components/UserButtons";
import {addUser,removeUser} from "../actions"

//map a prop called text to the state specialText
const mapDispatchToProps={
    add:addUser,remove:removeUser
}

export default connect(null,mapDispatchToProps)(UserButton);