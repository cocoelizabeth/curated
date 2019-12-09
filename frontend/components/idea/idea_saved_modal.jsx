import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
// import { TextInput } from '../global/form';

class IdeaSavedModal extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            errors: null,
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/collections/${this.props.collectionId}`)
        this.props.closeModal();
    }

    
    // Enable the create/save button if the user has entered  a title
    displayActionButton() {
            return (
            // <Link to={`/collections/${this.props.collectionId}`}>
                <button
                    className="form-button red-button"
                    type="submit"
                    onClick={this.handleSubmit}
                >
                    {this.props.buttonText}
                </button>
            // </Link>
            )
        }
    


    render() {
        return (
            <>
                <div className="modal-header">
                    <button className="modal-close-button" onClick={this.handleCancel}>
                        <i className="fas fa-times"></i>
                    </button>
                    <h5 className="modal-title">Idea saved to {this.props.collectionTitle}</h5>
 
                </div>

                <div className="save-idea-show-image-container">
                    <img className="save-idea-show-image" src={this.props.photoUrl}></img>
                </div>

                <div className="collection-form-buttons">
        
                    <div className="collection-form-buttons-right">
                        {this.displayActionButton()}
                        {/* <button 
                            className="form-button red-button"
                            type="submit"
                            onClick={this.handleSubmit}
                            >
                            {this.props.buttonText}
                        </button> */}
                    </div>
                </div>
            </>
        )
    }


}

export default IdeaSavedModal;

