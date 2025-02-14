import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuidePage from "./pages/GuidePage/GuidePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/guide/:toolId" element={<GuidePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
