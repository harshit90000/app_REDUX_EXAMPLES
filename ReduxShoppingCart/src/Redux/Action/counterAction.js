import { Add_Item, Remove_Item } from "./cardUse/cardAction"

const addItemtoCart = data=>({
  type:Add_Item,
  payload :data
})
const removeItemtoCart = index=>({
  type:Remove_Item,
  payload :index
})

 const getData =(data)=>({
 type :"GET_DATA",
 payload:data
})
export { getData,removeItemtoCart,addItemtoCart }