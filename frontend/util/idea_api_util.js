export const fetchIdeas = () => {
   return $.ajax({
        method: 'GET',
        url: 'api/ideas',
        // data - take in data later?
    })
};

export const fetchIdea = id => {
    return $.ajax({
        method: 'GET',
        url: `api/ideas/${id}`
    });
};

export const fetchUserIdeas = (user_id) => {
      
    return $.ajax({
        method: "GET",
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

  // contentType: false,
        // processData: false