// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/Homepage/Homepage.jsx";
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage.jsx";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
