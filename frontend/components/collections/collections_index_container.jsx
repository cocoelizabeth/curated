import { connect } from 'react-redux';
import { fetchAllCollections } from '../../actions/collection_actions';
import CollectionIndex from './collections_index';

const mapStateToProps = (state, ownProps) => {
    
    const { collections } = state.entities;
    const user = state.entities.users[ownProps.match.params.userId]
    return {
        collections: Object.values(collections),
        user,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllCollections: (userId) => dispatch(fetchAllCollections(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndex);