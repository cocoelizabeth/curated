import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION } from '../actions/collection_actions';
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
const collectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_COLLECTION: 
            return Object.assign({}, state, {[action.payload.id]: action.payload});
        
        case RECEIVE_COLLECTIONS: 
            return action.collections;
        case RECEIVE_USER:
        case RECEIVE_CURRENT_USER: 
            const collections = action.collections;
            return Object.assign({}, state, collections);
    
        default: 
            return state;
    }
};

export default collectionsReducer;