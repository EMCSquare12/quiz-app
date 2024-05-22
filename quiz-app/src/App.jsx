import Questionaire from "./Questionaire";
import ScoreResult from "./ScoreResult";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full min-h-screen bg-purple-50">
        <Router>
          <Routes>
            <Route path="/" element={<Questionaire />} />
            <Route path="/questionaire" element={<Questionaire />} />
            <Route path="/results" element={<ScoreResult />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
