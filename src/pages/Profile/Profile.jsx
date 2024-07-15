// src/pages/Profile/Profile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import Header from "../../components/Header/Header";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import { useAuth } from "../../contexts/AuthContext.jsx";
import NavMenu from "../../components/NavMenu/NavMenu";

const Profile = () => {
  const [activeNavItem, setActiveNavItem] = useState("profile");
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home page after logout
    window.location.reload();
  };

  return (<>
    <Header />
    <main>
      <div className="profile">
        <div className="profile__content">
          <header className="profile__header">
            <h1 className="profile__title">Profile</h1>
            <div className="profile__notification">
              <i className="profile__icon profile__icon--notification" />
            </div>
          </header>
          <div className="profile__info">
            <ProfileAvatar
              className="profile__ProfileAvatar"
              src="/src/assets/images/avatar.png"
              alt="Marvin's ProfileAvatar"
            />{" "}
            <div className="profile__details">
              <p className="profile__name">Marvin</p>
              <p className="profile__description">Click to show profile</p>
            </div>
            <i className="profile__icon profile__icon--arrow" />
          </div>
          <hr className="profile__divider" />
          <div className="profile__settings">
            <h2 className="profile__settings-title">Settings</h2>
            <ul className="profile__settings-list">
              {settings.map((setting) => (
                <li className="profile__settings-item" key={setting.label}>
                  <i className={`profile__icon profile__icon--${setting.icon}`} />
                  <span className="profile__settings-label">{setting.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="profile__logout" onClick={handleLogout}>
            Logout
          </button>
          <NavMenu activeItem={activeNavItem} onItemClick={handleNavItemClick} />
        </div>
      </div>
    </main></>
  );
};

const settings = [
  { label: "Personal Information", icon: "personal-info" },
  { label: "Payments", icon: "payments" },
  { label: "Login & Security", icon: "login-security" },
  { label: "Accessibility", icon: "accessibility" },
  { label: "Face ID", icon: "face-id" },
  { label: "Support", icon: "support" },
  { label: "Feedback", icon: "feedback" },
  { label: "Privacy & Sharing", icon: "privacy-sharing" },
];

export default Profile;
