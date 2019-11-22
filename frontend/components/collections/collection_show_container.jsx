import React from 'react';
import { connect } from 'react-redux';
import { fetchCollection } from '../../actions/collection_actions';
import { fetchCollectionIdeas } from '../../actions/idea_actions';
import CollectionShow from './collection_show';
import { openModal } from '../../actions/modal_actions';
import { createCollection, fetchAllCollections } from '../../actions/collection_actions';
import { createIdea } from "../../actions/idea_actions";


const mapStateToProps = (state, ownProps) => {
    

    const collection = state.entities.collections[ownProps.match.params.collectionId];
    let ideas;
    if (collection)  {  
        // filtering undefined values using Boolean
        ideas = collection.idea_ids.map(ideaId=> state.entities.ideas[ideaId]).filter(Boolean);
    } else {
        ideas = [];
    }

    
    return {
        collection,
        ideas
    };
};


const mapDispatchToProps = dispatch => {
    return {
        fetchCollection: collectionId => dispatch(fetchCollection(collectionId)),
        // openModal: modal => dispatch(openModal(modal)),
        createIdea: () => dispatch(createIdea()),
        createCollection: (collection) => dispatch(createCollection(collection)),
        fetchCollectionIdeas: collectionId => dispatch(fetchCollectionIdeas(collectionId))
        // fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionShow);
