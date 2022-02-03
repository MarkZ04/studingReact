import React from 'react';
import style from './messages.module.css';
import { Dialogs } from './dialogs';
import { Conversation } from './conversation';

export const Messages = (props) => {
  return (
    <div className={style.messages}>
      <Dialogs dialogsData={props.state.dialogsData} />
      <Conversation messagesData={props.state.messagesData} />
    </div>
  )
}
