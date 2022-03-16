import React from "react";
import style from './conversation.module.css';
import { Message } from "./message";

export const Conversation = (props) => {

  const messagesElements = props.messagesData.map(el => <Message message={el.message} />);

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
        {messagesElements}
      </div>
      <div>
        <input ref={newMessage} onChange={changeMessageText} value={props.newMessageValue} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}