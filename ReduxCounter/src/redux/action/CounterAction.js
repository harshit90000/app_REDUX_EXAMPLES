const incrementDecrementValue = (actionType) => {
    if(actionType == "increment"){
        return {
            type: "increment"
        }
    }
    else if(actionType == "decrement"){
        return {
            type : "decrement"
        }
    }
}

const dataValue = text => {
    return {
        type: "changedValue",
        payload: text
    }
}

export { incrementDecrementValue, dataValue }