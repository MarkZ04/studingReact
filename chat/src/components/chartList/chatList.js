import { useState } from "react";
import { List } from "@mui/material";
import styles from "./chatList.module.css";
import { Chat } from "./chat";

export const ChatList = () => {

  const [chatList] = useState(['Chart1', 'Chart2', 'Chart3']);

  return (
    <List className={styles.chatList} component="nav">
      {chatList.map((chat, index) => (
        <Chat
          key={index}
          title={chat}
        />
      ))}
    </List>
  )
}