const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT';

const initialState = {
  dialogsData: [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Mark' },
    { id: 3, name: 'John' },
  ],

  messagesData: [
    { id: 1, message: 'Hello!' },
    { id: 2, message: 'Hi!' },
  ],
  newMessageValue: '',
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_NEW_MESSAGE':
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 3, message: action.messageText }],
        newMessageValue: ''
      };

    case 'NEW_MESSAGE_TEXT':
      return {
        ...state,
        newMessageValue: action.text
      };

    default:
      return state;
  }
}

export const addNewMessageActionCreator = (message) => ({ type: ADD_NEW_MESSAGE, messageText: message })
export const newMessageTextActionCreator = (value) => ({ type: NEW_MESSAGE_TEXT, text: value })