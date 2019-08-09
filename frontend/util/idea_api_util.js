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

export const createIdea = (idea) => {
    
 return $.ajax({
        method: 'POST',
        url: "api/ideas",
        data: { idea },
    });
};

  // contentType: false,
        // processData: false