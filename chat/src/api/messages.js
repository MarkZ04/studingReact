import { db } from "./firebase";
import { nanoid } from "nanoid";

export const getMessagesApi = () => db.ref('messages').get();

export const sendMessageApi = ({ author, message }, chatId) => db.ref('messages').child(chatId).push({ author, message, id: nanoid() });