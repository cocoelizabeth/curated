import { connect } from 'react-redux';
import React from 'react';
import { fetchIdea } from '../../actions/idea_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import IdeaShow from './idea_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // debugger
    const idea = state.entities.ideas[ownProps.match.params.ideaId];
    return {
        idea, 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchIdea: (ideaId) => dispatch(fetchIdea(ideaId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaShow);