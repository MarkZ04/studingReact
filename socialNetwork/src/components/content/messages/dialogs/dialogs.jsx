import React from "react";
import style from './dialogs.module.css';
import { Room } from "./room";

export const Dialogs = (props) => {

let dialogsElements = props.dialogsData.map(el => <Room name={el.name} id={el.id} />);

  return (
    <div className={style.dialogs}>
      {dialogsElements}
    </div>
  )
}