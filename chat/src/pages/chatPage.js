import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom"
import { App, ChatList, MessageList } from "../components";
import { getMessagesDB } from "../store/messages";
import { getConversationsDB } from "../store/conversations";

export const ChatPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessagesDB());
    dispatch(getConversationsDB());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<App chatList={<ChatList />}
            messageList={<h1>Select chat</h1>} />}
        />
        <Route
          path="/:chatId"
          element={<App chatList={<ChatList />}
            messageList={<MessageList />} />}
        />
      </Routes>
    </>
  )
}