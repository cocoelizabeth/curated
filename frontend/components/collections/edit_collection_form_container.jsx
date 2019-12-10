import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { createCollection, updateCollection } from '../../actions/collection_actions';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import CollectionForm from './collection_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        username: ownProps.match.params.username,
        formType: 'editCollection',
        placeholderText: 'Like "Places to Go" or "Recipies to Make"',
        header: 'Edit your collection',
        buttonText: 'Save',
        collection: { title: ownProps.collectionTitle, description: "", id: ownProps.collectionId },
        textArea: { name: "Description", placeholderText: "Whats your board about?"}
    };

    // add topics here later
};

const mapDispatchToProps = dispatch => ({
    action: (collection) => dispatch(updateCollection(collection)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, callback, collectionId, collectionTitle, idea) => dispatch(openModal(modal, callback, collectionId, collectionTitle, idea)),
});

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionForm));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionForm));
