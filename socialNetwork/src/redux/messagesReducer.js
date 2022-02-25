const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

const initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-NEW-MESSAGE':
      state.messagesData.push({ id: 3, message: action.messageText });
      state.newMessageValue = '';
      return state;

    case 'NEW-MESSAGE-TEXT':
      state.newMessageValue = action.text;
      return state;

    default:
      return state;
  }
}

export const addNewMessageActionCreator = (message) => ({ type: ADD_NEW_MESSAGE, messageText: message })
export const newMessageTextActionCreator = (value) => ({ type: NEW_MESSAGE_TEXT, text: value })