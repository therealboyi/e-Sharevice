// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import SavedPage from "./pages/SavedPage/SavedPage.jsx";
import MessagesPage from "./pages/MessagesPage/MessagesPage.jsx";
import ExchangePage from "./pages/ExchangePage/ExchangePage.jsx";
import NavMenu from "./components/NavMenu/NavMenu";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import ProtectedComponent from "../src/components/ProtectedComponent/ProtectedComponent.jsx";
import PhotoCardDetailPage from "./pages/PhotoCardDetailPage/PhotoCardDetailPage.jsx";
import axiosInstance from "./utils/axios";
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const [isMessageSelected, setIsMessageSelected] = useState(false);
  const [photoCards, setPhotoCards] = useState([]);

  useEffect(() => {
    if (photoCards.length === 0) {
      const fetchPhotoCards = async () => {
        try {
          const response = await axiosInstance.get("/sample-data");
          const sortedData = response.data.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          setPhotoCards(sortedData);
        } catch (error) {
          console.error("Error fetching photo cards:", error);
        }
      };

      fetchPhotoCards();
    }
  }, [photoCards]);

  const hideNavMenuRoutes = [/^\/messages/, /^\/photo\/\d+$/];

  const shouldHideNavMenu = hideNavMenuRoutes.some((route) =>
    route.test(location.pathname)
  );

  return (
    <>
      {!shouldHideNavMenu && <NavMenu />}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage photoCards={photoCards} setPhotoCards={setPhotoCards} />
          }
        />
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
              <MessagesPage setIsMessageSelected={setIsMessageSelected} />
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
        <Route
          path="/photo/:id"
          element={<PhotoCardDetailPage photoCards={photoCards} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
