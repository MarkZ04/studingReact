import { DELETE_CONVERSATION } from "../types";
import {
  CREATE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR
} from "./types";

const initialState = {
  conversationsLoading: false,
  conversationsError: null,
  conversations: []
}

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {

    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter((chat) => chat.title !== action.payload)
      }

    case CREATE_CONVERSATION:
      return {
        ...state, conversations:
          [...state.conversations, { title: action.payload, value: '' }]
      }

    case GET_CONVERSATIONS_START:
      return {
        ...state,
        conversationsLoading: true,
        conversationsError: null
      }

    case GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversationsLoading: false,
        conversations: action.payload
      }

    case GET_CONVERSATIONS_ERROR:
      return {
        ...state,
        conversationsLoading: false,
        conversationsError: action.payload
      }

    default:
      return state;
  }
}