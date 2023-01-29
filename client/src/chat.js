import React , {useState, useEffect} from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import './chat.css'

const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([{
        author : "you",
        message : "Type '/start' to start the conversation",
    }]);

    const sendMessage = async () => {
        let s = currentMessage;
        const mobj = {
          author : "other",
          message : s
        }
        setMessageList((list) => [...list, mobj]);
        // s.replace(/ /g, '%20');
        let url = `http://localhost:5001/api`;
        console.log(url);
        const response = await fetch(url, {
          method:'POST',
          headers : {
            'Accept' :'application/json',
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            "input": s
          })
        });
        const data = await response.text();
        console.log(data);
        const val = JSON.parse(data).output;
        console.log(val);
        const mobj2 = {
          author : "you",
          message : val
        }
        setMessageList((list) => [...list, mobj2]);

        setCurrentMessage("");
    }

    return (
      <div className='main'>
        <div className="chat-window">
          <div className="chat-header">
            <p>Chat window</p>
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent) => {
                return (
                  <div
                    className="message"
                    id={messageContent.author}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      {/* <div className="message-meta">
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
        </div>
      );

}


export default Chat;