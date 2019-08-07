import { combineReducers } from 'redux';
import users from './users_reducer';
import ideas from './ideas_reducer';
import collections from './collections_reducer';
import topics from './topics_reducer';

export default combineReducers({
    users,
    ideas,
    collections,
    topics,
});

