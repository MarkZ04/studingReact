import React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from '@mui/material';
import { useParams } from "react-router-dom";
import styles from "./messageList.module.css";
import { Message } from "./message";
import { sendMessage, messageSelector } from "../../store/messages";

export const MessageList = () => {

  const [value, setValue] = useState('');
  const ref = useRef(null);
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const messageSelectorByMemo = useMemo(
    () => messageSelector(chatId),
    [chatId]
  );
  const messages = useSelector(messageSelectorByMemo);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage({ author, message }, chatId));
        setValue("");
      }
    },
    [dispatch, chatId]
  );

  const handlePressInput = ({ code }) => {

    if (code === "Enter") {
      send(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messages, handleScrollBottom]);

  useEffect(() => {

    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author === 'User') {
      setTimeout(() => {
        send("I'm bot", "Bot");
      }, 1000);
    }
  }, [messages, send, chatId])


  return (
    <div className={styles.messageList} >
      <div ref={ref}>
        {messages.map((userMessage, index) => {
          return <Message key={index} userMessage={userMessage} />
        })}
      </div>

      <div className="inputMessage" >
        <Input
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handlePressInput}
          placeholder="You message..." />

        <Button onClick={() => send(value)}>Send</Button>
      </div>
    </div>
  );
}

