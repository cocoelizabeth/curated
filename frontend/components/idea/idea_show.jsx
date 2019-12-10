import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav_container';
import SelectCollection from './select_collection';

class IdeaShow extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            collectionScroll: false,
            collection_id: null,
            user_id: this.props.currentUser,
            saveButton: true,
        };

        // collection dropdown logic
        this.showCollectionScroll = this.showCollectionScroll.bind(this);
        this.hideCollectionScroll = this.hideCollectionScroll.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.hideSaveButton = this.hideSaveButton.bind(this);
        this.showSaveButton = this.showSaveButton.bind(this);
        this.outsideElementClick = this.outsideElementClick.bind(this);
        this.handleCollection = this.handleCollection.bind(this);
        this.handleNewCollection = this.handleNewCollection.bind(this);
        this.editIdea = this.editIdea.bind(this)

        // submit logic
        this.handleSubmit = this.handleSubmit.bind(this);
    }

// LIFECYCLE METHODS
    // fetch the idea, all of the user's collections to display in dropdown for re-saving the idea,
    componentDidMount() {
        this.props.fetchIdea(this.props.match.params.ideaId);
        this.props.fetchAllCollections(this.props.currentUser);
        this.setState({ optionText: this.props.optionText });
    }

// COLLECTION DROPDOWN LOGIC
    showCollectionScroll(e) {
        this.setState({collectionScroll: true});
        this.hideSaveButton();
        this.outsideElementClick('.dropdown-visible-collections', this.toggleDropdown);
    }

    hideCollectionScroll(e) {
        this.setState({ collectionScroll: false});
        this.showSaveButton();
    }

    toggleDropdown(e) {
        this.state.collectionScroll ? this.hideCollectionScroll() : this.showCollectionScroll();
    }

    // logic for hiding the save button and restyling dropdown when collection dropdown is open
    hideSaveButton() {
        const saveButton = document.querySelector(".idea-save-button");
        const dropdown = document.querySelector(".collection-dropdown-button");
        dropdown.style.borderRadius = "12px";
        saveButton.style.display = "none";  
    }  

    // logic for rendering the save button when dropdown is closed
    showSaveButton() {
        const saveButton = document.querySelector(".idea-save-button");
        saveButton.style.display = "flex";
    }

    // hide dropdown when user clicks away from it
    outsideElementClick(ele, callback) {
        document.addEventListener("click", (e) => {
            const dropdown = document.querySelector(ele);
            const dropdownButton = document.querySelector(".collection-dropdown-button");
            if (!dropdown) {
                return;
            }
            if (dropdown != (e.target) && (dropdownButton != (e.target)) && (dropdown.contains(e.target) === false)) {
                callback();
            } else {
                return;
            }
        });
    }

    // put selected collection in the state, change dropdown text to collection title, hide dropdown
    handleCollection(collection) {
        this.setState({collectionId: collection.id, optionText:collection.title});
        this.hideCollectionScroll();
    }

    handleSubmit(e) {
        e.preventDefault();
        let prevState = Object.assign({}, this.state);
        this.setState({ savedCollection: `${prevState.collectionId}` });
        this.setState ({ collectionTitle:`${prevState.optionText}` });
        const formData = new FormData();
        formData.append('idea[collection_ids]', [this.state.collectionId]);
        this.props.createIdeaJoin(this.props.idea, this.state.collectionId).then((res) => {
            this.props.openModal('ideaSavedModal', null, this.prevState.savedCollection, this.prevState.collectionTitle, res.payload.idea);
        });

    }


    handleNewCollection() {
        this.props.openModal('createCollection', this.handleCollection, null, null, null);
        // .then(handleCollection())
    }
    
 // CHANGE THIS TO CONDITIONALLY RENDER 2 DIFFERENT DROP DOWNS
    handleSave(e) {
        
//         let prevState = Object.assign({}, this.state);
//         const ideaCollections = this.props.idea.collections;
//         const userCollections = Object.values(this.props.collections);
//         for (let i=0; i<userCollections.length; i++) {
//                 if (ideaCollections.includes(userCollections[i].id)) {
//                     // change the text
//                     this.setState({ optionText: `Saved to ${userCollections[i].title}` });

//                     // logic for hiding the save button when open
//                     const saveButton = document.querySelector(".idea-save-button");
//                     
//                     const dropdownIcon = document.querySelector("#dropdown-icon");

//                     const dropdown = document.querySelector(".collection-dropdown-button");
//                     const saveWidth = saveButton.clientWidth;
//                     const dropdownWidth = dropdown.clientWidth;
//                     const newWidth = (saveWidth + dropdownWidth - 28).toString() + "px";
//                     saveButton.style.display = "none";
//                     dropdownIcon.className = "fas fa-pencil-alt";
//                     // dropdown.style.width = newWidth;
//                     dropdown.style.borderRadius = "8px";
//                 }
//             }
      
//         // let prevState = Object.assign({}, this.state);
//         // this.setState({ optionText: `Saved to ${prevState.optionText}`});
    }

    editIdea (){
        this.props.openModal("editIdea", null, null, null);
    }


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
                <div className="dropdown-visible-collections">
                    <ul className="dropdown-scroll">
                        {displayCollectionScrollLis}
                    </ul>
                    <div className="create-collection-dropdown-button" onClick={this.handleNewCollection}>
                        <div className="collection-thumbnail-text-container">
                            <div className="create-collection-dropdown-icon-container"><i className="fas fa-plus-circle"></i></div>
                            <div className="create-collection-dropdown-text-container">Create collection</div>
                        </div>
                    </div>
                </div>
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
             <li className="idea-show-nav-left">
                    <i className="fas fa-pencil-alt"
                        onClick={this.editIdea}>
                    </i>
            </li>
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
           
            
               <div className="grey-background-child">
                 
                <div className="idea-show-container" >
                
                    <span className="idea-show-nav">
                       
                        {editButton}
                    

                        <ul className="idea-show-nav-right">
                            <li className="collection-dropdown-button" onClick={this.toggleDropdown}>
                                <div className="dropdown-collection-name">{this.state.optionText}</div>
                                <i id ="dropdown-icon" className="fas fa-chevron-down"></i>
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
                                               <Link to={`/users/${this.props.idea.curator.id}`}>{usernameDisplay}</Link> saved to <Link to={`/collections/${this.props.idea.original_collection.id}`}>{this.props.idea.original_collection.title}</Link>
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