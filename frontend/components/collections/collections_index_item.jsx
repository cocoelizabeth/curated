import React from 'react';

class CollectionItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        // let images
        //   
        
        // for (let i=0; i<6; i++) {
        //     this.props.collection.idea_ids.forEach(
        //         fetchId()
        //     )
        // }
        return(
            <>
                <div className="collection-image-grid-container"> 
                    <ul className="collection-image-grid">
                        <li className="mini-image"><img src={window.staticImages.image1}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image2}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image3}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image4}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image5}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image6}></img></li>

                    </ul>
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