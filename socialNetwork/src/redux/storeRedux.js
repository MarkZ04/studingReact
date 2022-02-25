import { combineReducers, createStore } from "redux";
import { profileReducer } from './profileReducer';
import { messagesReducer } from './messagesReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer
})

export let store = createStore(reducers);