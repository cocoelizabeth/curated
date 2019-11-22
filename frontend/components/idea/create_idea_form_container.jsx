import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { createIdea, fetchIdea } from '../../actions/idea_actions';
import { fetchAllCollections } from '../../actions/collection_actions';
import CreateIdeaForm from './create_idea_form';

const mapStateToProps = (state, ownProps)  => {

    let optionText;
    if (!Object.values(state.entities.collections)[0]) {
        optionText = "Select";
    } else {

        const lastCollectionIdx = Object.keys(state.entities.collections).length - 1;
        optionText = Object.values(state.entities.collections)[lastCollectionIdx].title;
    }
    const currentUser = state.entities.users[state.session.id] || {};
    const collections = Object.values(state.entities.collections)
        .filter(collection => collection.user_id === currentUser.id);

        return ({
            currentUser,
            collections,
            optionText,
        });
};


const mapDispatchToProps = dispatch => ({
    createIdea: (formData) => dispatch(createIdea(formData)),
    fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
    fetchIdea: (id) => dispatch(fetchIdea(id)),
    openModal: (modal, callback) => dispatch(openModal(modal, callback)),

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateIdeaForm));