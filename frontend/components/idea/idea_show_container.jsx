import { connect } from 'react-redux';
import React from 'react';
import { fetchIdea } from '../../actions/idea_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import IdeaShow from './idea_show';
import { withRouter } from 'react-router-dom';
import {fetchAllCollections} from '../../actions/collection_actions';
import { createIdea, updateIdea, createIdeaJoin } from '../../actions/idea_actions';

// const mapStateToProps = (state, ownProps) => {
//       
//     const idea = state.entities.ideas[ownProps.match.params.ideaId];
    
//     let  curatorId;
//     //  ? curatorId = state.entities.ideas[ownProps.match.params.ideaId].curator.id : curatorId = null
//     // const curatorId = idea.curator.id
//     return {
//         idea,
//         currentUser,
//         curatorId,


//     };
// };


const mapStateToProps = (state, ownProps) => {

    const currentUser = state.session["id"];
    const idea = state.entities.ideas[ownProps.match.params.ideaId] || { original_collection: {}, curator: {} };
    let optionText;
    if (!Object.values(state.entities.collections)[0]) {
        optionText = "Select";
    } else {
        
        const lastCollectionIdx = Object.keys(state.entities.collections).length - 1;
        optionText = Object.values(state.entities.collections)[lastCollectionIdx].title;
    }
    // const optionText = Object.values(state.entities.collections)[0].title || "COLLECTION NAME";
    const curator = state.entities.ideas[ownProps.match.params.ideaId]|| {};
    const collections = Object.values(state.entities.collections)
        .filter(collection => collection.user_id === currentUser);

    // const curatorId = idea.curator.id 
    return {
        idea,
        currentUser,
        curator,
        collections,
        optionText,
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchIdea: (ideaId) => dispatch(fetchIdea(ideaId)),
        fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
        createIdeaJoin: (idea, collectionId) => dispatch(createIdeaJoin(idea, collectionId)),
        updateIdea: (id, formData) => dispatch(updateIdea(id, formData)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: (modal) => dispatch(closeModal(modal))
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaShow);