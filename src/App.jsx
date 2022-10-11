import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DestinationPage from "./components/DestinationPage";
import CrewPage from "./components/CrewPage";

function App() {
  return (
    <>
      <NavBar />
      <main className="app">
        <CrewPage />
      </main>
    </>
  );
}

export default App;
