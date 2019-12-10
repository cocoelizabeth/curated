import React from 'react';

class CollectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            collection: {
                title: this.props.collection.title || '',
                description: this.props.collection.description,
                id: this.props.collection.id,
                // add topics here later
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
        this.reverseButtons = this.reverseButtons.bind(this);
        this.descriptionField = this.descriptionField.bind(this);
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    componentDidMount(e) {
        this.reverseButtons();

    }

   handleDelete(e) {
    //    this.props.openModal('createCollection', null, this.props.collection.id, this.props.collection.title, null);

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
            )} else {
                return (
                <button
                    className="form-button grey-button"
                    style={{display: "none"}}
                    Delete>
                </button>
                )
            }
    }

    // reverse order of buttons when edit form
    reverseButtons() {
        if (this.props.formType === "editCollection") {
            document.querySelector('.collection-form-buttons').style.flexDirection = "row";
        }
    }

    descriptionField() {
        if (this.props.formType === "editCollection") {
            return (
                <div className="collection-description">
                    <p>{this.props.textArea.name}</p>
                    <textarea
                        // type="title"
                        rows = "3"
                        name="description"
                        placeholder={this.props.textArea.placeholderText}
                        value={this.state.collection.description}
                        onChange={this.update('description')}
                    >
                    </textarea>
                </div>
            )
        }
    }
    

    renderErrors() {
        // console.log("You must give your collection a title");
    }

    // Enable the create/save button if the user has entered  a title
    displayActionButton() {
        if (this.state.collection.title === "" ) {
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
                {this.descriptionField()}
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

export default CollectionForm;