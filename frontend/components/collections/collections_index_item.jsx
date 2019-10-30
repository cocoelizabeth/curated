import React from 'react';
import { MiniCollectionImage } from './mini_collection_image';

class CollectionItem extends React.Component {
    constructor(props) {
        super(props);
        debugger
        // this.state = {
        //     miniImageQuantity: this.props.collections.ideaIds.length || null,
        //     greyImageQuantity: this.state.miniImageQuantity - 6 || null,
        // };
    }


    render () {
      
 
        // const miniCollectionsImages =
        //     this.state.miniImageQuantity < 6 ?
        //     let  i = 0;
        //     const six = this.props.collection.ideas.splice(6);
        //             six.map((idea, i) => (

        //                 <MiniCollectionImage
        //                     idea={idea}
        //                     key={i++}
        //                 />
        //             )):null
        //         } : null;

     
        // if the collection has at least 6 images, grab the first 6 for the grid
        const firstSixIdeas = this.props.ideas.slice(0,6); // array of 6 objects

        ///  COMMENT

     
        const photoUrls = firstSixIdeas.map(idea => {

            return (
                <li className="mini-image"><img src={idea.photoUrl}></img></li>
            )
        })

        //  COMMENT
        // const ideaImages = ideas.map(idea => {

        //     return (

        //         <IdeaItem
        //             key={idea.id}
        //             idea={idea}
        //         />
        //     )
        // });
        // for (let i = 0; i < 6; i++) {
        //     let collectionImageGrid  = 
        //         let = ideaId = ideaIds[i];
        //         let idea = this.props.fetchIdea(ideaId);
        //         <li className="mini-image"><img src={this.props.collection.ideas[0].photoUrl}></img></li>
        // }
     

  
        return(
            <>
                <div className="collection-image-grid-container"> 
                    <ul className="collection-image-grid">
                    {photoUrls}
                    {/* {ideaImages} */}
                        {/* <li className="mini-image"><img src={this.props.collection.ideas[0].photoUrl}></img></li>
                        <li className="mini-image"><img src={this.props.collection.ideas[1].photoUrl}></img></li>
                        <li className="mini-image"><img src={this.props.collection.ideas[2].photoUrl}></img></li>
                        <li className="mini-image"><img src={this.props.collection.ideas[3].photoUrl}></img></li>
                        <li className="mini-image"><img src={this.props.collection.ideas[4].photoUrl}></img></li>
                        <li className="mini-image"><img src={this.props.collection.ideas[5].photoUrl}></img></li> */}

                        {/* <li className="mini-image"><img src={window.staticImages.image1}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image2}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image3}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image4}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image5}></img></li>
                        <li className="mini-image"><img src={window.staticImages.image6}></img></li> */}

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



// import React from 'react';
// import { MiniCollectionImage }

// export default class CollectionItem extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {

        // // if the collection has at least 6 images, grab the first 6 for the grid
        // if (this.props.collections.idea_ids.length > 5) {

        //     for (let i = 0; i < 6; i++) {

        //         const miniCollectionsImages =

        //             this.props.collection.ideas.map((idea, i) => (

        //                 <MiniCollectionImage
        //                     idea={idea}
        //                     key={i}
        //                 />
        //             )) : null;
        //     }
        // }

//         // else grab the number of images and make the rest grey 

//         // let images = this.props.collection.i
//         // // let images
//         // //   

//         // for (let i=0; i<6; i++) {
//         //     this.props.collection.idea_ids.forEach(
//         //         fetchId()
//         //     )
//         // }

//         return (
//             <>
//                 <div className="collection-image-grid-container">
//                     <ul className="collection-image-grid">
//                         {miniCollectionsImages}
//                     </ul>
//                 </div>

//             </>

//             // <>
//             //     <div className="collection-image-grid-container"> 
//             //         <ul className="collection-image-grid">
//             //             <li className="mini-image"><img src={window.staticImages.image1}></img></li>
//             //             <li className="mini-image"><img src={window.staticImages.image2}></img></li>
//             //             <li className="mini-image"><img src={window.staticImages.image3}></img></li>
//             //             <li className="mini-image"><img src={window.staticImages.image4}></img></li>
//             //             <li className="mini-image"><img src={window.staticImages.image5}></img></li>
//             //             <li className="mini-image"><img src={window.staticImages.image6}></img></li>

//             //         </ul>
//             //     </div>
//             //     <div className="collection-text">
//             //         <div id="collection-item-title">{this.props.collection.title}</div>
//             //         <div id="collection-num-ideas">{this.props.collection.idea_ids.length} ideas</div>
//             //     </div>

//             // </>

//         )
//     }
// }

// export default CollectionItem;