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
        this.props.fetchCollections();
    }

  
    render() {
        debugger
        return (
            <>
            <h1>Collection Index</h1>
                
            </>

        )
            
    }
}

export default CollectionIndex;


