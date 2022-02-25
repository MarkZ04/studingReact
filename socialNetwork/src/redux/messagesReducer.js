const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';

export const messagesReducer = (action, state) => {
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