// HomePage.jsx
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import HorizontalNavbar from "../../components/HorizontalNavbar/HorizontalNavbar";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axios";
import "./Homepage.scss";

const API_URL = import.meta.env.VITE_API_URL;

const navItems = [
  { label: "Gardening", link: "#" },
  { label: "Woodwork", link: "#" },
  { label: "Babysitting", link: "#" },
  { label: "Power Tools", link: "#" },
  { label: "Cooking", link: "#" },
  { label: "Electronics", link: "#" },
  { label: "Fitness", link: "#" },
  { label: "Photography", link: "#" },
  { label: "Music Lessons", link: "#" },
  { label: "Pet Care", link: "#" },
  { label: "Home Cleaning", link: "#" },
  { label: "Plumbing", link: "#" },
  { label: "Painting", link: "#" },
  { label: "Carpentry", link: "#" },
  { label: "Auto Repair", link: "#" },
  { label: "Computer Repair", link: "#" },
  { label: "Event Planning", link: "#" },
  { label: "Landscaping", link: "#" },
  { label: "Tutoring", link: "#" },
  { label: "Fashion Design", link: "#" },
];

const HomePage = () => {
  const [activeNavItem, setActiveNavItem] = useState("explore");
  const [photoCards, setPhotoCards] = useState([]);

  useEffect(() => {
    const fetchPhotoCards = async () => {
      try {
        const response = await axiosInstance.get("/sample-data");
        console.log("Fetched photo card data:", response.data);
        setPhotoCards(response.data);
      } catch (error) {
        console.error("Error fetching photo cards:", error);
      }
    };

    fetchPhotoCards();
  }, []);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="homepage">
      <Header />
      <main className="homepage__content">
        <HorizontalNavbar items={navItems} />
        <div className="homepage__photo-cards">
          {photoCards.map((card, index) => {
            console.log(`Image URL for card ${index + 1}:`, card.imgSrc);
            return (
              <PhotoCard
                key={index}
                imageSrc={card.imgSrc}
                imageAlt={card.provider}
                title={card.provider}
                subtitle={card.service}
                description={card.exchange.split(" - ")[0]}
              />
            );
          })}
        </div>

        <NavMenu activeItem={activeNavItem} onItemClick={handleNavItemClick} />
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default HomePage;
