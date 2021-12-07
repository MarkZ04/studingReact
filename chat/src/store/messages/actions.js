import {
  SEND_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR
} from "./types";

export const sendMessage = (message, chatId) => {

  return { type: SEND_MESSAGE, payload: { message, chatId } }
}

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error
});