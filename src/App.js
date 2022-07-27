import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LeaderBoardPage, PlaygamePage, ResultsPage } from "pages";
import { Result } from "antd";
import { PrivateRoute } from "components";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/play"
          element={
            <PrivateRoute>
              <PlaygamePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/result"
          element={
            <PrivateRoute>
              <ResultsPage />
            </PrivateRoute>
          }
        />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
