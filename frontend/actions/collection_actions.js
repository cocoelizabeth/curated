import * as APIUtil from "../util/collection_api_util";

export const RECEIVE_COLLECTIONS= 'RECEIVE_COLLECTIONS';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';

export const receiveCollections = (collections) => {
    
    return ({
        type: RECEIVE_COLLECTIONS,
        collections,

    });
 
};

export const receiveCollection = (payload) => ({
    type: RECEIVE_COLLECTION,
    payload,
});


export const fetchAllCollections = (userId) => dispatch => {
    return APIUtil.fetchAllCollections(userId).then(
        collections => dispatch(receiveCollections(collections))
    );

};
   

export const fetchCollection = (id) => dispatch => (
    APIUtil.fetchCollection(id).then(
        collection => dispatch(receiveCollection(collection))
    )
);


export const createCollection = collection => dispatch => {

    return APIUtil.createCollection(collection).then(
        collection => dispatch(receiveCollection(collection))
    );
};

export const updateCollection = collection => dispatch => {

    return APIUtil.createCollection(collection).then(
        collection => dispatch(receiveCollection(collection))
    );
};

export const deleteCollection = collection => dispatch => {

    return APIUtil.createCollection(collection).then(
        collection => dispatch(receiveCollection(collection))
    );
};





// // NOTES: might change fetchIdeas to: 

// // export const fetchIdeas = (filters) => dispatch => (
// //     APIUtil.login(user).then(
// //         user => dispatch(receiveCurrentUser(user)),
// //         err => dispatch(receiveSessionErrors(err.responseJSON))
// //     )
// // );