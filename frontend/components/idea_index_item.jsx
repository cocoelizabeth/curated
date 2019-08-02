import React from 'react';
import {connect} from 'react-redux';
import { createIdea } from '../actions/idea_actions';


const mapStateToProps = (state, ownProps) => {
    const defaultTitle = { title: "" }
    const title = state.entities.ideas[ownProps.title] || defaultTitle;
    return {
        title,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createIdea: () => {
            dispatch(createIdea());
        } 
    };
};

const  IdeaItem = ({ idea, title, description, source_url, createIdea }) => {
    let url = idea.source_url
    return (
        
        <li className="idea-item">
            <img src={window.staticImages.image3} alt="image3" className="idea"></img>
            <img src={window.staticImages.image2} alt="image2" className="idea"></img>
            <img src={window.staticImages.image1} alt="image1" className="idea" ></img>
            <p>Title: {idea.title} </p>
            {/* <button type="button" onClick={() => {
                createIdea(this.props.idea)
            } 
            }>  
                Save Idea to board
            </button> */}
        </li>
    );
   
};


export  default connect(mapStateToProps, mapDispatchToProps)(IdeaItem)

{/* // NOTE: will change createIdea button to save pin later */}


