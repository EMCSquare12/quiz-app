import { useState } from "react";
import Questionaire from "./pages/Questionaire";
import ScoreResult from "./pages/ScoreResult";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState([]);
  console.log(answers);
  console.log(questions);

  return (
    <>
      <div className="flex items-center justify-center w-full h-full min-h-screen bg-purple-50">
        <Router>
          <Routes>
            <Route
              path="/"
              element={<HomePage callBackData={(value) => setData(value)} />}
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
          </Routes>
        </Router>
      </div>
      <Footer/>
    </>
  );
}

export default App;
