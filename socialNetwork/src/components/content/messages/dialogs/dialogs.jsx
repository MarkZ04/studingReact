import React from 'react';
import style from './dialogs.module.css';
import { Room } from './room';

export const Dialogs = (props) => {
  const dialogsElements = props.dialogsData.map((el, i) => (
    <Room key={i} name={el.name} id={el.id} />
  ));
  return <div className={style.dialogs}>{dialogsElements}</div>;
};
