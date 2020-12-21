import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Aux from "../../../hoc/Auxillary/Auxillary";
import queryString from "query-string";
import styles from "./Chat.module.css";
import Button from "../../UI/Buttons/Button";
import Input from "../../UI/Input/Input";
let socket;
let endpoint = "http://localhost:5000";
const Chat = ({ location ,history }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [getName, setName] = useState("");
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    socket = io(endpoint);
    socket.emit("adduser", { name, room }, ({ error }) => {
      alert(error);
      if(error){
        history.push('/chat')
      }
    });
    socket.on("message", (data) => setMessages([...messages, data]));
    return () => {
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    return () => {
      socket.off()
    }
  }, [messages]);

  const sendMessage = (e, message) => {
    e.preventDefault();
    socket.emit("sendmessage", message, () => setMessage(""));
  };
  return (
    <Aux>
      <div className={styles.chatBox}>
        <div className={styles.chatInnerBox}>
          {messages.map((data, id) => {
            let style =
              data.user === getName ? "chatMessageUser" : "chatMessageAdmin";
            let messageStyle;

            style === "chatMessageUser"
              ? (messageStyle = (
                  <div>
                    <span className={styles.message}>{data.text}</span>
                  </div>
                ))
              : (messageStyle = (
                  <div>
                    <span className={styles.message}>{data.text}</span>
                    <span style={{fontFamily: 'italic' , fontSize : '12px' , backgroundColor : 'lightgray',borderRadius : '20px' , padding : '10px'}}>{data.user}</span>
                  </div>
                ));
            return (
              <div key={id} className={styles[style]}>
                {messageStyle}
              </div>
            );
          })}
        </div>
        <div>
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            onClick={(e) =>
              message.length > 0 ? sendMessage(e, message) : null
            }
          >
            submit
          </Button>
        </div>
      </div>
    </Aux>
  );
};

export default Chat;
