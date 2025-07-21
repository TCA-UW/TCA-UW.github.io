import React, { useState } from 'react'; 
import { useLocation, Link } from 'react-router-dom'; 
import '../css/Header.css'; 
import TCALogo from '../assets/TCALogo.png';

const Header = () => {
  const location = useLocation();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = (path) =>
    location.pathname === path ? "active-nav" : "nav-link";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="nav-wrapper">
        <Link to="/" className="logo">
          <img src={TCALogo} alt="TCA Logo" className="logo-img" />
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
        
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <Link to="/" className={getNavLinkClass("/")} onClick={closeMobileMenu}>Home</Link>
          
          <div
            className="dropdown"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <Link
              to="/about"
              className={`${getNavLinkClass("/about")} dropdown-toggle`}
              onClick={closeMobileMenu}
            >
              About
              <span className="dropdown-caret">▼</span>
            </Link>
            {(isAboutDropdownOpen || isMobileMenuOpen) && (
              <div className="dropdown-menu">
                <Link
                  to="/about/subteams"
                  className={getNavLinkClass("/about/subteams")}
                  onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
            >
              Members
              <span className="dropdown-caret">▼</span>
            </Link>
            {(isMembersDropdownOpen || isMobileMenuOpen) && (
              <div className="dropdown-menu">
                <Link
                  to="/members/executive-team"
                  className={getNavLinkClass("/members/executive-team")}
                  onClick={closeMobileMenu}
                >
                  Executive Team
                </Link>
                <Link
                  to="/members/exec-subteams"
                  className={getNavLinkClass("/members/ExecSubMembers")}
                  onClick={closeMobileMenu}
                >
                  Executive Subteams
                </Link>
                <Link
                  to="/members/consultants"
                  className={getNavLinkClass("/members/consultants")}
                  onClick={closeMobileMenu}
                >
                  Consultants
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/services" className={getNavLinkClass("/services")} onClick={closeMobileMenu}>Services</Link>
          <Link to="/join" className={getNavLinkClass("/join")} onClick={closeMobileMenu}>Join</Link>
          <Link to="/faq" className={getNavLinkClass("/faq")} onClick={closeMobileMenu}>FAQ</Link>
          <Link to="/contact" className={getNavLinkClass("/contact")} onClick={closeMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;