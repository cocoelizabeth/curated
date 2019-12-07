import React from 'react';
import {connect} from 'react-redux';
import { createIdea } from '../actions/idea_actions';
import { openModal } from '../actions/modal_actions';
import {Link} from 'react-router-dom';


// const mapDispatchToProps = dispatch => {
//     return {
//         createIdea: () => dispatch(createIdea()),
//         openModal: (modal, callback, collectionId, collectionTitle, idea) => dispatch(openModal(modal, callback, collectionId, collectionTitle, idea)),
//     };
// };

const IdeaItem = ({ idea }) => {
    return (
        <li className="idea-image-container">
            <Link to={`/ideas/${idea.id}`}>
             <img src={idea.photoUrl} alt="image2" className="idea" />
            {/* <p> Title: {idea.title} </p> */}
            </Link>
        </li>
    );
};

export default IdeaItem;

// export default connect(null, mapDispatchToProps)(IdeaItem)



