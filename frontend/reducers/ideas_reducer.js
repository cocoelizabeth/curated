import { RECEIVE_IDEAS, RECEIVE_IDEA } from '../actions/idea_actions';
import merge from 'lodash/merge';

const ideasReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_IDEAS:
            return action.ideas;
        case RECEIVE_IDEA:
            return merge({}, state, { [action.idea.id]: action.idea });
        default:
            return state;
    }
};

export default ideasReducer;

// NOTE: added receive idea here. this wasnt in the example

