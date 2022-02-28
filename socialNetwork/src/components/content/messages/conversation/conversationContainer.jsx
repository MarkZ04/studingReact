import React from "react";
import { addNewMessageActionCreator, newMessageTextActionCreator } from "../../../../redux/messagesReducer";
import { Conversation } from "./conversation";
import { Message } from "./message";

export const ConversationContainer = (props) => {
  
  const state = props.store.getState();
  const messagesElements = state.messagesPage.messagesData.map(el => <Message message={el.message} />);

  const changeMessageText = (text) => {
    props.store.dispatch(newMessageTextActionCreator(text));
  }

  const sendMessage = (text) => {
    props.store.dispatch(addNewMessageActionCreator(text));
  }

  return (
    <Conversation
      messagesElements={messagesElements}
      changeMessageText={changeMessageText}
      sendMessage={sendMessage}
      newMessageValue={state.messagesPage.newMessageValue}
    />
  )
}