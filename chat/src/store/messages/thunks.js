import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError
} from ".";

export const sendMessageWithBot = (message, chatId) => (dispatch, getState) => {

  dispatch(sendMessage(message, chatId));

  if (message.author === 'User') {

    setTimeout(() => {

      dispatch(sendMessage({ author: 'Bot', message: 'Hallo from Bot thunks' }, chatId));
    }, 1000)
  }
}

export const getMessagesDB = () => async (dispatch, getState, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
}