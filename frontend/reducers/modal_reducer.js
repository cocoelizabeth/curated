import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_IDEA } from '../actions/idea_actions';
const modalReducer = (state = null, action) => {

    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_IDEA:
            return Object.assign({}, state, { ['idea']: action.payload.idea });
        case OPEN_MODAL:
            debugger
            return {
                modal: action.modal || state,
                callback: action.callback,
                collection: action.collection,
                idea: action.idea,
                
            };
        case CLOSE_MODAL:
            return null;
        default: 
            return state;
    }
};
export default modalReducer;