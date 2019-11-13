import merge from 'lodash/merge';

const topicsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        default:
            return state;
    }
};

export default topicsReducer;