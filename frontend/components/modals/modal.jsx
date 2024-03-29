import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import IdeaSavedModalContainer from '../idea/idea_saved_modal_container';
import CreateCollectionFormContainer from '../collections/create_collection_form_container';
import EditIdeaFormContainer from '../idea/edit_idea_form_container';
import EditCollectionFormContainer from '../collections/edit_collection_form_container';

function Modal({ modal, closeModal }) {
   // toggle scrolling off an on when modal is open
   
    const body = document.getElementsByTagName("BODY")[0]


    if (!modal || !modal.modal) {
        // allow scrolling
        body.style.overflow = "visible";
        return null;
    } else {
        // dont allow scrolling when modal is open
        body.style.overflow="hidden";
    }

    let component;
    switch (modal.modal) {
        
        case "ideaSavedModal":
            component = <IdeaSavedModalContainer collectionId={modal.collectionId} collectionTitle={modal.collectionTitle}/>
            break;
        case "createCollection":
            component = <CreateCollectionFormContainer 
                callback = {modal.callback}
            />;
            break;
        case "editCollection":
            component = <EditCollectionFormContainer collectionId = {modal.collectionId} collectionTitle={modal.collectionTitle} />
            break;
        case "editIdea":
            component = <EditIdeaFormContainer />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    };
};


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

