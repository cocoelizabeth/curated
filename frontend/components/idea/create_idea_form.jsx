import React from 'react';
import { withRouter, Link, Switch }  from  'react-router-dom';


class CreateIdeaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idea: {idea_id: '', description: '', collection_id: ''}

        };
    }

    render() {
        const { pin } = this.state;

        return (
            <>
            <div className="grey-background">
                <div className="form-container">
                    <div className="create-idea-nav">
                        <ul className="create-idea-nav-right">
                            <li className="create-idea-collection-dropdown-button">
                                <h4 className="create-idea-dropdown-collection-name">Select</h4>
                                <i className="fas fa-chevron-down"></i>
                            </li>
                            <li className="idea-save-button">Save</li>
                        </ul>
                        </div>
                        <div className="create-idea-form-elements">
                            <div className="create-idea-left">
                                <div className="upload-image-container">
                                    {/* <input id="media-upload-input dot-border" type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"> */}
                                        <div className="upload-section">
                                            <div className="upload-arrow">
                                                upload arrow
                                            </div>
                                        </div>

                                    {/* </input> */}
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