import styles from "./message.module.css"
import classNames from 'classnames'

export const Message = ({ userMessage }) => {
  return (
    <div className={classNames(styles.message, {
      [styles.authorUser]: userMessage.author === "User",
    })}>
      {userMessage.message}
      <p className={styles.author}>{userMessage.author}</p>
    </div>)
}
