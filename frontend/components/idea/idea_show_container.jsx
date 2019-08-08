import { connect } from 'react-redux';
import React from 'react';
import { fetchIdea } from '../../actions/idea_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import IdeaShow from './idea_show';
import { withRouter } from 'react-router-dom';

// const mapStateToProps = (state, ownProps) => {
//       
//     const idea = state.entities.ideas[ownProps.match.params.ideaId];
    
//     let  curatorId;
//     //  ? curatorId = state.entities.ideas[ownProps.match.params.ideaId].curator.id : curatorId = null
//     // const curatorId = idea.curator.id
//     return {
//         idea,
//         currentUser,
//         curatorId,


//     };
// };


const mapStateToProps = (state, ownProps) => {
    
    const currentUser = state.session["id"];
    // let defaultCuratorId = { curatorId: "" };
    const idea = state.entities.ideas[ownProps.match.params.ideaId] || { original_collection: {}, curator: {} };
  
    debugger
    // const curator = state.entities.users[idea.curatorId] || {};
    const curator = state.entities.ideas[ownProps.match.params.ideaId]|| {};

    // debugger
    // const curatorId = idea.curator.id 
    return {
        idea,
        currentUser,
        curator
    };
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchIdea: (ideaId) => dispatch(fetchIdea(ideaId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaShow);