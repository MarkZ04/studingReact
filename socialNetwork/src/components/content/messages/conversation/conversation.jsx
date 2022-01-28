import React from "react";
import style from './conversation.module.css'
import { Message } from "./message";

export const Conversation = () => {
  return (
    <div>
      <div className={style.message_list}>
        <Message/>
      </div>
      <div>
        <input type="text" />
        <button>Send</button>
      </div>
    </div>
  )
}