import React from 'react';
import { withRouter, Link, Switch } from 'react-router-dom';
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
            // chooseFile: false,
            photoFile: null,
            photoUrl: null,
            photoType: null,
            error: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUploadFile = this.handleUploadFile.bind(this);
        this.handleExternalFile - this.handleExternalFile.bind(this);
        this.showCollectionScroll = this.showCollectionScroll.bind(this);
        this.hideCollectionScroll = this.hideCollectionScroll.bind(this);
        // this.updateUrl = this.updateUrl.bind(this);
        this.handleCollection = this.handleCollection.bind(this);
        this.update = this.update.bind(this);
        this.hideUploadBackground = this.hideUploadBackground.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.outsideElementClick = this.outsideElementClick.bind(this);
        // this.removeOutsideElementHandler = this.removeOutsideElementHandler.bind(this);


        // this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCollections(this.props.currentUser.id);
    }


    // COLLECTION DROPDOWN LOGIC
    



    showCollectionScroll(e) {
        this.setState({ collectionScroll: true });

        
        // logic for hiding the save button when open
        const saveButton = document.querySelector(".idea-save-button");
        const dropDown = document.querySelector(".create-idea-collection-dropdown-button");
        const saveWidth = saveButton.clientWidth;
        const dropDownWidth = dropDown.clientWidth;
        const newWidth = (saveWidth + dropDownWidth - 28).toString() + "px";
        saveButton.style.display = "none";
        dropDown.style.width = newWidth;
        dropDown.style.borderRadius = "8px";
        // while dropdown is open, it is listening for a click outside the dropdown to allow users to close it
        this.outsideElementClick('.dropdown-visible-collections', this.toggleDropdown);

    }

    hideCollectionScroll(e) {
        
        this.setState({ collectionScroll: false });


        // logic for adding the save button back when  closed
        const dropDown = document.querySelector(".create-idea-collection-dropdown-button");
        const dropDownWidth = dropDown.clientWidth;
        const saveButton = document.querySelector(".idea-save-button");
        saveButton.style.display = "flex";
        const saveWidth = saveButton.clientWidth;

        const newWidth = (dropDownWidth - saveWidth - 28).toString() + "px";
        dropDown.style.width = newWidth;
        dropDown.style.borderTopRightRadius = "0px";
        dropDown.style.borderBottomRightRadius = "0px";


    }

    toggleDropdown(e) {
        
        this.state.collectionScroll ? this.hideCollectionScroll() : this.showCollectionScroll();
    }

    // allows users to close dropdown by clicking outside of it


    // outsideElementClick(ele, callback) {
    //     debugger
    //     function isClickedOutside(e) {

    //         const container = document.querySelector(ele);
    //         // if the dropdown is not the target of the click && and it does  not  contain the target of  the click (i.e. the target is not a child of the dropdown)
    //         if (container != (e.target) && (container.contains(e.target) === false)) {
    //             callback();
    //         }
    //     }

    //     $(document).mouseup(isClickedOutside);

    //     // document.unbind("mouseup", isClickedOutside);
    //     return isClickedOutside;

    // }


    outsideElementClick(ele, callback) {
        document.addEventListener("click", (e) => {
            const dropDown = document.querySelector(ele);
            const dropDownButton = document.querySelector(".create-idea-collection-dropdown-button")
            if (!dropDown) {
                
                return;
            } 
            
            if (dropDown != (e.target) && (dropDownButton != (e.target)) && (dropDown.contains(e.target) === false)) {
                    
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



    // 


    previewImage() {
        if (this.state.photoUrl) {
            return <div className="idea-image-container">
                <img src={this.state.photoUrl}></img>
            </div>
        }
    }



    // hide background and dots once image has been uploaded
    hideUploadBackground(e) {
        const background = document.querySelector(".upload-image-container") || document.querySelector(".upload-image-container-error")
        const dotBorder = document.querySelector(".upload-section");
        background.style.boxShadow = "none";
        background.style.backgroundColor = "transparent";
        dotBorder.style.display = "none";
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



    handleUploadFile(e) {

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {

            const image = new Image();

            image.onload = () => {
                const displayHeight = (`${Math.round(image.height * (image.height / image.width))}`)
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

        if (file && file.type === 'image/jpeg') {
            if (file.size < 2000000) {
                fileReader.readAsDataURL(file);
                this.setState({ photoError: null });
            } else {
                this.setState({ photoError: "Please upload a .jpg image less than 2MB" });
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
            <ul className='dropdown-visible-collections'>
                {displayCollectionScrollLis}
            </ul>
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

                {/* change */}
                {/* <div className="dropdown-modal">
                {this.displayCollectionScroll()}
            </div>
                 */}
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
                                {/* <div className="upload-image-container"> 
                                <div className="upload-section">
                                    <div className="upload-arrow-content">
                                <i className="fas fa-arrow-circle-up"></i>
                                <div className="instructions">Drag and drop or click to upload</div>
                                    </div>
                                </div>
                            </div> */}
                                {/* <div className="upload-image-container-error">
                                <div className="upload-section">
                                    <div className="upload-error-content">
                                        <i className="fas fa-exclamation-circle"></i>
                                        <div className="error-instructions">An image is required to create an Idea.</div>
                                    </div>
                                </div>
                            </div> */}

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
// OLD CODE THAT IM NOT USING
    // changeSelectField() {
    //     if (this.state.collectionScroll) {
    //         return (
    //             <ul className="create-idea-nav-right">
    //                 <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}>
    //                     <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
    //                     <i className="fas fa-chevron-down"></i>
    //                 </li>
    //                 <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
    //             </ul>
    //         )
    //     }else {
    //         return (
    //             <ul className="create-idea-nav-right">
    //                 <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}>
    //                     <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
    //                     <i className="fas fa-chevron-down"></i>
    //                 </li>
    //                 <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
    //             </ul>
    //         )
    //     }
    // }
    // updateUrl() {
    //     return(e) => {
    //         this.setState({ photoUrl: e.target.value});
    //     }
    // }
        // showChooseFile(e) {
    //     this.setState({ chooseFile: true });
    // }
    // hideChooseFile(e) {
    //     this.setState({ chooseFile: false });
    // }
    // showUploadBackground(e) {
    //     const background = document.querySelector("#upload-image-form")
    //     background.style.display = "block";
    // }






// import React from 'react';
// import { withRouter, Link, Switch }  from  'react-router-dom';
// import SelectCollection from './select_collection';
// import NavContainer from '../nav_container';
// import { throws } from 'assert';

// class CreateIdeaForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: "",
//             description: "",
//             source_url: "",
//             collection_id: null,
//             user_id: this.props.currentUser.id,
//             optionText: "Select",
//             collectionScroll: false,
//             // chooseFile: false,
//             photoFile: null,
//             photoUrl: null,
//             photoType: null,
//             error: false,
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleUploadFile = this.handleUploadFile.bind(this);
//         this.handleExternalFile - this.handleExternalFile.bind(this);
//         this.showCollectionScroll = this.showCollectionScroll.bind(this);
//         this.hideCollectionScroll = this.hideCollectionScroll.bind(this);
//         // this.updateUrl = this.updateUrl.bind(this);
//         this.handleCollection = this.handleCollection.bind(this);
//         this.update = this.update.bind(this);
//         this.hideUploadBackground= this.hideUploadBackground.bind(this);
//         this.toggleDropdown = this.toggleDropdown.bind(this);

        
//         // this.goBack = this.goBack.bind(this);
//     }

//     componentDidMount() {
//         this.props.fetchAllCollections(this.props.currentUser.id);
//     }


// // COLLECTION DROPDOWN LOGIC


//     showCollectionScroll() {
//         this.setState({ collectionScroll: true });
//         const dropDown = document.querySelector(".create-idea-collection-dropdown-button");
//         const saveButton = document.querySelector(".idea-save-button");
//         const saveWidth = 64;
//         const dropDownWidth = 172;
//         const newWidth = (saveWidth + dropDownWidth).toString() + "px";
//         saveButton.style.display = "none";
//         dropDown.style.width = newWidth;
//         dropDown.style.borderRadius = "8px";

//         // const saveButton = document.querySelector(".idea-save-button");
//         // const dropDown = document.querySelector(".create-idea-collection-dropdown-button");
//         // dyanmically calculate new width based on client width of save button
//         // const saveWidth = saveButton.clientWidth;
//         // const dropDownWidth = dropDown.clientWidth;
//         // 28 because of 14 padding on each side; in the future implement dynamic code for calculating padding
//         // const newWidth = (saveWidth + dropDownWidth - 28).toString() + "px";
//         // saveButton.style.display = displayStyle;
//         // dropDown.style.width = newWidth;
//         // dropDown.style.borderRadius="8px";

//         this.outsideElementClick('.create-idea-nav-right', this.hideCollectionScroll);
//     }

//     hideCollectionScroll() {
    
//         this.setState({ collectionScroll: false });
//         const dropDown = document.querySelector(".create-idea-collection-dropdown-button");
//         const saveButton = document.querySelector(".idea-save-button");
//         saveButton.style.display = "flex";
//         const saveWidth = 64;
//         const dropDownWidth =172;
//         const newWidth = (dropDownWidth - saveWidth).toString() + "px";
//         dropDown.style.width = newWidth;
//         dropDown.style.borderTopRightRadius = "0px";
//         dropDown.style.borderBottomRightRadius = "0px";
//         // const dropDownWidth = dropDown.clientWidth;
//         // const saveWidth = saveButton.clientWidth;
//         // const newWidth = (dropDownWidth - saveWidth - 28).toString() + "px";
//         // dropDown.style.width = newWidth;
//         // dropDown.style.borderTopRightRadius = "0px";
//         // dropDown.style.borderBottomRightRadius = "0px";

//     }

//     toggleDropdown(e) {
//         this.state.collectionScroll ? this.hideCollectionScroll() : this.showCollectionScroll();
//     }

//     // put selected collection in the state, change dropdown text to collection title, hide dropdown
//     handleCollection(collection) {
//         this.setState({collectionId: collection.id, optionText: collection.title});
//         this.hideCollectionScroll();
//     }

//     outsideElementClick(ele, callback) {

//         function isClickedOutside(e){
            
//             const container = document.querySelector(ele);
//             debugger
//             if (container != (e.target) && (container.contains(e.target) === false)) {
//                 callback();
//             }
//         }

//         $(document).mouseup(isClickedOutside);
//         return isClickedOutside;
//     }

// // IMAGE UPLOAD
//     //  updateUrl() {
//     //      debugger
//     //     return(e) => {
//     //         this.setState({ photoUrl: e.target.value});
//     //     }
//     // }

//     previewImage() {
        
//         if (this.state.photoUrl) {
//             return <div className="idea-image-container">
//                 <img src={this.state.photoUrl}></img>
//             </div>
//         }
//     }



//     // hide background and dots once image has been uploaded
//     hideUploadBackground(e) {
//         const background = document.querySelector(".upload-image-container") || document.querySelector(".upload-image-container-error")
//         const dotBorder = document.querySelector(".upload-section");
//         background.style.boxShadow ="none";
//         background.style.backgroundColor="transparent";
//         dotBorder.style.display="none";
//     }

//     // if a photo is uploaded, collect all form data and save as a new Idea, otherwise: render red error box
//     handleSubmit(e) {
        
//         if (this.state.photoType === 'upload') {
//             e.preventDefault();
//             this.setState({ error: false});
//             const formData = new FormData();
//             formData.append('idea[title]', this.state.title);
//             formData.append('idea[description]', this.state.description);
//             formData.append('idea[source_url]', this.state.source_url);
//             formData.append('idea[collection_ids]',  [this.state.collectionId]);
//             formData.append('idea[photo]', this.state.photoFile);
//             this.props.createIdea(formData).then((res) => {
//                 this.props.history.push(`/ideas/${res.payload.idea.id}`);
//             });
//         } else {
//             this.setState({ error: true });
//         }
//     }



//     handleUploadFile(e) {
        
//         const file = e.currentTarget.files[0];
//         const fileReader = new FileReader();
    
//         fileReader.onloadend = () => {
            
//             const image = new Image();
            
//             image.onload = () => {
//                 const displayHeight =  (`${Math.round(image.height * (image.height / image.width))}`)
//                 this.setState({ displayHeight: displayHeight});
                
                
//             };
//             image.src = fileReader.result;
            
            
//             this.hideUploadBackground();
//             this.setState({
//                 photoFile: file,
//                 photoUrl: fileReader.result,
//                 photoType: 'upload'
//             });
//         };
    
//         if (file && file.type === 'image/jpeg') {
//             if (file.size < 2000000) {
//                 fileReader.readAsDataURL(file);
//                 this.setState({ photoError: null });
//             } else {
//                 this.setState({ photoError: "An image is required to create an Idea. Please upload a .jpg image less than 2MB"});
//             }
//         }
//     }

//     handleExternalFile(e) {
//         const image = new Image();
//         image.onload = () => {
//             const displayHeight = (`Math.round(image.height * (image.height / image.width))`);
//             this.setState({
//                 display_height: displayHeight,
//                 chooseFile: false,
//                 photoType: 'external'
//             });
//         };
//         image.src = this.state.photoUrl;
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.target.value
//         });
//     }

 

//     render() {        
        
//         const { idea } = this.state;

//         // logic for mapping users collections to dropdown list
//         const displayCollectionScrollLis = 
//             this.state.collectionScroll ? 
//                 this.props.collections.map((collection, i) => (
                    
//                     <SelectCollection
//                         onSelectCollection={this.handleCollection}
//                         collection={collection}
//                         key={i}
//                         text='Save'
//                         fetchIdea={this.props.fetchIdea}
//                         handleSubmit={this.handleSubmit}
//                     />
//                 )) : null;
//         const displayCollectionScroll = this.state.collectionScroll ?  (
//                 <ul className='dropdown-visible-collections'>
//                     {displayCollectionScrollLis}
//                 </ul>
//             ) : null;

//         // toggles between regular form and red error message form
//         const uploadImageForm =
//             this.state.error ? (
//                 <div className="upload-image-container-error">
//                     <div className="upload-section">
//                         <div className="upload-error-content">
//                             <i className="fas fa-exclamation-circle"></i>
//                             <div className="error-instructions">An image is required to create an Idea. Please upload a .jpg image less than 2MB.</div>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="upload-image-container">
//                     <div className="upload-section">
//                         <div className="upload-arrow-content">
//                             <i className="fas fa-arrow-circle-up"></i>
//                             <div className="instructions">Drag and drop or click to upload</div>
//                         </div>
//                     </div>
//                 </div>
//             )


//         return (
//         <>
//             <NavContainer />

//             {/* change */}
//             {/* <div className="dropdown-modal">
//                 {this.displayCollectionScroll()}
//             </div>
//                  */}
//             <div className="grey-background">
               
//                 <div className="form-container">

//                     <div className="create-idea-nav">
//                         <ul className="create-idea-nav-right">
//                              <li className="create-idea-collection-dropdown-button" onClick={this.toggleDropdown}>
//                             {/* <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}> */}
//                                 <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
//                                 <i className="fas fa-chevron-down"></i>
//                             </li>
//                             <li id="idea-save-button" className="idea-save-button" onClick={this.handleSubmit}>Save</li>
//                         </ul>

//                     </div>
//                      <div className="dropdown-modal">
//                           {displayCollectionScroll}
//                         </div>
                   
//                     <div className="create-idea-form-elements">


//                         <div className="create-idea-left">
//                             <div id="upload-image-form">
//                                 {this.previewImage()}
//                                 <input
//                                     id="media-upload-input"
//                                     type="file"
//                                     onChange={this.handleUploadFile}
//                                     accept="image/jpeg,image/png">
//                                 </input>
//                             </div>
//                             {uploadImageForm}
//                             {/* <div className="upload-image-container"> 
//                                 <div className="upload-section">
//                                     <div className="upload-arrow-content">
//                                 <i className="fas fa-arrow-circle-up"></i>
//                                 <div className="instructions">Drag and drop or click to upload</div>
//                                     </div>
//                                 </div>
//                             </div> */}
//                             {/* <div className="upload-image-container-error">
//                                 <div className="upload-section">
//                                     <div className="upload-error-content">
//                                         <i className="fas fa-exclamation-circle"></i>
//                                         <div className="error-instructions">An image is required to create an Idea.</div>
//                                     </div>
//                                 </div>
//                             </div> */}

//                         </div>


//                         <div className="create-idea-right">
//                             <div id="idea-title-form">
//                                 <input
//                                     type="textarea" 
//                                     className="text-area-bold" 
//                                     onChange={this.update('title')}
//                                     value={this.state.title}
//                                     placeholder="Add your title" 
//                                     rows="1"/>
//                                     <div className="line"></div>
                            
//                             </div>

//                             <div className="create-form-user-profile-container">
//                                 <img src="https://curated-seeds.s3.amazonaws.com/default_280.png" className="form-user-profile-photo"></img>

//                                 <ul className="create-form-user-profile-text" >
//                                     <li className="create-form-header-username">{this.props.currentUser.username}</li>
//                                 </ul>
//                             </div>
//                         <div className="description-link-container">
//                             <div id="idea-description-form">
//                                 <input id=""
//                                     type="textarea"
//                                     onChange={this.update('description')}
//                                     value={this.state.description}
//                                     className="text-area-large"
//                                     placeholder="Tell everyone what your idea is about"
//                                     rows="1">
//                                 </input>
//                                     <div className="line"></div>
//                             </div>
                              
//                             <div id="idea-link-form">
//                                 <input id=""
//                                     type="url"
//                                     className="text-area-large"
//                                     value={this.state.source_url}
//                                     onChange={this.update('source_url')}
//                                     placeholder="Add destination link"
//                                     rows="1">
//                                 </input>
//                                         <div className="line"></div>
//                             </div>
//                         </div>

//                         </div>


//                     </div>


//             </div>

//          </div>                                  
                
        
//     </>

//     )
            
//     }
// }


// export default CreateIdeaForm;




// // OLD CODE THAT IM NOT USING
//     // changeSelectField() {

//     //     if (this.state.collectionScroll) {
//     //         return (
//     //             <ul className="create-idea-nav-right">
//     //                 <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}>
//     //                     <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
//     //                     <i className="fas fa-chevron-down"></i>
//     //                 </li>
//     //                 <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
//     //             </ul>

//     //         )
//     //     }else {

//     //         return (
//     //             <ul className="create-idea-nav-right">
//     //                 <li className="create-idea-collection-dropdown-button" onClick={this.showCollectionScroll}>
//     //                     <h4 className="create-idea-dropdown-collection-name">{this.state.optionText}</h4>
//     //                     <i className="fas fa-chevron-down"></i>
//     //                 </li>
//     //                 <li className="idea-save-button" onClick={this.handleSubmit}>Save</li>
//     //             </ul>
//     //         )
//     //     }
//     // }

   

//         // showChooseFile(e) {
//     //     this.setState({ chooseFile: true });
//     // }

//     // hideChooseFile(e) {
//     //     this.setState({ chooseFile: false });
//     // }

//     // showUploadBackground(e) {
//     //     const background = document.querySelector("#upload-image-form")
//     //     background.style.display = "block";
//     // }


//     // FUTURE THINGS TO DO:

//     // DYNAMIC PADDING CALCULATOR
//         // calculatePadding(documentElement) {
//         // compStyles = window.getComputedStyle(dropDown)
//         // let padding = 0
//         // const paddingLeft = compStyles.getPropertyValue(‘padding - left’);
//         // const paddingRight = compStyles.getPropertyValue(‘padding - right’);

//         // const paddingLeftValue = parseInt(paddingLeft);
//         // const paddingRightValue = parseInt(paddingRight);

//         // Number.isNaN(paddingLeftValue) ? padding += 0 : padding += paddingLeftValue
//         // Number.isNaN(paddingRightValue) ? padding += 0 : padding += paddingRightValue

//         // return padding 

//         // }
