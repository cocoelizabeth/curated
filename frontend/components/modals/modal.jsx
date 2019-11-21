import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import IdeaShowContainer from './idea/idea_show_container';
import CreateCollectionFormContainer from '../collections/create_collection_form_container';


function Modal({ modal, closeModal }) {
   // toggle scrolling off an on when modal is open
   
    const body = document.getElementsByTagName("BODY")[0]


    if (!modal) {
        // allow scrolling
        body.style.overflow = "visible";
        return null;
    } else {
        // dont allow scrolling when modal is open
        body.style.overflow="hidden";
    }

    let component;
    switch (modal.modal) {
        // case "show-idea":
        //     component = <IdeaShowContainer idea={modal.idea} />
        //     break;
        case "createCollection":
            component = <CreateCollectionFormContainer />;
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

// import React from 'react';
// import { closeModal } from '../actions/modal_actions';
// import { connect } from 'react-redux';
// import {ReactModal} from 'react-modal';

// const mapStateToProps = (state) => {
//     return {
//         modal: state.ui.modal
//     };
// };

// class ModalContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalIsOpen: props.modalProps.open
//         };
//         this.closeModal = this.closeModal.bind(this);
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.modalProps.open !=== this.props.modalProps.open) {
//             this.setState({
//                 modalIsOpen: nextProps.modalProps.open
//             })
//         }
//     }

//     closeModal() {
//         this.props.closeModal()
//     }

//     render() {
//         if (!this.props.modalType) {
//             return null
//         }

//         return (
//             <div className="modal-background"
//         )
//     }

// }