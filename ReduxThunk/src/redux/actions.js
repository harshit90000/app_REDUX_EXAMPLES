export const GET_PRODUCTS = 'GET_PRODUCTS';

// const API_URL = 'https://fakestoreapi.com/products'
const API_URL = 'https://dummyjson.com/products'

export const getProduct = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL)
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_PRODUCTS,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}
