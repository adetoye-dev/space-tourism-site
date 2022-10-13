import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DestinationPage from "./components/DestinationPage";
import CrewPage from "./components/CrewPage";
import TechnologyPage from "./components/TechnologyPage";

function App() {
  return (
    <>
      <NavBar />
      <main className="app">
        <TechnologyPage />
      </main>
    </>
  );
}

export default App;
