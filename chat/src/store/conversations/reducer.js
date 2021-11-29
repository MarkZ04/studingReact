import { DELETE_CONVERSATION } from "../types";
import { CREATE_CONVERSATION } from "./types";

const initialState = {
  conversations: [
    {
      title: 'chat1',
      value: ''
    },
    {
      title: 'chat2',
      value: ''
    }
  ]
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

    default:
      return state;
  }
}