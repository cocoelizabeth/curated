export const fetchIdeas = () => {
   return $.ajax({
        method: 'GET',
        url: 'api/ideas',
        // data - take in data later?
    });
};

export const fetchIdea = id => {
    return $.ajax({
        method: 'GET',
        url: `api/ideas/${id}`
    });
};

export const fetchUserIdeas = (user_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${user_id}/ideas`
    });
};


export const createIdea = (formData) => {
    return $.ajax({
            method: 'POST',
            url: "api/ideas",
            data: formData,
            contentType: false,
            processData: false,
        });
};

export const updateIdea = (id, formData) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/ideas/${id}`,
        data: formData,
        contentType: false,
        processData: false,
    });
};

export const createIdeaJoin = (idea, collectionId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/collections/${collectionId}/idea_joins`,
        data: { idea_join: { idea_id: idea.id, collection_id: collectionId } },
        // collectionId: collectionId
    });
};

export const fetchCollectionIdeas = (collectionId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/collections/${collectionId}/ideas`
    });
};
