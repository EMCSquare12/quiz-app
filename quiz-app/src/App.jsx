import { useState } from "react";
import Questionaire from "./pages/Questionaire";
import ScoreResult from "./pages/ScoreResult";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState([]);

  return (
    <>
      <main className="relative flex justify-center w-full h-full  bg-purple-50 min-h-[92vh]">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  callBackData={(value) => setData(value)}
                />
              }
            />
            <Route
              path="/questionaire"
              element={
                <Questionaire
                  callbackAnswer={(value) => setAnswers(value)}
                  callbackQuestions={(value) => setQuestions(value)}
                  data={data}
                />
              }
            />
            <Route
              path="/results"
              element={<ScoreResult questions={questions} answers={answers} />}
            />
            <Route path="/error" element={<Error />} />
          </Routes>
        </Router>
      </main>

      <Footer />
    </>
  );
}

export default App;
