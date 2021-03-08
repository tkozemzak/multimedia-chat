import Login from "./Components/Login";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setID] = useLocalStorage();

  return (
    <div className="App">
      {id}
      <Login onIDSubmit={setID} />
    </div>
  );
}

export default App;
