import { connect } from 'react-redux';
import { fetchAllCollections } from '../../actions/collection_actions';
import { fetchIdea } from '../../actions/idea_actions'
import CollectionIndex from './collections_index';

// WORKING CODE::
const mapStateToProps = (state, ownProps) => {
    
    const { collections,  ideas } = state.entities;
    const user = state.entities.users[ownProps.match.params.userId];
    
    return {
        collections: Object.values(collections),
        ideas: Object.values(ideas),
        user,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
    fetchIdea: (id) => dispatch(fetchIdea(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndex);