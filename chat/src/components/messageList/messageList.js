import React from "react";
import { useState, useEffect } from "react";
import { Input, Button } from '@mui/material';
import styles from "./messageList.module.css";
import { Message } from "./message";

export const MessageList = () => {

  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const sendMessage = () => {

    if (value) {
      setMessageList([...messageList, { author: 'User', text: value }]);
      setValue('');
    }
  }

  const handlePressInput = ({ code }) => {

    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {

    if (messageList.length !== 0 && messageList[messageList.length - 1].author === 'User') {
      setTimeout(() => {
        setMessageList([...messageList, { author: 'Bot', text: `I'm Bot.` }])
      }, 1500)
    }
  })

  return (
    <div className={styles.messageList}>

      {messageList.map((userMessage, index) => {
        return <Message key={index} userMessage={userMessage} />
      })}

      <div className="inputMessage" >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handlePressInput}
          placeholder="You message..." />

        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}

