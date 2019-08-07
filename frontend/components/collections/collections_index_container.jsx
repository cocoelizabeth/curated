import { connect } from 'react-redux';
import { fetchCollections } from '../../actions/collection_actions';
import CollectionIndex from './collection_index';

const mapStateToProps = (state) => {
    const { collections } = state.entities;
    return {
        collections: Object.values(collections)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionIndex);