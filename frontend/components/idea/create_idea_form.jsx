import React from 'react';
import { withRouter, Link, Switch }  from  'react-router-dom';
import SelectCollection from './select_collection';

class CreateIdeaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idea_id: "",
            description: "",
            collection_id: "",
            source_url: "",
            optionText: "Select",
            collectionScroll: false,
            chooseFile: false,
            title: "",
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
        // this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCollections(this.props.currentUser.id);
    }

    handleCollection(collection) {
        this.setState({collectionId: collection.id, optionText: collection.title});
        this.hideCollectionScroll();
    }

    displayCollectionScroll() {
        if (this.state.collectionScroll)  {
            const collections = this.props.collections.map((collection, i) => {
                return (
                    <SelectCollection
                        onSelectCollection={this.handleCollection}
                        collection = {collection}
                        key = {i}
                        text='Select'
                    />
                )
            });
            
            return (
                <div className='collection-dropdown-container'>
                    {collections}
                </div>
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

    hideChooseFile(e) {
        this.setState({ chooseFile: false})
    }

    showChooseFile(e) {
        this.setStaet({ chooseFile: true});
    }

    handleSubmit(e) {
        if (this.state.photoType === 'upload') {
            e.preventDefault();
            const ideaInfo = {
                description: this.state.description,
                // original_collection: this.state.collectionId,
                collection_id: this.state.collectionId,
                curator: this.state.currentUser,
                // source_url: this.state.source_url,
                title: this.state.title,
                //  source_url: this.state.photoFile
                // photoFile: this.state.photoFile,
                // photoUrl: this.state.photoUrl,
                // photoType: this.state.photoType,

            }
            this.props.createIdea(ideaInfo)
        }
    }

    previewImage() {
        if (this.state.photoUrl) {
            return <div className="preview-image">
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
        return (
            <div className="dropdown-modal">
                {this.displayCollectionScroll()}
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
                   
                    <div className="create-idea-form-elements">


                        <div className="create-idea-left">
                            <div id="upload-image-form">
                                {this.previewImage()}
                                <input
                                    id="media-upload-input dot-border"
                                    type="file"
                                    onChange={this.handleUploadFile}
                                    accept="image/jpeg,image/png">
                                </input>
                            </div>
                            <div className="upload-image-container">
                                  
                                            {/* <div className="upload-section">
                                                <div className="upload-arrow">
                                                    upload arrow
                                                </div>
                                            </div> */}
                                    
                            </div>
                        </div>


                        <div className="create-idea-right">
                            <div id="idea-title-form">
                                <input id=""
                                    type="textarea" 
                                    className="text-area-bold" 
                                    onChange={this.update('title')}
                                    value={this.state.title}
                                    placeholder="Add your title" 
                                    rows="1">

                                </input>
                            </div>

                            <div className="create-form-user-profile-container">
                                <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="form-user-profile-photo"></img>

                                <ul className="create-form-user-profile-text" >
                                    <li className="create-form-header-username"><h4>{this.props.currentUser.username}</h4></li>
                                    <li id="create-form-following-stats">
                                        <Link to="#">0 followers</Link>
                                    </li>
                                </ul>
                            </div>

                            <div id="idea-description-form">
                                <input id=""
                                    type="textarea"
                                    onChange={this.update('description')}
                                    value={this.state.description}
                                    className="text-area-large"
                                    placeholder="Tell everyone what your idea is about"
                                    rows="1">
                                </input>
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
                            </div>
                        </div>


                    </div>


            </div>

         </div>                                  
                
        </div>

        )
            
    }
}


export default CreateIdeaForm;