// src/pages/Homepage/Homepage.jsx

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Skeleton from "../../components/Skeleton/Skeleton"; 
import HorizontalNavbar from "../../components/HorizontalNavbar/HorizontalNavbar";
import NavMenu from "../../components/NavMenu/NavMenu";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axios";
import "./Homepage.scss";

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

const HomePage = ({ photoCards, setPhotoCards }) => {
  const [activeNavItem, setActiveNavItem] = useState("explore");
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axiosInstance.get("/current-user");
        setCurrentUserId(response.data.id);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchPhotoCards = async () => {
      try {
        const response = await axiosInstance.get("/sample-data");
        const sortedData = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        console.log("Fetched photo cards:", sortedData);
        setPhotoCards(sortedData);
      } catch (error) {
        console.error("Error fetching photo cards:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    if (photoCards.length === 0) {
      fetchPhotoCards();
    } else {
      setLoading(false); 
    }
  }, [photoCards, setPhotoCards]);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="homepage">
      <Header />
      <main className="homepage__content">
        <HorizontalNavbar items={navItems} />
        <div className="homepage__photo-cards">
          {loading ? (
            // Render Skeletons if loading
            Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)
          ) : (
            // Render PhotoCards if not loading
            photoCards
              .filter((card) => card.user_id !== currentUserId)
              .map((card, index) => {
                console.log("Rendering card:", card);
                if (!card.id) {
                  console.error("Card without id:", card);
                }
                return (
                  <PhotoCard
                    key={card.id || `card-${index}`} // Ensure a unique key, fallback to index if id is undefined
                    id={card.id}
                    imageSrc={card.imgSrc}
                    imageAlt={card.provider}
                    title={card.provider}
                    subtitle={card.service}
                    description={card.exchange.split(" - ")[0]}
                  />
                );
              })
          )}
        </div>
        <NavMenu activeItem={activeNavItem} onItemClick={handleNavItemClick} />
      </main>
      <Footer className="footer" />
    </div>
  );
};

HomePage.propTypes = {
  photoCards: PropTypes.array.isRequired,
  setPhotoCards: PropTypes.func.isRequired,
};

export default HomePage;