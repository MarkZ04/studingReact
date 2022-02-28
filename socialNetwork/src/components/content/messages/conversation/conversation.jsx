import React from "react";
import style from './conversation.module.css';

export const Conversation = (props) => {
  const newMessage = React.createRef();

  const changeMessageText = () => {
    props.changeMessageText(newMessage.current.value);
  }

  const sendMessage = () => {
    props.sendMessage(newMessage.current.value);
  }

  return (
    <div>
      <div className={style.message_list}>
        {props.messagesElements}
      </div>
      <div>
        <input ref={newMessage} onChange={changeMessageText} value={props.newMessageValue} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}