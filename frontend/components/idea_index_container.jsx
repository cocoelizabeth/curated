import {connect} from 'react-redux';
import { fetchIdeas } from '../actions/idea_actions';
import IdeaIndex from './idea_index';


const mapStateToProps = (state) => {
    const { ideas } = state.entities;
    return {
        ideas: Object.values(ideas)
    };
};

const mapDispatchToProps = dispatch => ({
    fetchIdeas: () => dispatch(fetchIdeas()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IdeaIndex);