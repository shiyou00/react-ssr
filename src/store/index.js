import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

export const getStore = ()=>{
  return createStore(reducer,applyMiddleware(thunk));
}

export const getClientStore = ()=>{
  const defaultState = window.INITIAL_STATE;
  return createStore(reducer,defaultState,applyMiddleware(thunk));
}
