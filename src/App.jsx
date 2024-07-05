// App.jsx

import React from "react";
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer"; 
import "./App.scss";

const App = () => (
  <div className="app">
    <Header />
    <main className="app__content">
      <h1 className="app__title">Hello, React!</h1>
      <p className="app__description">
        This is a basic React app setup with SCSS.
      </p>
    </main>
    <Footer />
  </div>
);

export default App;