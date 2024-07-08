// AvatarMenu.jsx

import React from 'react';
import './AvatarMenu.scss';

const AvatarMenu = () => {
  return (
    <div className="avatar-menu">
      <ul className="avatar-menu__list">
        <li className="avatar-menu__item">Messages</li>
        <li className="avatar-menu__item">Exchange</li>
        <li className="avatar-menu__item">Saved+</li>
        <li className="avatar-menu__divider"></li>
        <li className="avatar-menu__item">Portfolio Dashboard</li>
        <li className="avatar-menu__item">Refer a friend</li>
        <li className="avatar-menu__item">Account</li>
        <li className="avatar-menu__divider"></li>
        <li className="avatar-menu__item">Support Hub</li>
        <li className="avatar-menu__item">Log out</li>
      </ul>
    </div>
  );
};

export default AvatarMenu;
