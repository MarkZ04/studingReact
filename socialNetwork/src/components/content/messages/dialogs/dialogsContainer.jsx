import React from "react";
import { Room } from "./room";
import { Dialogs } from "./dialogs";

export const DialogsContainer = (props) => {

const state = props.store.getState();
const dialogsElements = state.messagesPage.dialogsData.map(el => <Room name={el.name} id={el.id} />);

  return (
    <Dialogs
      dialogsElements={dialogsElements}
    />
  )
}