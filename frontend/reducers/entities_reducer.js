import { combineReducers } from 'redux';
import users from './users_reducer';
import ideas from './ideas_reducer';

export default combineReducers({
    users,
    ideas,
});

