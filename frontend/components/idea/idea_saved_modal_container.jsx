import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createCollection } from '../../actions/collection_actions';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import IdeaSavedModal from './idea_saved_modal';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        username: ownProps.match.params.username,
        photoUrl: state.modal.photoUrl,
        // boardName: this.state.collectionTitle,
        formType: 'ideaSavedModal',
        placeholderText: 'Like "Places to go" or "Recipies to Make"',
        header: 'Idea Saved to collectionName',
        buttonText: 'See it Now'
    // collection: { title: "", description: "" },
    // add topics here later
    }

};

const mapDispatchToProps = dispatch => ({
    // action: (collection) => dispatch(createCollection(collection)),
    closeModal: () => dispatch(closeModal()),
});

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionForm));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IdeaSavedModal));
