import { ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteConversation } from "../../../store/conversations";

import styles from "./chat.module.css";

export const Chat = ({ title }) => {

  const dispatch = useDispatch();

  return (
    <ListItem className={styles.itemChat}>
      {/* <ListItemIcon></ListItemIcon> */}
      <ListItemText primary={title} />
      <Button onClick={() => dispatch(deleteConversation(title))}>Del</Button>
    </ListItem>
  )
}