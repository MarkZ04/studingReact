import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import styles from "./chat.module.css";


export const Chat = ({ title }) => {
  return (
    <ListItem className={styles.itemChat}>
      <ListItemIcon></ListItemIcon>
      <ListItemText className='' primary={title} />
    </ListItem>
  )
}