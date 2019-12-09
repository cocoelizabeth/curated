import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
// import { TextInput } from '../global/form';

class EditIdeaForm extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            collection: {
                title: this.props.collection.title || '',
                description: this.props.collection.description,
                id: this.props.collection.id,
            },
            // is_secret: false, - add later
            errors: null,
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayDeleteButton = this.displayDeleteButton.bind(this);
        this.displayActionButton = this.displayActionButton.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

    }

    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();

    }

    handleDelete(e) {
        // come back to this
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.callback) {
            this.props.callback(this.state.collection);
        }
        this.props.action(this.state.collection)
            .then(this.props.closeModal());
    }

    update(field) {
        return (e) => {
            this.setState({
                collection: { ...this.state.collection, [field]: e.currentTarget.value }
            });
        };
    }

    // Show delete button if the user is editing their own board
    displayDeleteButton() {
        if (this.props.formType === "editCollection") {
            return (
                <button
                    className="form-button grey-button"
                    onClick={this.handleDelete}>
                    Delete
                </button>
            )
        } else {
            return (
                <button
                    className="form-button grey-button"
                    style={{ display: "none" }}
                    Delete>
                </button>

            )
        }
    }


    renderErrors() {
        // console.log("You must give your collection a title");
    }

    // Enable the create/save button if the user has entered  a title
    displayActionButton() {
        if (this.state.collection.title === "") {
            return (
                <button

                    className="form-button red-button"
                    type="button"
                    disabled
                    onClick={this.renderErrors}
                >
                    {this.props.buttonText}
                </button>
            )
        } else {
            return (
                <button
                    className="form-button red-button"
                    type="submit"
                    onClick={this.handleSubmit}
                >
                    {this.props.buttonText}
                </button>
            )
        }
    }


    render() {
        return (
            <>
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.header}</h5>
                    <button className="modal-close-button" onClick={this.handleCancel}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="collection-title">
                    <p>Title</p>
                    <input
                        type="title"
                        name="title"
                        placeholder={this.props.placeholderText}
                        value={this.state.collection.title}
                        onChange={this.update('title')}
                    >
                    </input>
                </div>
                <div className="collection-form-buttons">
                    {/* comment this  back in and move delete button to displayDeleteButton function */}
                    {this.displayDeleteButton()}
                    {/* <button
                        className="form-button grey-button"
                        onClick={this.handleDelete}>
                        Delete
                    </button> */}

                    <div className="collection-form-buttons-right">
                        <button
                            className="form-button grey-button"
                            onClick={this.handleCancel}>
                            Cancel
                        </button>
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

export default EditIdeaForm;