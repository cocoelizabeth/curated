export const fetchAllCollections = () => {
    return $.ajax({
        method: "GET",
        url: 'api/collections'
    });
};

export const fetchCollection = id => {
    return $.ajx({
        method: 'GET',
        url: `api/collections/${id}`
    });
};

export const createBoard