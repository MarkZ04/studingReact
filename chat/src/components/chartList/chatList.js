import { useSelector } from "react-redux";
import { List } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styles from "./chatList.module.css";
import { Chat } from "./chat";
import { conversationsSelector } from "../../store/conversations";

export const ChatList = () => {

  const params = useParams();
  const conversation = useSelector(conversationsSelector);

  return (
    <List className={styles.chatList} component="nav">
      {conversation.map((chat, index) => (
        <Link key={index} to={`/chat/${chat.title}`}>
          <Chat
            title={chat.title}
            selected={params.chatId === chat.title}
          />
        </Link>
      ))}
    </List>
  )
}