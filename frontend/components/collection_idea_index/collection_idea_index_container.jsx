import { connect } from 'react-redux';
import { fetchCollectionIdeas } from '../../actions/idea_actions';
// might  need to  make this in  a new  component folder --  see  ../user_idea_index
// change to collectionIdeaIndex after testing with UserIdeaIndex and making the CollectionIdeaIndex 
import CollectionIdeaIndex from '../collection_idea_index/collection_idea_index';

// const mapStateToProps = (state, ownProps) => {
//     const { ideas } = state.entities;
//     const { collection } = state.entities.collections[ownProps.match.params.collectionId];
    

//     return {
//         ideas: Object.values(ideas),
//         collection
//     };
// };

// const mapDispatchToProps = dispatch  =>  ({
//     fetchCollectionIdeas: (collectionId) => dispatch(fetchCollectionIdeas(collectionId))
// });



export default connect(null, null)(CollectionIdeaIndex);