import { connect } from 'react-redux';
import React from 'react';
import { fetchIdea } from '../../actions/idea_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import IdeaShow from './idea_show';
import { withRouter } from 'react-router-dom';
import {fetchAllCollections} from '../../actions/collection_actions';
import { createIdea, updateIdea, createIdeaJoin } from '../../actions/idea_actions';


const mapStateToProps = (state, ownProps) => {

    const currentUser = state.session["id"];
    const idea = state.entities.ideas[ownProps.match.params.ideaId] || { original_collection: {}, curator: {} };
    const curator = state.entities.ideas[ownProps.match.params.ideaId] || {};
    const collections = Object.values(state.entities.collections)
        .filter(collection => collection.user_id === currentUser);
    let optionText;

    if (!collections[0]) {
        optionText = "Select";
    } else {
        const lastCollectionIdx = collections.length - 1;
        const lastCollection = collections[lastCollectionIdx];
        optionText = lastCollection.title;
    }

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
        openModal: (modal, callback, collectionId, collectionTitle, idea) => dispatch(openModal(modal, callback, collectionId, collectionTitle, idea)),
        closeModal: (modal) => dispatch(closeModal(modal))
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaShow);