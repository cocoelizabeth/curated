import { connect } from 'react-redux';
import React from 'react';
import { fetchIdea } from '../../actions/idea_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import IdeaShow from './idea_show';
import { withRouter } from 'react-router-dom';
import {fetchAllCollections} from '../../actions/collection_actions';
import { createIdea, updateIdea, createIdeaJoin } from '../../util/idea_api_util';

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
    const curator = state.entities.ideas[ownProps.match.params.ideaId]|| {};
    const collections = Object.values(state.entities.collections)
        .filter(collection => collection.user_id === currentUser);

    // const curatorId = idea.curator.id 
    return {
        idea,
        currentUser,
        curator,
        collections
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchIdea: (ideaId) => dispatch(fetchIdea(ideaId)),
        fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
        createIdeaJoin: (idea, collectionId) => dispatch(createIdeaJoin(idea, collectionId)),
        updateIdea: (id, formData) => dispatch(updateIdea(id, formData))
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaShow);