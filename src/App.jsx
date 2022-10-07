import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar />
      <main className="app">
        <Home />
      </main>
    </>
  );
}

export default App;
