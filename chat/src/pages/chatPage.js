import { Routes, Route, useNavigate } from "react-router-dom"
import { App, ChatList, MessageList } from "../components";


export const ChatPage = () => {

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