import axios from "axios";

export const myAxiosGetRequest = async() => {
    const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    });
    return res
} 

export const myAxiosPostRequest = async data => {
    const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        method: 'POST',
        data: data
    });
    return res
} 

//  replaces old data with new data
export const myAxiosPutRequest = async (id, data) => {
    const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts/'+ id,
        method: 'PUT',
        data: data
    });
    return res
} 

export const myAxiosPatchRequest = async (id, data) => {
    const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts/'+ id,
        method: 'PATCH',
        data: data
    });
    return res
} 

export const myAxiosDeleteRequest = async id => {
    const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts/'+ id,
        method: 'DELETE',
    });
    console.log(res);
    return id
} 