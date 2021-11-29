import { SEND_MESSAGE } from "./types";

export const sendMessage = (message, chatId) => {

  return { type: SEND_MESSAGE, payload: { message, chatId } }
}