import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../css/Header.css';
import TCALogo from '../assets/TCALogo.png';

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) =>
    location.pathname === path
      ? "active-nav"
      : "nav-link";

  return (
    <header className="header-container">
      <div className="nav-wrapper">
        <Link to="/" className="logo">
          <img src={TCALogo} alt="TCA Logo" className="logo-img" />
        </Link>

        <nav className="nav">
          <Link to="/" className={getNavLinkClass("/")}>Home</Link>
          <Link to="/about" className={getNavLinkClass("/about")}>About</Link>
          <Link to="/members" className={getNavLinkClass("/members")}>Members</Link>
          <Link to="/services" className={getNavLinkClass("/services")}>Services</Link>
          <Link to="/join" className={getNavLinkClass("/join")}>Join</Link>
          <Link to="/faq" className={getNavLinkClass("/faq")}>FAQ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
