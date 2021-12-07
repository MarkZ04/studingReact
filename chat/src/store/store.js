import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";
import { gistsReducer } from "./gists";
import { botSendMessage } from "./middlewares";
import { getGistsApi, searchGistsByUserNameApi } from "../api/gists";
import { getMessagesApi, sendMessageApi } from "../api/messages";
import { getConversationsApi, updateConversationsApi } from "../api/conversations";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"]
};

export const reducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
  gists: gistsReducer
});

const persistreducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      botSendMessage,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByUserNameApi,
        getMessagesApi,
        sendMessageApi,
        getConversationsApi,
        updateConversationsApi
      })
    )
  )
);

export const persistor = persistStore(store);