import React from 'react';
import CollectionItem from '../collections/collections_index_item';
import NavContainer from '../nav_container';
import { Route } from 'react-router-dom';


class CollectionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.collectionItems = [];
    
        
    }

    componentDidMount() {
  
        this.props.fetchAllCollections(this.props.match.params.userId);
  
        
    }

  
    render() {
   

        const { user, ideas } = this.props;
        let collectionItem;

        if (user) {
            // Get all of users collections
            const collectionList = Object.keys(this.props.collections).map(
                id => this.props.collections[id]
            );
            

            collectionItem = collectionList.map(collection => {
                
                const collectionIdeas = this.props.ideas.filter(idea => collection.idea_ids.includes(idea.id));
                return (
                    <li 
                        className="collection-item-container" 
                        key={`collection-${collection.id}`}>
                        <CollectionItem 
                            collection={collection}
                            ideas={collectionIdeas}
                        />
                    </li>
                )
            })
        }

        
        return (
            <>
                <div className="collection-index">
                    <ul className="collection-index-container">
                        {collectionItem}

                    </ul>
                </div>                
            </>

        )
            
    }
}

export default CollectionIndex;


