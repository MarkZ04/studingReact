import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";

const App = (props) => {

  const [messageList, setMessageList] = useState([]);

  const handler = () => {

    const userMessage = {
      author: 'Ann',
      text: document.querySelector('input').value
    }
    setMessageList([...messageList, userMessage]);
    document.querySelector('input').value = '';
  }

  useEffect(() => {

    if (messageList.length !== 0 && messageList[messageList.length - 1].author === 'Ann') {
      setTimeout(() => {
        setMessageList([...messageList, { author: 'Bot', text: 'I"m Bot.' }])
      }, 1500)

    }
  })

  return (
    <div className="app">

      <Message messageText={props.appText} />

      <div>
        {messageList.map((obj, index) => {
          return (
            <div className="message" key={index}>
              {obj.text}
            </div>)
        }
        )}
      </div>

      <div className="inputMessage" >
        <input className="entryField" placeholder="text"></input>
        <button className="btnSend" onClick={handler}>Send</button>
      </div>

    </div>
  );
}

export default App;
