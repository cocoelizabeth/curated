import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
// import { TextInput } from '../global/form';

class IdeaSavedModal extends React.Component {
    constructor(props) {

        super(props);
        debugger
        this.state = {
            idea: {
                // title: this.props.collection.title || '',
                // description: this.props.collection.description,
                // id: this.props.collection.id,
                // add topics here later
            },
            // is_secret: false, - add later
            errors: null,
        };
        this.handleCancel = this.handleCancel.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.displayDeleteButton = this.displayDeleteButton.bind(this);
        // this.displayActionButton = this.displayActionButton.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.closeModal();

    }

    componentDidMount() {

    }

    // handleDelete(e) {
    //     // come back to this
    //     console.log("Delete");
    // }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        if (this.props.callback) {
            this.props.callback(this.state.collection);
        }
        this.props.action(this.state.collection)
            .then(this.props.closeModal());
    }

    // update(field) {
    //     return (e) => {
    //         this.setState({
    //             collection: { ...this.state.collection, [field]: e.currentTarget.value }
    //         });
    //     };
    // }

    // Show delete button if the user is editing their own board
    // displayDeleteButton() {
    //     if (this.props.formType === "editCollection") {
    //         return (
    //             <button
    //                 className="form-button grey-button"
    //                 onClick={this.handleDelete}>
    //                 Delete
    //             </button>
    //         )
    //     } else {
    //         return (
    //             <button
    //                 className="form-button grey-button"
    //                 style={{ display: "none" }}
    //                 Delete>
    //             </button>

    //         )
    //     }
    // }


    // renderErrors() {
    //     console.log("You must give your collection a title");
    // }

    // Enable the create/save button if the user has entered  a title
    displayActionButton() {
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
    


    render() {
        debugger
        return (
            <>
                <div className="modal-header">
                    <button className="modal-close-button" onClick={this.handleCancel}>
                        <i className="fas fa-times"></i>
                    </button>
                    <h5 className="modal-title">Idea saved to {this.props.collection}</h5>
 
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

// username: ownProps.match.params.username,
//     photoUrl: ownProps.photoUrl,
//         formType: 'ideaSavedModal',
//             placeholderText: 'Like "Places to go" or "Recipies to Make"',
//                 header: `Idea Saved to ${ownProps.collection}`,
//                     collection: ownProps.collection,
//                         buttonText: 'See it Now'