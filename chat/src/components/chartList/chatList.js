import { useSelector, useDispatch } from "react-redux";
import { List, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styles from "./chatList.module.css";
import { Chat } from "./chat";
import { conversationsSelector, createConversation } from "../../store/conversations";

export const ChatList = () => {

  const params = useParams();
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();

  const createConversationByName = () => {

    const name = prompt('Name conversation.');

    const isValidName = !conversations.find((conversation) => conversation.title === name);

    if (name && isValidName) {
      dispatch(createConversation(name));
      return;
    }
    alert('Name is not value');
  }

  return (
    <List className={styles.chatList} component="nav">
      <Button onClick={createConversationByName}>Create chat</Button>
      {conversations.map((chat, index) => (
        <Link key={chat.title} to={`/chat/${chat.title}`}>
          <Chat
            title={chat.title}
            selected={params.chatId === chat.title}
          />
        </Link>
      ))}
    </List>
  )
}