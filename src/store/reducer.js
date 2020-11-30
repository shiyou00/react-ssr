import { CHANGE_USER_LIST } from "./constants";

const defaultState = {
  userList:[]
};

export default (state = defaultState , action)=>{
  switch (action.type) {
    case CHANGE_USER_LIST:
      return {
        ...state,
        userList:action.list
      }
    default:
      return state;
  }
}
