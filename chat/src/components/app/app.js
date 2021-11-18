import styles from "./app.module.css";
import { MessageList, ChatList } from '../index';


export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <ChatList />
        <MessageList />
      </div>

    </div >
  );
}
