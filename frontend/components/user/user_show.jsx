import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import CollectionItem from '../collections/collections_index_item';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger
    }

    componentDidMount () {
        
        this.props.fetchAllCollections(this.props.user.id);
    }

    render() {
        const { user } = this.props;
        let collectionItem;
        debugger
        if (user) {

        const collectionList = Object.keys(this.props.collections).map (
            id => this.props.collections[id] 
        );
        
        collectionItem = collectionList.map(collection =>  {
            return (
                <li className="collection-container" key={`collection-${collection.id}`}><CollectionItem collection={collection}/></li>
            )
        })}
        debugger
        return (
            <>
            <h1>User Show Page</h1>
            <ul>
                {collectionItem}
            </ul>
           </>
        )
    }
}

export default UserShow;