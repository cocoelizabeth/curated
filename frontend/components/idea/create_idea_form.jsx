// import React from 'react';
// import { withRouter, Link, Switch }  from  'react-router-dom';
// import SelectCollection from './select_collection';

// class CreateIdeaForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.state = ({
//             idea: {title: "", photoFile: null}
//         });
//     }

//     handleInput(e) {
//         title = this.state.idea.title;
//         debugger
//         this.setState({title: e.currentTarget.value});
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         debugger
//         formData.append('idea[title]', this.state.idea.title);
//         formData.append('idea[photo]', this.state.idea.photoFile);
        
//         this.props.createIdea(formData);
//     }

//     handleFile(e) {
//         debugger
//         this.setState({photoFile: e.currentTarget.files[0]});
//     }

//    render() {
//        console.log(this.state)
//        return (
//          <form>
//              {/* onSubmit={this.handleSubmit.bind(this)}> */}
//              <label htmlFor="idea-title">Title of Idea</label> 
//              <input type = "text"
//                 id = "idea-title"
//                 value = {this.state.idea.title}
//                 onChange={this.handleInput.bind(this)}/> 
//             <input type="file"
//                 onChange={this.handleFile.bind(this)}/>

//             <button onClick={this.handleSubmit.bind(this)}>Upload a new idea</button>
//         </form>
//        )
//     }


// }

// export default CreateIdeaForm;




//// OLD CODE

import React from 'react';
import { withRouter, Link, Switch }  from  'react-router-dom';
import SelectCollection from './select_collection';
import NavContainer from '../nav_container';
import { throws } from 'assert';

class CreateIdeaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            source_url: "",
            collection_id: null,
            user_id: this.props.currentUser.id,
            optionText: "Select",
            collectionScroll: false,
            chooseFile: false,
            photoFile: null,
            photoUrl: null,
            photoType: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleExternalFile - this.handleExternalFile.bind(this);
        this.showCollectionScroll = this.showCollectionScroll.bind(this);
        this.hideCollectionScroll = this.hideCollectionScroll.bind(this);
        this.updateUrl = this.updateUrl.bind(this);
        this.handleCollection = this.handleCollection.bind(this);
        this.update = this.update.bind(this);
        this.hideUploadBackground= this.hideUploadBackground.bind(this);
        
        // this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCollections(this.props.currentUser.id);
    }

    handleCollection(collection) {
        
        this.setState({collectionId: collection.id, optionText: collection.title});
        this.hideCollectionScroll();
    }

