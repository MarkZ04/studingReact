import React from "react";
import style from './conversation.module.css'
import { Message } from "./message";

// const messagesData = [
//   { id: 1, message: 'Hello!' },
//   { id: 2, message: 'Hi!' },
//   { id: 3, message: 'sdfjsd!' },
//   { id: 4, message: 'lblklblklhaslk' },
// ];


export const Conversation = (props) => {

  const messagesElements = props.messagesData.map(el => <Message message={ el.message}/>);

  return (
    <div>
      <div className={style.message_list}>
        {messagesElements}
      </div>
      <div>
        <input type="text" />
        <button>Send</button>
      </div>
    </div>
  )
}