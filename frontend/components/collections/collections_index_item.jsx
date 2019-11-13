import React from 'react';
import { Link } from 'react-router-dom';


// import { MiniCollectionImage } from './mini_collection_image';

class CollectionItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
     
        // if the collection has at least 6 images, grab the first 6 for the grid
        // if this.props.ideas.length > 5
        const firstSixIdeas = this.props.ideas.slice(0,6); // array of 6 objects

     
        const photoUrls = firstSixIdeas.map(idea => {

            return (
                <li className="mini-image"><img src={idea.photoUrl}></img></li>
            )
        })

  
        return (
            <>
                <div className="collection-image-grid-container"> 
                    <Link to={`/collections/${this.props.collection.id}`}>
                        <ul className="collection-image-grid">
                            {photoUrls}
                        </ul>
                    </Link>
                </div>
                <div className="collection-text">
                    <div id="collection-item-title">{this.props.collection.title}</div>
                    <div id="collection-num-ideas">{this.props.collection.idea_ids.length} ideas</div>
                </div>
            
            </>
            
        )
    }
}

export default CollectionItem;
