import React from 'react';
import { connect } from 'react-redux';
import { fetchCollection } from '../../actions/collection_actions';
import { fetchCollectionIdeas, fetchCollectionIdeaJoins } from '../../actions/idea_actions';
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

    let ideaJoins;
    if (collection) {
        // ideaJoins = collection.idea_join_id.map(ideaJoinId =>
        //     fetchIdeaJoin
        //     )
        // idea_joins = collection.idea_joins.map(ideaJoinId => state.entities.ideas[ideaJoinId.ideaId]).filter(Boolean)
    } else {
        ideaJoins = [];
    }

    
    return {
        collection,
        ideas,
        ideaJoins
    };
};


const mapDispatchToProps = dispatch => {
    return {
        fetchCollection: collectionId => dispatch(fetchCollection(collectionId)),
        openModal: (modal, callback, collectionId, collectionTitle, idea) => dispatch(openModal(modal, callback, collectionId, collectionTitle, idea)),
        createIdea: () => dispatch(createIdea()),
        createCollection: (collection) => dispatch(createCollection(collection)),
        fetchCollectionIdeas: collectionId => dispatch(fetchCollectionIdeas(collectionId)),
        fetchCollectionIdeaJoins: collectionId => dispatch(fetchCollectionIdeaJoins(collectionId)),
        // fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionShow);
