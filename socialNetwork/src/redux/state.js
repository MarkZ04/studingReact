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
        { id: 4, message: 'lblklblklhaslk' },
      ]
    },
  },
  _rerender() { }, // = rerender from index.js

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerender = observer;  // observer = rerender() from index.js
  },

  dispatch(action) {

    if (action.type === 'ADD-NEW-POST') {
      const state = this.getState();
      state.profilePage.postsData.push({ id: 3, post: action.postMessage });
      state.profilePage.newPostValue = '';
      this._rerender(this.getState());
    }

    if (action.type === 'NEW-POST-TEXT') {
      const state = this.getState();
      state.profilePage.newPostValue = action.currentValue;
      this._rerender(this.getState());
    }
  }
}















