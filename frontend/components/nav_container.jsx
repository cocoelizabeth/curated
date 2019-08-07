import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import { fetchUser } from '../actions/user_actions';
import MainNav from './main_nav';



// const mapStateToProps = ({ session, entities: {users} }) => {
   
//     return {
//         currentUser: users[session.id] || {}
        
//     };
// };
const mapStateToProps = (state) =>{
    // debugger
    let user = state.entities.users[state.session.id];
    return({
        currentUser: user

    })
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNav));