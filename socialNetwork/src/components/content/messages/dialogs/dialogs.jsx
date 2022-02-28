import React from "react";
import style from './dialogs.module.css';

export const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      {props.dialogsElements}
    </div>
  )
}