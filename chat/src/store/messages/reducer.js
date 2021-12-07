import {
  SEND_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

const initialState = {
  messages: {},
  messagesLoading: false,
  messagesError: null
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state, messages: {
          ...state.messages, [action.payload.chatId]:
            [...(state.messages[action.payload.chatId] ?? []),
            { ...action.payload.message, id: new Date().toISOString() }]
        }
      }

    case DELETE_CONVERSATION: {

      let newState = {
        ...state
      };
      delete newState.messages[action.payload];

      return newState;
    }

    case GET_MESSAGES_START:
      return { ...state, messagesLoading: true, messagesError: null };

    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesLoading: false,
        messages: action.payload,
      };

    case GET_MESSAGES_ERROR:
      return {
        ...state,
        messagesLoading: false,
        messagesError: action.payload,
      };

    default: {
      return state;
    }
  }
}