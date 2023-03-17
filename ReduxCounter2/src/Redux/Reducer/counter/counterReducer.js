const normalData = {
    count: 0,
    changeValue: 1
}
const counterReducer = (state = normalData, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + parseInt(state.changeValue)
            }
        case 'decrement':
            return {
            ...state,
                count: state.count - parseInt(state.changeValue)
            }
        case '0':
            return {
                ...state,
                count: state.count == 0
            }
        case 'changeValue':
            return {
                ...state,
                changeValue : action.payload
            }
        default:
            return state;
    }
}
export default counterReducer