import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

export const updateConversationsApi = (value, chatId) =>
  db.ref("conversations").child(chatId).update({ value, title: chatId });

export const addConversation = (value) => {
  return db.ref("conversations").child(value).set({ title: value, value: "" });
};