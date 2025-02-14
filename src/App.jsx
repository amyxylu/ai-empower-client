import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GuidePage from "./pages/GuidePage/GuidePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/:id" element={<ResultsPage />} />
        <Route path="/guidepage" element={<GuidePage/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
