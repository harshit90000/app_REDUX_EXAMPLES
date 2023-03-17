import { Add_Item, Remove_Item } from "./cardUse/cardAction"

const incrementValue = (actionType) => {
  if (actionType == "increment") {
    return { type: "increment" }
  }
  else if (actionType == "decrement") {
    return { type: "decrement" }
  }
  else if (actionType == "0"){
    return { type: "0" }
  }
}
const dataValue = text => {
  return { type: 'changeValue', payload: text }
}


export { incrementValue, dataValue }