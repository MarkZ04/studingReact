import { sendMessage } from ".";

export const sendMessageWithBot = (message, chatId) => (dispatch, getState) => {

  dispatch(sendMessage(message, chatId));

  if (message.author === 'User') {

    setTimeout(() => {

      dispatch(sendMessage({ author: 'Bot', message: 'Hallo from Bot thunks' }, chatId));
    }, 1000)
  }
}