const ADD_NEW_POST = 'ADD-NEW-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';

export const profileReducer = (action, state) => {
  switch (action.type) {
    case 'ADD-NEW-POST':
      state.postsData.push({ id: 3, post: action.postMessage });
      state.newPostValue = '';
      return state;

    case 'NEW-POST-TEXT':
      state.newPostValue = action.currentValue;
      return state;

    default:
      return state;
  }
}

export const addNewPostActionCreator = (message) => ({ type: ADD_NEW_POST, postMessage: message });
export const newPostTextActionCreator = (value) => ({ type: NEW_POST_TEXT, currentValue: value });