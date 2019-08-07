// import * as APIUtil from "../util/board_api_util";

// export const RECEIVE_BOARDS= 'RECEIVE_IDEAS';
// export const RECEIVE_IDEA = 'RECEIVE_IDEA';

// export const receiveIdeas = (idea) => ({
//     type: RECEIVE_IDEAS,
//     idea,
// });

// export const receiveIdea = (payload) => ({
//     type: RECEIVE_IDEA,
//     payload,
// });


// export const fetchIdeas = () => dispatch => (
//     APIUtil.fetchIdeas().then(
//         ideas => dispatch(receiveIdeas(ideas))
//     )
// );

// export const fetchIdea = (id) => dispatch => (
//     APIUtil.fetchIdea(id).then(
//         idea => dispatch(receiveIdea(idea))
//     )
// );


// export const createIdea = idea => dispatch => {

//     return APIUtil.createIdea(idea).then(
//         idea => dispatch(receiveIdea(idea))
//     );
// };




// // NOTES: might change fetchIdeas to: 

// // export const fetchIdeas = (filters) => dispatch => (
// //     APIUtil.login(user).then(
// //         user => dispatch(receiveCurrentUser(user)),
// //         err => dispatch(receiveSessionErrors(err.responseJSON))
// //     )
// // );