import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage, PlaygamePage } from "pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/play" element={<PlaygamePage />} />
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
