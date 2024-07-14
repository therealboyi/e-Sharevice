// Header.jsx

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import InputField from "../InputField/InputField";
import { FaSearch } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const updateScreenSize = () => {
    setIsLargeScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const showSearchInput = location.pathname === "/";

  // Always show the header on the homepage
  const isHomePage = location.pathname === "/";

  if (!isLargeScreen && !isHomePage) {
    return null; // Don't render the header on small screens except on the homepage
  }

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" onClick={handleLogoClick}>
          <img
            src="/src/assets/logo/logo.png"
            alt="Logo"
            className="header__logo-img"
          />
        </Link>
      </div>
      {showSearchInput && (
        <div className="header__search">
          <InputField
            type="text"
            placeholder="Search e-Sharevice"
            icon={<FaSearch />}
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      )}
      <div className="header__avatar">
        <Avatar
          src="/src/assets/images/avatar.png"
          alt="Avatar"
          size="medium"
        />
      </div>
    </header>
  );
};

export default Header;
