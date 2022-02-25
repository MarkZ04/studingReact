import { messagesReducer } from "./messagesReducer";
import { profileReducer } from "./profileReducer";

export let store = {

  _state: {
    profilePage: {

      postsData: [
        { id: 1, post: 'Hello world!' },
        { id: 2, post: 'Hi!' }
      ],
      newPostValue: '',
    },

    messagesPage: {
      dialogsData: [
        { id: 1, name: 'Anna' },
        { id: 2, name: 'Mark' },
        { id: 3, name: 'John' },
      ],

      messagesData: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'Hi!' },
        { id: 3, message: 'sdfjsd!' },
      ],
      newMessageValue: '',
    },
  },
  _rerender() { }, // = rerender from index.js

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerender = observer;  // observer = rerender(state) from index.js
  },

  dispatch(action) {
    const state = this.getState();

    state.profilePage = profileReducer(action, state.profilePage);
    state.messagesPage = messagesReducer(action, state.messagesPage);

    this._rerender(state);
  }
}

















