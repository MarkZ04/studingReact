import { DELETE_CONVERSATION } from "../types";
import { CREATE_CONVERSATION } from "./types";

export const deleteConversation = (chatId) => {

  return {
    type: DELETE_CONVERSATION,
    payload: chatId
  }
}

export const createConversation = (chatId) => {

  return {
    type: CREATE_CONVERSATION,
    payload: chatId
  }
}