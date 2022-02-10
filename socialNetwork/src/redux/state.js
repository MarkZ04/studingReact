import { rerender } from "../render";

export const state = {
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

  addNewPost(postMessage) {
    state.profilePage.postsData.push({ id: 3, post: postMessage });
    state.profilePage.newPostValue = '';
    rerender(state);
  },

  newPostText(currentValue) {
    state.profilePage.newPostValue = currentValue;
    rerender(state);
  }
}



