export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

export const openModal = (modal, callback, collectionId, collectionTitle, idea) => {
    return ({
        type: OPEN_MODAL,
        modal,
        callback,
        collectionId,
        collectionTitle,
        idea
    });
};


export const closeModal = () => ({
    type: CLOSE_MODAL,
});
