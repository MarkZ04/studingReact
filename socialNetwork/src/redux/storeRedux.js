import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { profileReducer } from './profileReducer';
import { messagesReducer } from './messagesReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
