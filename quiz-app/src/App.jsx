import { useState } from "react";
import Questionaire from "./Questionaire";
import ScoreResult from "./ScoreResult";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  console.log(answers);
  console.log(questions);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full min-h-screen bg-purple-50">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Questionaire
                  callbackAnswer={(value) => {
                    setAnswers(value);
                    console.log(value);
                  }}
                  callbackQuestions={(value) => {
                    setQuestions(value);
                    console.log(value);
                  }}
                />
              }
            />
            <Route path="/questionaire" element={<Questionaire />} />
            <Route
              path="/results"
              element={<ScoreResult questions={questions} answers={answers} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
