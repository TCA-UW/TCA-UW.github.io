import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../css/Header.css';
import TCALogo from '../assets/TCALogo.png';

const Header = () => {
  const location = useLocation();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);

  const getNavLinkClass = (path) =>
    location.pathname === path ? "active-nav" : "nav-link";

  return (
    <header className="header-container">
      <div className="nav-wrapper">
        <Link to="/" className="logo">
          <img src={TCALogo} alt="TCA Logo" className="logo-img" />
        </Link>
        
        <nav className="nav">
          <Link to="/" className={getNavLinkClass("/")}>Home</Link>
      
          <div 
            className="dropdown"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <Link 
              to="/about" 
              className={`${getNavLinkClass("/about")} dropdown-toggle`}
            >
              About
              <span className="dropdown-caret">▼</span>
            </Link>
            {isAboutDropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/about/subteams" 
                  className={getNavLinkClass("/about/subteams")}
                >
                  Subteams
                </Link>
              </div>
            )}
          </div>
          
          <div 
            className="dropdown"
            onMouseEnter={() => setIsMembersDropdownOpen(true)}
            onMouseLeave={() => setIsMembersDropdownOpen(false)}
          >
            <Link 
              to="/members" 
              className={`${getNavLinkClass("/members")} dropdown-toggle`}
            >
              Members
              <span className="dropdown-caret">▼</span>
            </Link>
            {isMembersDropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/members/executive-team" 
                  className={getNavLinkClass("/members/executive-team")}
                >
                  Executive Team
                </Link>
                <Link 
                  to="/members/consultants" 
                  className={getNavLinkClass("/members/consultants")}
                >
                  Consultants
                </Link>
              </div>
            )}
          </div>

          <Link to="/services" className={getNavLinkClass("/services")}>Services</Link>
          <Link to="/join" className={getNavLinkClass("/join")}>Join</Link>
          <Link to="/faq" className={getNavLinkClass("/faq")}>FAQ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;