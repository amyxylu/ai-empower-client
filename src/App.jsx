import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/results/:resultsId" element={<ResultsPage />} />
        <Route path="/guide/:toolId" element={<GuidePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