// COME  BACK TO THIS
    changeSelectField() {
        
        if (this.state.collectionScroll) {
            return (
                <ul className="create-idea-nav-right">
                    <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}>
                        <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
                        <i className="fas fa-chevron-down"></i>
                    </li>
                    <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
                </ul>

            )
        }else {
            
            return (
                <ul className="create-idea-nav-right">
                    <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}>
                        <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
                        <i className="fas fa-chevron-down"></i>
                    </li>
                    <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
                </ul>
            )
        }
    }

    updateUrl() {
        return(e) => {
            this.setState({ photoUrl: e.target.value})
        }
    }

    showCollectionScroll(e) {
        this.setState({ collectionScroll: true})
    }


    hideCollectionScroll(e) { 
        this.setState({ collectionScroll: false});
    }

    hideUploadBackground(e) {
        
        const background = document.querySelector(".upload-image-container")
        
        const dotBorder = document.querySelector(".upload-section")

        background.style.backgroundColor="transparent";
        dotBorder.style.display="none";
    }

    showUploadBackground(e) {
        const background = document.querySelector("#upload-image-form")
        background.style.display = "block";
    }

    hideChooseFile(e) {
        this.setState({ chooseFile: false})
    }

    showChooseFile(e) {
        this.setState({ chooseFile: true});
    }

    handleSubmit(e) {
        
        if (this.state.photoType === 'upload') {
            e.preventDefault();
            const formData = new FormData();
            formData.append('idea[title]', this.state.title);
            formData.append('idea[description]', this.state.description);
            formData.append('idea[source_url]', this.state.source_url);
            formData.append('idea[collection_ids]',  [this.state.collectionId]);
            formData.append('idea[photo]', this.state.photoFile);
            this.props.createIdea(formData).then((res) => {
                
                this.props.history.push(`/ideas/${res.payload.idea.id}`)
            })
        }
    }

    previewImage() {
        if (this.state.photoUrl) {
            return <div className="idea-image-container">
                <img src={this.state.photoUrl}></img>
            </div>
        }
    }

    handleUploadFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            
            const image = new Image();
            
            image.onload = () => {
                const displayHeight =  (`${Math.round(image.height * (image.height / image.width))}`)
                this.setState({ displayHeight: displayHeight});
                
            };
            image.src = fileReader.result;
            
            this.hideUploadBackground();
            this.setState({
                photoFile: file,
                photoUrl: fileReader.result,
                photoType: 'upload'
            });
        };
    
        if (file && file.type === 'image/jpeg') {
            if (file.size < 2000000) {
                fileReader.readAsDataURL(file);
                this.setState({ photoError: null });
            } else {
                this.setState({ photoError: "Please upload a .jpg image less than 2MB"});
            }
        }
    }

    handleExternalFile(e) {
        const image = new Image();
        image.onload = () => {
            const displayHeight = (`Math.round(image.height * (image.height / image.width))`);
            this.setState({
                display_height: displayHeight,
                chooseFile: false,
                photoType: 'external'
            });
        };
        image.src = this.state.photoUrl;
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

 

    render() {
        
        const { idea } = this.state;
        const displayCollectionScrollLis = 
            this.state.collectionScroll ? 
                this.props.collections.map((collection, i) => (
                    
                    <SelectCollection
                        onSelectCollection={this.handleCollection}
                        collection={collection}
                        key={i}
                        text='Save'
                        fetchIdea={this.props.fetchIdea}
                        handleSubmit={this.handleSubmit}
                    />

                )) : null;
        const displayCollectionScroll = this.state.collectionScroll ?  (
                <ul className='dropdown-visible-collections'>
                    {displayCollectionScrollLis}
                </ul>
            ) : null;

        return (
        <>
            <NavContainer />

            {/* change */}
            {/* <div className="dropdown-modal">
                {this.displayCollectionScroll()}
            </div>
                 */}
            <div className="grey-background">
                
                   
               
                <div className="form-container">

                    <div className="create-idea-nav">
                        <ul className="create-idea-nav-right">
                            <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}>
                                <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
                                <i className="fas fa-chevron-down"></i>
                            </li>
                            <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
                        </ul>

                    </div>
                     <div className="dropdown-modal">
                          {displayCollectionScroll}
                        </div>
                   
                    <div className="create-idea-form-elements">


                        <div className="create-idea-left">
                            <div id="upload-image-form">
                                {this.previewImage()}
                                <input
                                    id="media-upload-input"
                                    type="file"
                                    onChange={this.handleUploadFile}
                                    accept="image/jpeg,image/png">
                                </input>
                            </div>
                            <div className="upload-image-container">
                                  
                                            <div className="upload-section">
                                                <div className="upload-arrow">
                                            <i className="fas fa-arrow-circle-up"></i>
                                            <div className="instructions">Drag and drop or click to upload</div>
                                                </div>
                                            </div>
                                    
                            </div>
                        </div>


                        <div className="create-idea-right">
                            <div id="idea-title-form">
                                <input
                                    type="textarea" 
                                    className="text-area-bold" 
                                    onChange={this.update('title')}
                                    value={this.state.title}
                                    placeholder="Add your title" 
                                    rows="1"/>
                                    <div className="line"></div>
                            
                            </div>

                            <div className="create-form-user-profile-container">
                                <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="form-user-profile-photo"></img>

                                <ul className="create-form-user-profile-text" >
                                    <li className="create-form-header-username">{this.props.currentUser.username}</li>
                                </ul>
                            </div>
                        <div className="description-link-container">
                            <div id="idea-description-form">
                                <input id=""
                                    type="textarea"
                                    onChange={this.update('description')}
                                    value={this.state.description}
                                    className="text-area-large"
                                    placeholder="Tell everyone what your idea is about"
                                    rows="1">
                                </input>
                                    <div className="line"></div>
                            </div>
                              
                            <div id="idea-link-form">
                                <input id=""
                                    type="url"
                                    className="text-area-large"
                                    value={this.state.source_url}
                                    onChange={this.update('source_url')}
                                    placeholder="Add destination link"
                                    rows="1">
                                </input>
                                        <div className="line"></div>
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


export default CreateIdeaForm;