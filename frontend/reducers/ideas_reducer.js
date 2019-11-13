import { RECEIVE_IDEAS, RECEIVE_IDEA } from '../actions/idea_actions';
import { RECEIVE_COLLECTIONS} from '../actions/collection_actions';
import merge from 'lodash/merge';

const ideasReducer = (state = {}, action) => {
    
    Object.freeze(state);
    debugger
    switch(action.type) {
        case RECEIVE_IDEAS: 
    
            return action.ideas;
        
        case RECEIVE_IDEA:
            return merge({}, state, { [action.payload.idea.id]: action.payload.idea });
        
        case RECEIVE_COLLECTIONS:
            debugger
            return Object.assign({}, state, action.ideas);
        default:
            return state;
    }
};

export default ideasReducer;

// NOTE: added receive idea here. this wasnt in the example

