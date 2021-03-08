import { useEffect, useState } from "react";

const LoginForm = ({ setCurrentUser }) => {
  const [enteredUser, setEnteredUser] = useState("");

  const handleUserInput = (e) => {
    e.preventDefault();
    setCurrentUser(enteredUser);
  };

  return (
    <div>
      <form onSubmit={(e) => handleUserInput(e)}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setEnteredUser(e.target.value)}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default LoginForm;
