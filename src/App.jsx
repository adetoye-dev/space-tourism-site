import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Destination from "./components/Destination";

function App() {
  return (
    <>
      <NavBar />
      <main className="app">
        <Destination />
      </main>
    </>
  );
}

export default App;
