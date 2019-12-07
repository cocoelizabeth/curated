import React from 'react';
import { Link } from 'react-router-dom';

const UserIdeaItem = ({ idea }) => {
    return (
        <li className="idea-image-container">
            <Link to={`/ideas/${idea.id}`}>
                <img src={idea.photoUrl} alt="image2" className="idea" />
                {/* <p> Title: {idea.title} </p> */}
            </Link>
        </li>
    );
};

export default UserIdeaItem;