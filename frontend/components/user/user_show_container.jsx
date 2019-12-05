import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';
import { openModal } from '../../actions/modal_actions';
import { createCollection, fetchAllCollections }  from '../../actions/collection_actions';
import { createIdea } from "../../actions/idea_actions";



const mapStateToProps = (state, ownProps) => {
    const currentUser = state.session.id;
    const user = state.entities.users[ownProps.match.params.userId];
    return {
        user,
        currentUser,
        collections: state.entities.collections,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        openModal: (modal, callback, collection, idea) => dispatch(openModal(modal, callback, collection, idea)),
        createIdea: ()  => dispatch(createIdea()),
        createCollection: (collection)  => dispatch(createCollection(collection)),
        fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);