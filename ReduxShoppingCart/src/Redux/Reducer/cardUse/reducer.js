import { Add_Item, Remove_Item } from "../../Action/cardUse/cardAction"

const reducerData = (state = [], action) => {
    switch (action.type) {
        case Add_Item:
            return [...state, action.payload]
        case Remove_Item:
            const deleteArray = state.filter((item, index) => {
                return (index !== action.payload)
            })
            return deleteArray
   
        default:
            return state
    }
}
export default reducerData