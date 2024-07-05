// Header.jsx

import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import InputField from '../InputField/InputField';
import { FaSearch } from 'react-icons/fa'; 
import './Header.scss';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src="/src/assets/logo/logo.svg" alt="Logo" className="header__logo-img" />
      </div>
      <div className="header__search">
        <InputField 
          type="text" 
          placeholder="Search..." 
          icon={<FaSearch />} 
          value={searchValue} 
          onChange={handleSearchChange} 
        />
      </div>
      <div className="header__avatar">
        <Avatar src="/src/assets/images/avatar.png" alt="Avatar" size="medium" />
      </div>
    </header>
  );
};

export default Header;