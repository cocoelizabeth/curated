import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createCollection, fetchCollection } from '../../actions/collection_actions';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import IdeaSavedModal from './idea_saved_modal';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        username: ownProps.match.params.username,
        photoUrl: state.ui.modal.idea.photoUrl,
        formType: 'ideaSavedModal',
        placeholderText: 'Like "Places to go" or "Recipies to Make"',
        // header: `Saved to ${ownProps.collection}`,
        collectionId: ownProps.collectionId,
        collectionTitle: ownProps.collectionTitle,
        buttonText: 'See it Now'
    // collection: { title: "", description: "" },
    // add topics here later
    }

};

const mapDispatchToProps = dispatch => ({
    // action: (collection) => dispatch(createCollection(collection)),
    fetchCollection: (collectionId) => dispatch(fetchCollection(collectionId)),
    closeModal: () => dispatch(closeModal()),
});

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionForm));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IdeaSavedModal));
