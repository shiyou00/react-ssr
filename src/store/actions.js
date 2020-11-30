import axios from 'axios';
import {CHANGE_USER_LIST} from "./constants";

const changeUserList = (list)=>{
  return {
    type:CHANGE_USER_LIST,
    list
  }
}

export const getUserList = ()=>{
  return (dispatch)=>{
   return axios.get('https://reqres.in/api/users').then((res)=>{
      dispatch(changeUserList(res.data.data));
    });
  }
}
