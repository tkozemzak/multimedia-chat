import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import ChatRoom from "./Components/ChatRoom";

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <div className="App">
      {currentUser ? (
        <ChatRoom currentUser={currentUser} />
      ) : (
        <LoginForm setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
