import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION } from '../actions/collection_actions';

const collectionsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_COLLECTION: 
            return Object.assign({}, state, {[action.payload.id]: action.payload});
        
        case RECEIVE_COLLECTIONS: 
            return action.collections;
        
        default: 
            return state;
    }
};

export default collectionsReducer;