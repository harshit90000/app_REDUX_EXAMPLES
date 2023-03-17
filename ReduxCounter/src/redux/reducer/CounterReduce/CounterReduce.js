const defaultData = {
    count: 0,
    changedValue: "1"
}

const counterReduce = (state = defaultData, action) => {
    switch (action.type) {
        case '0':
            return {
                ...state,
                count: state.count == 0
            }
        case 'increment':
            return {
                ...state,
                count: state.count + parseInt(state.changedValue)
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - parseInt(state.changedValue)
            }
        case 'changedValue':
            return {
                ...state,
                changedValue: action.payload
            }
        default:
            return state;
    }
}

export default counterReduce