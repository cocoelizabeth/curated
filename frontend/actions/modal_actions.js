export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

// comment  back  in - works
export const openModal = (modal, callback, collection) => {
    debugger
    return ({
        type: OPEN_MODAL,
        modal,
        callback,
        collection
    });
}


export const closeModal = () => ({
    type: CLOSE_MODAL,
});


// comment out
// export const openModal = (payload) => {
//     return {
//         type: OPEN_MODAL,
//         payload
//     }
// }