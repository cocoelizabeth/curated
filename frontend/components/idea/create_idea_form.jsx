import React from 'react';
import { withRouter, Link, Switch } from 'react-router-dom';
import SelectCollection from './select_collection';
import NavContainer from '../nav_container';


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
            photoFile: null,
            photoUrl: null,
            photoType: null,
            error: false,
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

        // user input / file upload / submit logic
        this.update = this.update.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.hideUploadBackground = this.hideUploadBackground.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


// LIFECYCLE METHODS
    // fetch all of current users collections (to display in dropdown)
    componentDidMount() {
        this.props.fetchAllCollections(this.props.currentUser.id);
    }

// COLLECTION DROPDOWN LOGIC
    showCollectionScroll(e) {
        this.setState({ collectionScroll: true });
        this.hideSaveButton();
        this.outsideElementClick('.dropdown-visible-collections', this.toggleDropdown);
    }

    hideCollectionScroll(e) {
        this.setState({ collectionScroll: false });
        this.showSaveButton();
        // logic for adding the save button back when closed
    }

    toggleDropdown(e) {
        this.state.collectionScroll ? this.hideCollectionScroll() : this.showCollectionScroll();
    }


    // logic for hiding the save button and restyling dropdown when collection dropdown is open
    hideSaveButton() {
        const saveButton = document.querySelector(".idea-save-button");
        const dropdown = document.querySelector(".create-idea-collection-dropdown-button");
        const saveWidth = saveButton.clientWidth;
        const dropdownWidth = dropdown.clientWidth;
        const newWidth = (saveWidth + dropdownWidth - 28).toString() + "px";
        saveButton.style.display = "none";
        dropdown.style.width = newWidth;
        dropdown.style.borderRadius = "8px";
    }

    // logic for rendering the save button when dropdown is closed
    showSaveButton() {
        const dropdown = document.querySelector(".create-idea-collection-dropdown-button");
        const dropdownWidth = dropdown.clientWidth;
        const saveButton = document.querySelector(".idea-save-button");
        saveButton.style.display = "flex";
        const saveWidth = saveButton.clientWidth;
        const newWidth = (dropdownWidth - saveWidth - 28).toString() + "px";
        dropdown.style.width = newWidth;
        dropdown.style.borderTopRightRadius = "0px";
        dropdown.style.borderBottomRightRadius = "0px";
    }

    // hide dropdown when user clicks away from it
    outsideElementClick(ele, callback) {
        document.addEventListener("click", (e) => {
            const dropdown = document.querySelector(ele);
            const dropdownButton = document.querySelector(".create-idea-collection-dropdown-button")
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
        this.setState({ collectionId: collection.id, optionText: collection.title });
        this.hideCollectionScroll();
    }

// USER INPUT
    // update user input on form
    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }
    // logic for handling images uploaded by user
    handleUploadFile(e) {

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {

            const image = new Image();
            // resize image
            image.onload = () => {
                const displayHeight = (`${Math.round(image.height * (image.height / image.width))}`);
                this.setState({ displayHeight: displayHeight });
            };
            image.src = fileReader.result;

            this.hideUploadBackground();
            this.setState({
                photoFile: file,
                photoUrl: fileReader.result,
                photoType: 'upload'
            });
        };

        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            if (file.size < 2000000) {
                fileReader.readAsDataURL(file);
                this.setState({ photoError: null });
            } else {
                this.setState({ photoError: "Please upload a .jpg image less than 2MB" });
            }
        }
    }

    // hide background and dots once image has been uploaded
    hideUploadBackground(e) {
        const background = document.querySelector(".upload-image-container") || document.querySelector(".upload-image-container-error");
        const dotBorder = document.querySelector(".upload-section");
        background.style.boxShadow = "none";
        background.style.backgroundColor = "transparent";
        dotBorder.style.display = "none";
    }

    previewImage() {
        if (this.state.photoUrl) {
            return (
                <div className="idea-image-container">
                    <img src={this.state.photoUrl}></img>
                </div>
            )
        }
    }


    // if a photo is uploaded, collect all form data and save as a new Idea, otherwise: render red error box
    handleSubmit(e) {

        if (this.state.photoType === 'upload') {
            e.preventDefault();
            this.setState({ error: false });
            const formData = new FormData();
            formData.append('idea[title]', this.state.title);
            formData.append('idea[description]', this.state.description);
            formData.append('idea[source_url]', this.state.source_url);
            formData.append('idea[collection_ids]', [this.state.collectionId]);
            formData.append('idea[photo]', this.state.photoFile);
            this.props.createIdea(formData).then((res) => {
                this.props.history.push(`/ideas/${res.payload.idea.id}`);
            });
        } else {
            this.setState({ error: true });
        }
    }

    
    handleNewCollection() {
        this.props.openModal('createCollection', this.handleCollection, null, null, null)
        .then(handleCollection(this.props.collections[this.props.collections.length-1]))
    }



    render() {

        const { idea } = this.state;

        // logic for mapping users collections to dropdown list
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
        const displayCollectionScroll = this.state.collectionScroll ? (
            
            // <ul className='dropdown-visible-collections'>
                
            //     {displayCollectionScrollLis}
            // </ul>

            <div className="dropdown-visible-collections">
                <ul className="dropdown-scroll">
                    {displayCollectionScrollLis}
                </ul>
                <div className="create-collection-dropdown-button" onClick={this.handleNewCollection}>
                    <div className="collection-thumbnail-text-container">
                        <div className="create-collection-dropdown-icon-container"><i class="fas fa-plus-circle"></i></div>
                        <div className="create-collection-dropdown-text-container">Create collection</div>
                    </div>
                </div>
            </div>
            

        ) : null;

        // toggles between regular form and red error message form
        const uploadImageForm =
            this.state.error ? (
                <div className="upload-image-container-error">
                    <div className="upload-section">
                        <div className="upload-error-content">
                            <i className="fas fa-exclamation-circle"></i>
                            <div className="error-instructions">An image is required to create an Idea.</div>
                        </div>
                    </div>
                </div>
            ) : (
                    <div className="upload-image-container">
                        <div className="upload-section">
                            <div className="upload-arrow-content">
                                <i className="fas fa-arrow-circle-up"></i>
                                <div className="instructions">Drag and drop or click to upload</div>
                            </div>
                        </div>
                    </div>
                )


        return (
            <>
                <NavContainer />

                <div className="grey-background">

                    <div className="form-container">

                        <div className="create-idea-nav">
                            <ul className="create-idea-nav-right">
                                <li className="create-idea-collection-dropdown-button" onClick={this.toggleDropdown}>
                                    {/* <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}> */}
                                    <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
                                    <i className="fas fa-chevron-down"></i>
                                </li>
                                <li id="idea-save-button" className="idea-save-button" onClick={this.handleSubmit}>Save</li>
                            </ul>

                        </div>
                        <div className="dropdown-modal">
                            {/* <div className="dropdown-visible-collections">
                                {displayCollectionScroll}
                           
                            </div> */}
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
                                {uploadImageForm}

                            </div>


                            <div className="create-idea-right">
                                <div id="idea-title-form">
                                    <input
                                        type="textarea"
                                        className="text-area-bold"
                                        onChange={this.update('title')}
                                        value={this.state.title}
                                        placeholder="Add your title"
                                        rows="1" />
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
