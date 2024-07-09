// App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/Homepage/Homepage.jsx";
import NotFoundPage from "../src/pages/NotFoundPage/NotFoundPage.jsx";
import Profile from "../src/pages/Profile/Profile.jsx";
import LoginPage from "../src/pages/LoginPage/LoginPage.jsx";
// import Exchange from '../src/pages/Exchange/Exchange.jsx'; 
// import Saved from '../src/pages/Saved/Saved.jsx'; 
// import Messages from '../src/pages/Messages/Messages.jsx'; 
import NavMenu from "./components/NavMenu/NavMenu"; 
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <NavMenu activeItem="explore" onItemClick={() => {}} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/exchange" element={<Exchange />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/messages" element={<Messages />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
