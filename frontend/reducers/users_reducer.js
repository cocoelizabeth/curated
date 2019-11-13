import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_IDEA, RECEIVE_IDEAS } from '../actions/idea_actions';



const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        
        case RECEIVE_CURRENT_USER:
           
            return merge({}, state, {[action.currentUser.id]: action.currentUser});
        // case RECEIVE_IDEAS:
        //     return action.ideas;
        // case  RECEIVE_IDEA:
        //     return merge({}, state, {[action.payload.curator.id]: action.payload.curator});
        // case RECEIVE_USERS:
        //     return action.users;
        case RECEIVE_USER:
           const user = action.user;
            return merge({}, state, { [user.id]: user });
        default:
            return state;
    }
};

export default usersReducer;