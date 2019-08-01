export default CLOSE_MODAL = "CLOSE_MODAL";
export default OPEN_MODAL = "OPEN_MODAL";


export const closeModal = () => ({
    type: CLOSE_MODAL,
});

export const closeModal = (modal, objectId) => ({
    type: CLOSE_MODAL,
    modal,
    objectId,
});
