import React from 'react';

class MiniCollectionImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { idea } = this.props;
        return (
            <li className="mini-image">
                <img src={idea.photoUrl}></img>
            </li>
        )
    }
}

export default MiniCollectionImage;