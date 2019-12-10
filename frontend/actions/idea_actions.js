import * as APIUtil from "../util/idea_api_util";

export const RECEIVE_IDEAS = 'RECEIVE_IDEAS';
export const RECEIVE_IDEA = 'RECEIVE_IDEA';

export const receiveIdeas = (ideas) => {
    return ({
        type: RECEIVE_IDEAS,
        ideas,
    });
};

export const receiveIdea = (payload) => {
    return ({
        type: RECEIVE_IDEA,
        payload,
    });
};

export const fetchIdeas = () => dispatch => (
    APIUtil.fetchIdeas().then(
        ideas => dispatch(receiveIdeas(ideas))
    )
);

export const fetchIdea = (id) => dispatch => (
    APIUtil.fetchIdea(id).then(
        idea => dispatch(receiveIdea(idea))
    )
);

export const createIdea = (formData) => dispatch => {
    return APIUtil.createIdea(formData).then(
            idea => dispatch(receiveIdea(idea))
        );
};

export const updateIdea = (id, formData) => dispatch => {
    return APIUtil.updateIdea(id, formData).then(
        idea => dispatch(receiveIdea(idea))
    );
};

export const fetchUserIdeas = (userId) => dispatch => (
    APIUtil.fetchUserIdeas(userId).then(
        ideas => dispatch(receiveIdeas(ideas))
    )
);

export const fetchCollectionIdeas = (collectionId) => dispatch => (
    APIUtil.fetchCollectionIdeas(collectionId).then (
        ideas => dispatch(receiveIdeas(ideas))
    )
);
  
export const createIdeaJoin = (idea, collectionId) => dispatch => {
   return  APIUtil.createIdeaJoin(idea, collectionId).then(
       idea => dispatch(receiveIdea(idea))
   );
};

export const fetchCollectionIdeaJoins = (collectionId) => dispatch => (
    APIUtil.fetchCollectionIdeaJoins(collectionId).then (
        ideaJoins => dispatch( receiveIdeas(ideaJoins))
    )
);



// NOTES: might change fetchIdeas to: 

// export const fetchIdeas = (filters) => dispatch => (
//     APIUtil.login(user).then(
//         user => dispatch(receiveCurrentUser(user)),
//         err => dispatch(receiveSessionErrors(err.responseJSON))
//     )
// );