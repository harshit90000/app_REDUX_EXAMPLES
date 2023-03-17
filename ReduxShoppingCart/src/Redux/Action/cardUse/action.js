import { Add_Item, Remove_Item } from "./cardAction";

 export const addItemtoCart = data=>({
    type:Add_Item,
    payload :data
 })
 export const removeItemtoCart = index=>({
    type:Remove_Item,
    payload :index
 })

 export const getData =(data)=>({
   type :"GET_DATA",
   payload:data
 })