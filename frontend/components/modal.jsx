// import React from 'react';
// import { closeModal } from '../actions/modal_actions';
// import { connect } from 'connect';
// // are these the correct file paths?? 
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

// function Modal({ modal }) {
//     if (!modal) {
//         return null;
//     }

//     let component;
//     switch (modal) {
//         case 'login':
//             component = <LoginFormContainer />;
//             break;
//         case 'signup':
//             component = <SignupFormContainer />;
//             break;
//         default:
//             return null;
//     }
//     return (
//         <div className="modal-background">
//             <div className="modal-child" onClick={e => e,stopPropagation()}>
//             { component }
//         </div>
//     );
// }

// export const mapStateToProps = ({ state }) => {
//     return {
//        modal: state.ui.modal

//     };
// };


// {/* const mapStateToProps = state => ({
//         modal: state.ui.modal
//     }); */}

// const mapDispatchToProps = dispatch => {
//     return {
//         closeModal: () => dispatch(closeModal())
//     };
// };

//     export default connect(mapStateToProps, mapDispatchToProps)(Modal);