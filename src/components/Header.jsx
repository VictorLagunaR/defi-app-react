import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded)
    if (!isExpanded) {
      unloadScrollBars()
    }else{
      reloadScrollBars()
    }
  };

  function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; // IE
  }
  
  function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // IE
  }

  return (
    <header className="header-container">
      <div className="logo">TOKSWAP</div>
      <nav className="menu">
        <div className="menu-links">
          <a href="">App</a>
          <a href="">Products</a>
          <a href="">Build</a>
          <a href="">Careers</a>
          <a href="">About</a>
        </div>
      </nav>
      <div className="wallet-btn">
        <button className="primary">Enter App</button>
      </div>
      <button className="hamburger" onClick={toggleExpanded}>
        <MenuIcon />
      </button>
        {isExpanded && (
          <div className="menu-overlay">
            <div className="menu-links">
              <a href="">App</a>
              <a href="">Products</a>
              <a href="">Build</a>
              <a href="">Careers</a>
              <a href="">About</a>
              <a href="">Enter App</a>
            </div>
          </div>
        )}
    </header>
  );
};

export default Header;
