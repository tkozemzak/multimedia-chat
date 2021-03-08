import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setID] = useLocalStorage("id");

  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login onIDSubmit={setID} />}
    </div>
  );
}

export default App;
