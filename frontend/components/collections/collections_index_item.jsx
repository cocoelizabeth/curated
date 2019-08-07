import React from 'react';

class CollectionItem extends React.Component {
    
    render () {
        return(
            <div>{this.props.collection.title}</div>
        )
    }
}

export default CollectionItem;