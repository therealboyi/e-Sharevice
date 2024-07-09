// Profile.jsx

import React, { useState } from 'react';
import './Profile.scss';
import NavMenu from "../../components/NavMenu/NavMenu";
import Avatar from '../../components/Avatar/Avatar'; 

const Profile = () => {
  const [activeNavItem, setActiveNavItem] = useState('profile');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="profile">
      <header className="profile__header">
        <h1 className="profile__title">Profile</h1>
        <div className="profile__notification">
          <i className="profile__icon profile__icon--notification" />
        </div>
      </header>
      <div className="profile__info">
        <Avatar className="profile__avatar" src="path/to/avatar.jpg" alt="Marvin's avatar" /> {/* Use the Avatar component with src prop */}
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
      <button className="profile__logout">Logout</button>
      <NavMenu
        activeItem={activeNavItem}
        onItemClick={handleNavItemClick}
      />
    </div>
  );
};

const settings = [
  { label: 'Personal Information', icon: 'personal-info' },
  { label: 'Payments', icon: 'payments' },
  { label: 'Login & Security', icon: 'login-security' },
  { label: 'Accessibility', icon: 'accessibility' },
  { label: 'Face ID', icon: 'face-id' },
  { label: 'Support', icon: 'support' },
  { label: 'Feedback', icon: 'feedback' },
  { label: 'Privacy & Sharing', icon: 'privacy-sharing' },
];

export default Profile;
