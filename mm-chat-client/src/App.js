import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import LoginForm from "./Components/LoginForm";
import ChatRoom from "./Components/ChatRoom";

const ENDPOINT = "http://localhost:4000";

function App() {
  const [messages, setMessages] = useState({});
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("chat", (data) => {
      console.log("data: ", data);
      setMessages(data, ...messages);
    });
  }, []);

  return (
    <div className="App">
      {currentUser ? (
        <ChatRoom />
      ) : (
        <LoginForm setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
