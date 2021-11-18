import { useState } from "react";
import { List } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styles from "./chatList.module.css";
import { Chat } from "./chat";

export const ChatList = () => {

  const [chatList] = useState(['chat1', 'chat2', 'chat3']);
  const params = useParams();


  return (
    <List className={styles.chatList} component="nav">
      {chatList.map((chat, index) => (
        <Link key={index} to={`/chat/${chat}`}>
          <Chat
            title={chat}
            selected={params.chatId === chat}
          />
        </Link>
      ))}
    </List>
  )
}