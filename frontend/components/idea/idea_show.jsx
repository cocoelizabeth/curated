import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav_container';
import SelectCollection from './select_collection';

class IdeaShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            optionText: "COLLECTION NAME",
            collectionScroll: false,
            collection_id: null,
            user_id: this.props.currentUser
        };
        this.showCollectionScroll = this.showCollectionScroll.bind(this);
        this.hideCollectionScroll = this.hideCollectionScroll.bind(this);
        this.handleCollection = this.handleCollection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.props.fetchIdea(this.props.match.params.ideaId);
        this.props.fetchAllCollections(this.props.currentUser);
    }

    showCollectionScroll(e) {
        this.setState({collectionScroll: true});
    }

    hideCollectionScroll(e) {
        this.setState({ collectionScroll: false});
    }

    handleCollection(collection) {
        this.setState({collectionId: collection.id, optionText:collection.title});
        this.hideCollectionScroll();
    }

    handleSubmit(e) {

        e.preventDefault();
        const formData = new FormData();
        formData.append('idea[collection_ids]', [this.state.collectionId]);
        debugger
        this.props.updateIdea(this.props.idea.id, formData).then((res) => {
            this.props.history.push(`/ideas/${res.payload.idea.id}`);
        });
        
    }

    // changeSelectField() {
    //     if (this.state.collectionScroll) {
    //         return 
    //     }

    // }
    // formatName() {
    //     const defaultCurator = "A curator";
        
    //     const curator = this.props.curator || defaultCurator;
    //     if (curator.firstName ? curator = curator.firstName : curator = curator.username)
    //         return (
    //             curator
    //         );
    // }



   render () {
    
     if (!this.props.idea) { return <p>Loading...</p> };
     const displayCollectionScrollLis = 
        this.state.collectionScroll ?
            
            this.props.collections.map((collection, i) => (

                <SelectCollection
                    onSelectCollection={this.handleCollection}
                    collection={collection}
                    key={i}
                    text='Save'
                    fetchIdea={this.props.fetchIdea}
                />
            )) : null;
            const displayCollectionScroll = this.state.collectionScroll ? (
                <ul className='dropdown-visible-collections'>
                    {displayCollectionScrollLis}
                </ul>
            ): null;
    //  let editButton;
    //  let usernameDisplay ="";
     
    //  if(typeof this.props.idea.curator !== 'undefined'){
    //      editButton = this.props.currentUser === this.props.idea.curator.id ? (
    //          <ul className="idea-show-nav-left">
    //              <li className="idea-show-nav-left"><i className="fas fa-pencil-alt"></i></li>
    //          </ul>
    //      ) : <div height="40px" width="40px"></div>

    //      usernameDisplay = this.props.currentUser === this.props.idea.curator.id ? (
    //          "You"
    //      ) : this.props.idea.curator.username


    //  }
     const editButton =  this.props.currentUser  === this.props.idea.curator.id ? (
         <ul className="idea-show-nav-left">
             <li className="idea-show-nav-left"><i className="fas fa-pencil-alt"></i></li>
         </ul> 
     ) : <div height="40px" width="40px"></div>

     const usernameDisplay = this.props.currentUser === this.props.idea.curator.id ? (
         "You"
     ) : this.props.idea.curator.username

//      

      
     
       return (
           
           <>
           <NavContainer />
               <button className="back-button" onClick={this.props.history.goBack}>
                    <i className="fas fa-arrow-left"></i>
               </button>
               <button className="close-button" onClick={this.props.history.goBack}>
                   <i className="fas fa-times"></i>
               </button>
           <div className="grey-background">
           
            
               <div className="modal-child">
                 
                <div className="idea-show-container" >
                
                    <span className="idea-show-nav">
                       
                        {editButton}
                    

                        <ul className="idea-show-nav-right">
                            <li className="collection-dropdown-button" onClick={this.showCollectionScroll}>
                                <h4 className="dropdown-collection-name">{this.state.optionText}</h4>
                                <i className="fas fa-chevron-down"></i>
                            </li>
                            <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
                        </ul>
                    </span>

                     <div className="dropdown-modal">
                               {displayCollectionScroll}
                    </div>

                    <div className="idea-show-elements">
                        <h5 className="idea-title">{this.props.idea.title}</h5>
                        <div className="idea-show-image-container">
                            <img src={this.props.idea.photoUrl} className="idea-show-image"/>
                        </div>
                      

                        {/* <div className="idea-show-info-container">
                            <div id="profile-photo">
                                <Link to="#"><img src="https://curated-seeds.s3.amazonaws.com/default_profile_pic.png" /></Link>
                            </div>
                            <div className="idea-show-text">
                                <ul className ="follow-user-info">
                                    <li id="follow-user-info">
                                        <Link to={`/${this.props.idea.curator.username}`}>{this.props.idea.curator.username}</Link>
                                        <div className="description-box">1.3k Followers</div> 
                                    </li>
                            
                                    <li className="follow-button">
                                        <button>Follow</button>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="idea-show-info-container">
                            <div id="profile-photo">
                                <Link to="#"><img src="https://curated-seeds.s3.amazonaws.com/default_profile_pic.png" /></Link>
                            </div>
                            <div className="idea-show-text">
                                <ul className ="idea-user-info">
                                    <li id="user-info">
                                               <Link to={`/${this.props.idea.curator.username}`}>{usernameDisplay}</Link> saved to <Link to={`/collections/${this.props.idea.original_collection.id}`}>{this.props.idea.original_collection.title}</Link>
                                    </li>
                                    <li className="num-resaves">
                                        <i className="fas fa-asterisk"></i>
                                        <p className="num">{Math.floor(Math.random() * 100) + 1}</p>
                                    </li>
                                </ul>
                                <div className="description-box">{this.props.idea.description}</div>
                            </div>              
                        </div>

                    </div>
                </div>
             </div>
        </div>
    </>
    )
}
   
    

}

 

export default IdeaShow;