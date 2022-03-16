const ADD_NEW_POST = 'ADD_NEW_POST';
const NEW_POST_TEXT = 'NEW_POST_TEXT';

const initialState = {
  postsData: [
    { id: 1, post: 'Hello world!' },
    { id: 2, post: 'Hi!' }
  ],
  newPostValue: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_NEW_POST':
      return {
        ...state,
        postsData: [...state.postsData, { id: 3, post: action.postMessage }],
        newPostValue: ''
      };

    case 'NEW_POST_TEXT':
      return {
        ...state,
        newPostValue: action.currentValue
      };

    default:
      return state;
  }
}

export const addNewPostActionCreator = (message) => ({ type: ADD_NEW_POST, postMessage: message });
export const newPostTextActionCreator = (value) => ({ type: NEW_POST_TEXT, currentValue: value });