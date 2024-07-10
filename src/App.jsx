// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SavedPage from "./pages/SavedPage/SavedPage.jsx";
import MessagesPage from "./pages/MessagesPage/MessagesPage.jsx";
import ExchangePage from "./pages/ExchangePage/ExchangePage.jsx";
import NavMenu from "./components/NavMenu/NavMenu";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedComponent from "./components/ProtectedComponent.jsx";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <ProtectedComponent>
                <Profile />
              </ProtectedComponent>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/saved"
            element={
              <ProtectedComponent>
                <SavedPage />
              </ProtectedComponent>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedComponent>
                <MessagesPage />
              </ProtectedComponent>
            }
          />
          <Route
            path="/exchanges"
            element={
              <ProtectedComponent>
                <ExchangePage />
              </ProtectedComponent>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
