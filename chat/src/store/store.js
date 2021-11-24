import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";

export const reducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  conversations: conversationsReducer
})
export const store = createStore(reducer);