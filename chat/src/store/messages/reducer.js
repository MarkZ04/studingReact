import { SEND_MESSAGE } from "./types";

const initialState = {
  chatList: {

    chat1: [{ id: new Date(), author: 'Bot', message: 'Hello from bot to chat1' }],
  }
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      console.log(state);
      return {
        ...state, chatList: {
          ...state.chatList, [action.payload.chatId]:
            [...(state.chatList[action.payload.chatId] ?? []),
            { ...action.payload.message, id: new Date() }]
        }
      }

    default: {
      return state;
    }
  }
}