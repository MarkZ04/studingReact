import React from "react";
import style from './conversation.module.css'
import { Message } from "./message";

export const Conversation = (props) => {

  const messagesElements = props.messagesData.map(el => <Message message={el.message} />);
  const newMessage = React.createRef();

  const sendMessage = () => {
    console.log(newMessage.current.value);
  }

  return (
    <div>
      <div className={style.message_list}>
        {messagesElements}
      </div>
      <div>
        <input ref={newMessage} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}