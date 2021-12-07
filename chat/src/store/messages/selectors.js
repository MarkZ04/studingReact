export const messageSelector = (chatId) => (state) => {

  return state.messages.messages[chatId] ?? [];
}