export const messageSelector = (chatId) => (state) => {

  return state.messages.chatList[chatId] ?? [];
}