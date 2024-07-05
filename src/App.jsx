// App.jsx

import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PhotoCard from "./components/PhotoCard/PhotoCard";
import HorizontalNavbar from "./components/HorizontalNavbar/HorizontalNavbar";
import NavMenu from "./components/NavMenu/NavMenu";
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

const App = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = document.body.offsetHeight - document.querySelector('.footer').offsetHeight;
    setIsFooterVisible(scrollPosition >= footerPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
      <Footer className="footer" />
      <NavMenu isVisible={!isFooterVisible} />
    </div>
  );
};

export default App;
