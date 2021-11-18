import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Input, Button } from '@mui/material';
import { useParams } from "react-router-dom";
import styles from "./messageList.module.css";
import { Message } from "./message";

export const MessageList = () => {

  const [messageList, setMessageList] = useState({});
  const [value, setValue] = useState('');
  const ref = useRef(null);
  const { chatId } = useParams();


  const sendMessage = useCallback(
    (text, author = "User") => {
      if (text) {
        setMessageList({
          ...messageList,
          [chatId]: [
            ...(messageList[chatId] ?? []),
            { author, text },
          ],
        });
        console.log(messageList)
        setValue("");
      }
    },
    [messageList, chatId]
  );

  const handlePressInput = ({ code }) => {

    if (code === "Enter") {
      sendMessage(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messageList, handleScrollBottom]);

  useEffect(() => {

    const messages = messageList[chatId] ?? [];
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author === 'User') {
      setTimeout(() => {
        sendMessage("I'm bot", "Bot");
      }, 1000);
    }
  }, [messageList, setMessageList, chatId])

  const messages = messageList[chatId] ?? [];

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

        <Button onClick={() => sendMessage(value)}>Send</Button>
      </div>
    </div>
  );
}

