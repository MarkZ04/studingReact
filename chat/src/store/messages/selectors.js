export const messageSelector = (chatId) => (state) => {
  console.log(state);
  return state.messages.chatList[chatId] ?? [];
}