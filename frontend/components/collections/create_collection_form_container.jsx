import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { createCollection } from '../../actions/collection_actions';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import CollectionForm from './collection_form';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    username: ownProps.match.params.username,
    formType: 'createCollection',
    placeholderText: 'Like "Places to go" or "Recipies to Make"',
    header: 'Create collection',
    buttonText: 'Create',
    collection: { title: "", description: ""},
    // add topics here later
});

const mapDispatchToProps = dispatch => ({
    action: (collection) => dispatch(createCollection(collection)),
    closeModal: () => dispatch(closeModal()),
});

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionForm));
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CollectionForm));
