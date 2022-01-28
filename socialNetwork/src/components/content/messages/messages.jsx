import React from 'react';
import style from './messages.module.css';
import { Dialogs } from './dialogs';
import { Conversation } from './conversation';

export const Messages = () => {
  return (
    <div className={style.messages}>
      <Dialogs />
      <Conversation/>
    </div>
  )
}
