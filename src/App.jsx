import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DestinationPage from "./components/Destination/DestinationPage";
import CrewPage from "./components/Crew/CrewPage";
import TechnologyPage from "./components/Technology/TechnologyPage";

function App() {
  return (
    <>
      <NavBar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
