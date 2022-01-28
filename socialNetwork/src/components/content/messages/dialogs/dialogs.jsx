import React from "react";
import style from './dialogs.module.css';
import { Room } from "./room";

export const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <Room/>
    </div>
  )
}