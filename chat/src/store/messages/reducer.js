import { SEND_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  chatList: {

    chat1: [{ id: new Date().toISOString(), author: 'Bot', message: 'Hello from bot to chat1' }]
  }
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state, chatList: {
          ...state.chatList, [action.payload.chatId]:
            [...(state.chatList[action.payload.chatId] ?? []),
            { ...action.payload.message, id: new Date().toISOString() }]
        }
      }

    case DELETE_CONVERSATION: {

      let newState = {
        ...state
      };
      delete newState.chatList[action.payload];

      return newState;
    }

    default: {
      return state;
    }
  }
}