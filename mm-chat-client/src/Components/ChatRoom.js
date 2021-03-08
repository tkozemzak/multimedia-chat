import { useEffect, useState } from "react";
import "../Styles/ChatRoom.css";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:8080";

const ChatRoom = ({ currentUser }) => {
  const [messages, setMessages] = useState({});
  const [eventLog, setEventLog] = useState([]);
  const socket = socketIOClient(ENDPOINT);
  let counter = 0;

  useEffect(() => {
    socket.emit("join", currentUser);
    counter++;
    console.log("counter:", counter);
  }, [currentUser]);

  socket.on("join", (name) => {
    setEventLog([...eventLog, `${name} joined`]);
  });

  return (
    <div className="ChatRoom">
      <div className="message-container">
        <h1>Current user: {currentUser}</h1>
        <h2>Messages:</h2>
      </div>
      <div className="event-container">
        <h2>Events:</h2>
        <ul>
          {eventLog.map((event, idx) => {
            return <li key={idx}>{event}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChatRoom;
