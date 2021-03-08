import Login from "./Components/Login";
import { useState } from "react";

function App() {
  const [id, setID] = useState();

  return (
    <div className="App">
      <Login onIDSubmit={setID} />
    </div>
  );
}

export default App;
