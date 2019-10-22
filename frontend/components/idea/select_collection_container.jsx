import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCollections } from '../../actions/collection_actions';
import SelectCollection from './select_collection';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id] || {};
    const collections = Object.values(state.entities.collections);
    
        .filter(collection => collection.user_id === currentUser.id);

        return ({
            currentUser,
            collections,
        })
}