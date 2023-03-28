export const myFetchGetRequest = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });
    const resJSON = await response.json();
    return resJSON;
};

export const myFetchPostRequest = async (data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const resJSON = await response.json();
    return resJSON;
};

//  replaces old data with new data
export const myFetchPutRequest = async (id, data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const resJSON = await response.json();
    return resJSON;
};

export const myFetchPatchRequest = async (id, data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const resJSON = await response.json();
    return resJSON;
};

export const myFetchDeleteRequest = async id => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'DELETE',
    });
    // const resJSON = await response.json();
    console.log(response);
    return id;
}; 