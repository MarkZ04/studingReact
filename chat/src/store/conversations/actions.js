import { DELETE_CONVERSATION } from "../types";
import {
  CREATE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR
} from "./types";

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

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS_START
})

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations
})

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error
})