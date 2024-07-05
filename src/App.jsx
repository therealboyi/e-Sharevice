// App.jsx

import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PhotoCard from "./components/PhotoCard/PhotoCard";
import HorizontalNavbar from "./components/HorizontalNavbar/HorizontalNavbar";
import "./App.scss";

const navItems = [
  { label: "Home", link: "#" },
  { label: "About", link: "#" },
  { label: "Services", link: "#" },
  { label: "Contact", link: "#" },
  { label: "Blog", link: "#" },
  { label: "Careers", link: "#" },
  { label: "Support", link: "#" },
  { label: "Privacy", link: "#" }
];

const App = () => (
  <div className="app">
    <Header />
    <main className="app__content">
      <HorizontalNavbar items={navItems} />
      <PhotoCard
        imageSrc="/src/assets/images/messi.png"
        imageAlt="Lionel Messi"
        title="Go PRO with Lionel Messi"
        subtitle="Hosted by Lionel Messi"
        description="Coming July"
      />
      <PhotoCard
        imageSrc="/src/assets/images/ronaldo.png"
        imageAlt="Cristiano Ronaldo"
        title="Go PRO with Cristiano Ronaldo"
        subtitle="Hosted by Cristiano Ronaldo"
        description="Coming July"
      />
      <PhotoCard
        imageSrc="/src/assets/images/mbappe.png"
        imageAlt="Kylian Mbappé"
        title="Go PRO with Kylian Mbappé"
        subtitle="Hosted by Kylian Mbappé"
        description="Coming July"
      />
      <PhotoCard
        imageSrc="/src/assets/images/lebron.png"
        imageAlt="Lebron James"
        title="Go PRO with Lebron James"
        subtitle="Hosted by Lebron James"
        description="Coming July"
      />
      <h1 className="app__title">Hello, React!</h1>
      <p className="app__description">
        This is a basic React app setup with SCSS.
      </p>
      <h1 className="app__title">Hello, React!</h1>
      <p className="app__description">
        This is a basic React app setup with SCSS.
      </p>
      <h1 className="app__title">Hello, React!</h1>
      <p className="app__description">
        This is a basic React app setup with SCSS.
      </p>
      <h1 className="app__title">Hello, React!</h1>
      <p className="app__description">
        This is a basic React app setup with SCSS.
      </p>
      <h1 className="app__title">Hello, React!</h1>
      <p className="app__description">
        This is a basic React app setup with SCSS.
      </p>
      <h1 className="app__title">Hello, React!</h1>
      <p className="app__description">
        This is a basic React app setup with SCSS.
      </p>
    </main>
    <Footer />
  </div>
);

export default App;
