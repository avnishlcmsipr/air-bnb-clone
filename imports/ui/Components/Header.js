import React, { useEffect, useState } from "react";
import "./Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowSearch(true);
    } else {
      setShowSearch(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [showSearch]);
  return (
    <div className={showSearch ? "header" : "header_new"}>
      <img
        className="header__icon"
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
        alt="air bnb"
      />
      {showSearch ? (
        <div className="header__center">
          <input type="text" placeholder="Start your search" />
          <SearchIcon />
        </div>
      ) : (
        <div className="center_links">
          <Link to="/">Places to stay</Link>
          <Link to="/rooms">Rooms</Link>
          <Link>Online Experiences</Link>
        </div>
      )}

      <div className="header__right">
        <p className="host_para">Become a host</p>
        <LanguageIcon className="host_icon" />
        <Avatar />
      </div>
    </div>
  );
}

// export default Header;
