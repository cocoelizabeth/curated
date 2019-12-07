timport { connect } from 'react-redux';
import { fetchUserIdeas } from '../../actions/idea_actions';

import UserIdeaIndex from './user_idea_index';


const mapStateToProps = (state, ownProps) => {
      
    const { ideas } = state.entities;
    const user = state.entities.users[ownProps.match.params.userId];
    return {
        //  NOTE: select only ideas for this user 
        ideas: Object.values(ideas),
        user,

    };
};

const mapDispatchToProps = dispatch => ({
    fetchUserIdeas: (user_id) => dispatch(fetchUserIdeas(user_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIdeaIndex);