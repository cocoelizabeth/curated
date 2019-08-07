export const fetchAllCollections = (userId) => {
    return $.ajax({
        method: "GET",
        url: `api/users/${userId}/collections`,
    });
};

export const fetchCollection = id => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `api/collections/${id}`,
    });
};

export const createCollection = (collection) => {
    return $.ajax({
        method: 'POST',
        url: `api/collections`,
        data: { collection },

    });
};

export const updateCollection = (collection) => {
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/collections/${collection.id}`,
        data: { collection },
    });
};

export const deleteCollection =  (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/boards/${id}`
    });
};