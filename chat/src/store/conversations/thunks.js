import {
  getConversationsStart,
  getConversationsError,
  getConversationsSuccess,
} from "./actions";

export const getConversationsDB = () => async (dispatch, _, api) => {

  const conversations = [];

  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationsStart();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};