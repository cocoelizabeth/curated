import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createIdea } from '../../actions/idea_actions';
import { fetchAllCollections } from '../../actions/collection_actions';
import CreateIdeaForm from './create_idea_form';

const mapStateToProps = (state, ownProps)  => {
    const currentUser = state.entities.users[state.session.id] || {};
    const collections = Object.values(state.entities.collections)
        .filter(collection => collection.user_id === currentUser.id);

        return ({
            currentUser,
            collections,
        });
};


const mapDispatchToProps = dispatch => ({
    createIdea: (formData) => dispatch(createIdea(formData)),
    fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateIdeaForm));