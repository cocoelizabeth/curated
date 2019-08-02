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
    })
};

export const createIdea = idea => {

 return $.ajax({
        method: 'POST',
        url: "api/ideas",
        data: { idea },
        // contentType: false,
        // processData: false
    });
};

 // NOTE:  data - take in data later and incoroprate filter in actions