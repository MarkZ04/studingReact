import React from "react";
import { addNewMessageActionCreator, newMessageTextActionCreator } from "../../../../redux/messagesReducer";
import style from './conversation.module.css';
import { Message } from "./message";

export const Conversation = (props) => {
  const messagesElements = props.state.messagesData.map(el => <Message message={el.message} />);
  const newMessage = React.createRef();

  const changeMessageText = () => {
    props.dispatch(newMessageTextActionCreator(newMessage.current.value));
  }

  const sendMessage = () => {
    props.dispatch(addNewMessageActionCreator(newMessage.current.value));
  }

  return (
    <div>
      <div className={style.message_list}>
        {messagesElements}
      </div>
      <div>
        <input ref={newMessage} onChange={changeMessageText} value={props.state.newMessageValue} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}