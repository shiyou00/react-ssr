import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
const reducer = (state={name:"Lion"},action)=>{
  return state;
}

const getStore = ()=>{
  return createStore(reducer,applyMiddleware(thunk));
}

export default getStore;
