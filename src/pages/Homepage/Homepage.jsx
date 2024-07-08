// HomePage.jsx

import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import HorizontalNavbar from "../../components/HorizontalNavbar/HorizontalNavbar";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import "./Homepage.scss";

const navItems = [
  { label: "Home", link: "#" },
  { label: "About", link: "#" },
  { label: "Services", link: "#" },
  { label: "Contact", link: "#" },
  { label: "Blog", link: "#" },
  { label: "Careers", link: "#" },
  { label: "Support", link: "#" },
  { label: "Privacy", link: "#" },
  // Duplicate items for example
  { label: "Home", link: "#" },
  { label: "About", link: "#" },
  { label: "Services", link: "#" },
  { label: "Contact", link: "#" },
  { label: "Blog", link: "#" },
  { label: "Careers", link: "#" },
  { label: "Support", link: "#" },
  { label: "Privacy", link: "#" },
];

const HomePage = () => {
  const [activeNavItem, setActiveNavItem] = useState("explore");

  //   const handleScroll = () => {
  //     // Perform any action you want on scroll
  //     console.log("Scroll detected!");
  //     // You can add more logic here if needed
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="homepage">
      <Header />
      <main className="homepage__content">
        <HorizontalNavbar items={navItems} />
        <div className="homepage__photo-cards">
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
        </div>
        <h1 className="homepage__title">Hello, React!</h1>
        <p className="homepage__description">
          This is a basic React homepage setup with SCSS.
        </p>
        <NavMenu
          //   isVisible={true} // Removed dependency on footer visibility
          activeItem={activeNavItem}
          onItemClick={handleNavItemClick}
        />
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default HomePage;
