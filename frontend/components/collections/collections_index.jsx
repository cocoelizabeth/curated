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
        debugger
        this.props.fetchAllCollections(this.props.match.params.userId);
    }

  
    render() {


        const { user } = this.props;
        let collectionItem;
        debugger;
        if (user) {

            const collectionList = Object.keys(this.props.collections).map(
                id => this.props.collections[id]
            );

            collectionItem = collectionList.map(collection => {
                return (
                    <li className="collection-item-container" key={`collection-${collection.id}`}><CollectionItem collection={collection} /></li>
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


