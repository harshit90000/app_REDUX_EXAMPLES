import { GET_PRODUCTS } from "./actions";
function userReducer(state = [], action) {
    switch (action.type) {

        case GET_PRODUCTS:
            return { ...state, apple: action.payload.products };
        default:
            return state;
    }
}

export default userReducer;