import { ADD_USER } from "../Types";
const initState=[];

const UserReducer=(state=initState,action)=>{
  switch(action.type){
    case ADD_USER: return [...state,action.payload];
    default :return state
  }
}
export default UserReducer