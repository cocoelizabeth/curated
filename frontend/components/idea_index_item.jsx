import React from 'react';
import {connect} from 'react-redux';
import { createIdea } from '../actions/idea_actions';
import { openModal } from '../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    const defaultTitle = { title: "" }
    const title = state.entities.ideas[ownProps.title] || defaultTitle;
    return {
        title,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createIdea: () => dispatch(createIdea()),
        openModal: modal => dispatch(openModal(modal))
    };
};

const  IdeaItem = ({ idea, title, description, source_url, createIdea, openModal, modal }) => {
    return (
        
        <li className="idea-image-container" onClick={() =>
            dispatch(openModal({type: "show-idea", idea: idea}))}>
            <img src={idea.photoUrl} alt="image2" className="idea"/>
            <p> Title: {idea.title} </p>
         </li>

            
      
    );
   
};


export  default connect(mapStateToProps, mapDispatchToProps)(IdeaItem)

{/* // NOTE: will change createIdea button to save pin later */}


