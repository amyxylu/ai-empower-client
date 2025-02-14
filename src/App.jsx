import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GuidePage from "./pages/GuidePage/GuidePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/results/:resultsId" element={<ResultsPage />} />
        <Route path="/guide/:toolId" element={<GuidePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
